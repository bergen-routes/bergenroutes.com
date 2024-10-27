<script setup lang="ts">
import Victor from 'victor'
import * as PIXI from 'pixi.js'
import { Application, Sprite, Assets, Graphics, BlurFilter, Container } from 'pixi.js'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

PixiPlugin.registerPIXI(PIXI)
gsap.registerPlugin(ScrollTrigger, PixiPlugin);

const container = ref()

// CONFIG
/** Height multiplier used for verticle scrolling parallax effect. */
const parallaxScale = 1.5

function resizeToWindow() {
    let totalHeight = window.innerHeight * parallaxScale
    container.value.style.height = totalHeight + "px"

    drawView()
}

onMounted(async () => {
    await init()
    resizeToWindow()
})

const app = new Application()
/** Initialize the PIXI app. **do this only once** */
async function init() {
    console.log("App initialized")
    await app.init({
        resizeTo: container.value,
        backgroundColor: 'white',
        autoDensity: true,
        resolution: 2
    })
    container.value.appendChild(app.canvas)

    const blurFilter = new BlurFilter();
    blurFilter.strength = 3
    app.stage.filters = blurFilter
}

const skewLevels = [
    600,
    500,
    400,
    300
]

const tintLevels = [
    '#faf9fa',
    '#f5f3f6',
    '#f1ecf3',
    '#e6e0eb'
]

const scaleLevels = [
    2,
    2.5,
    4,
    6
]

async function drawView() {
    app.resize()
    app.stage.getChildByLabel('debug')?.destroy({ children: true })
    app.stage.getChildByLabel('arrows')?.destroy({ children: true })

    const frameWidth = window.innerWidth
    const frameHeight = window.innerHeight
    console.log("Redraw")

    const center = new Victor(frameWidth, frameHeight).divideScalar(2)

    // DEBUG
    // let debugContainer = new Container({ label: "debug" })
    // let debugGraphics = new Graphics()

    // debugGraphics.rect(0, 0, frameWidth, frameHeight)
    // debugGraphics.stroke({ color: 'red' })

    // debugGraphics.circle(center.x, center.y, 20)
    // debugGraphics.stroke({ color: 'red' })

    // debugContainer.addChild(debugGraphics)
    // app.stage.addChild(debugContainer);

    // ARROWS
    const arrowTexture = await Assets.load('/images/purple_arrow.svg')
    let arrowContainer = new Container({ label: "arrows" })

    const arrowsCount = 20
    const arrows = []

    for (let i = 0; i < arrowsCount; i++) {
        let point = randomPointOnFrame(frameWidth, frameHeight)
        let randomZIndex = Math.round(Math.random() * 4)

        const arrow = new Sprite({
            texture: arrowTexture,

        })
        arrow.anchor.set(.5, 0)

        let parallaxSkew = skewLevels[randomZIndex]

        arrow.scale.set(scaleLevels[randomZIndex] * (.75 + (frameWidth * .25 / 2200)))

        arrow.zIndex = randomZIndex

        arrow.tint = tintLevels[randomZIndex];

        let reference = point.clone().subtract(center)

        arrow.rotation = reference.direction() - (Math.PI / 2) + (Math.PI * (.05 + (Math.random() * .15)))
        let xNormal = Math.cos(arrow.rotation + (Math.PI / 2))
        let yNormal = Math.sin(arrow.rotation + (Math.PI / 2))

        let offsetMagnitude = .2 + (Math.random() * .8)
        arrow.position.x = point.x
        arrow.position.y = point.y

        arrows.push(arrow)
        arrowContainer.addChild(arrow);

        let tl = gsap.timeline()
        tl.fromTo(arrow, {
            pixi: {
                positionX: point.x + (xNormal * offsetMagnitude * 600),
                positionY: point.y + (yNormal * offsetMagnitude * 600)
            }
        }, {
            pixi: {
                positionX: point.x - (xNormal * offsetMagnitude * 800),
                positionY: point.y - (yNormal * offsetMagnitude * 800)
            },
            duration: 2
        })
        tl.fromTo(arrow, {
            pixi: {
                positionX: point.x - (xNormal * offsetMagnitude * 800),
                positionY: point.y - (yNormal * offsetMagnitude * 800)
            }
        }, {
            pixi: {
                positionX: point.x - (xNormal * offsetMagnitude * 2000),
                positionY: point.y - (yNormal * offsetMagnitude * 2000) + parallaxSkew
            },
            scrollTrigger: {
                start: 0,
                end: container.value.offsetHeight,
                scrub: true
            }
        })
        // tl.to(arrow, {
        //     pixi: {
        //         positionX: point.x - (xNormal * offsetMagnitude * 2000),
        //         positionY: point.y - (yNormal * offsetMagnitude * 2000) + parallaxSkew
        //     },
        //     scrollTrigger: {
        //         start: 0,
        //         end: container.value.offsetHeight,
        //         scrub: .5
        //     }
        // })

        arrow.addListener('destroyed', ()=>{tl.kill()})
    }

    app.stage.addChild(arrowContainer)
}

function randomPointOnFrame(frameWidth: number, frameHeight: number) {
    var res: Victor
    const partialFrameLength = frameWidth + frameHeight
    const randomDistanceAlongPartialFrame = Math.random() * partialFrameLength
    const randomMultiplierA = Math.round(Math.random())
    const randomMultiplierB = Math.round(Math.random())
    if (randomDistanceAlongPartialFrame < frameWidth) {
        res = new Victor(randomDistanceAlongPartialFrame, randomMultiplierA * frameHeight)
    } else if (randomDistanceAlongPartialFrame > frameWidth) {
        res = new Victor(randomMultiplierA * frameWidth, randomDistanceAlongPartialFrame - frameWidth)
    } else {
        res = new Victor(randomMultiplierA * frameWidth, randomMultiplierB * frameHeight)
    }
    return res
}

function lerpGrayscaleHexColor(v: number) {
    let value = Math.floor(v * 256)
    const hexValue = value.toString(16).padStart(2, '0')
    return `#${hexValue}${hexValue}${hexValue}`
}

</script>

<template>
    <div ref="container" class="container"></div>
</template>

<style>
.container {
    width: 100%;
}
</style>