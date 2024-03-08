<script setup lang="ts">
import { ObservablePoint, Point, type PointLike } from 'pixi.js';
import Victor from 'victor'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

PixiPlugin.registerPIXI(await import('pixi.js'))

gsap.registerPlugin(ScrollTrigger, PixiPlugin);

const container = ref()
const page = ref()

onMounted(async () => {
    window.addEventListener('resize', () => {
        container.value.style.height = window.innerHeight + "px"
    })
    window.dispatchEvent(new Event('resize'))

    const { Application, Sprite, Assets, Graphics, BlurFilter } = await import('pixi.js')
    const app = new Application();
    await app.init({
        resizeTo: container.value,
        backgroundColor: 'white',
        autoDensity: true,
        resolution: 2
    })
    container.value.appendChild(app.canvas);
    
    const blurFilter = new BlurFilter();
    blurFilter.blur = 3

    const center = new Victor(container.value.offsetWidth, container.value.offsetHeight).divideScalar(2)

    let graphics = new Graphics()
    graphics.rect(0, 0, container.value.offsetWidth, container.value.offsetHeight)
    graphics.stroke({ color: 'red' })

    graphics.circle(center.x, center.y, 20)
    graphics.stroke({ color: 'red' })

    app.stage.addChild(graphics);

    const arrowsCount = 30
    const arrows = []

    const arrowTexture = await Assets.load('/images/purple_arrow.svg')
    for (let i = 0; i < arrowsCount; i++) {
        let point = randomPointOnFrame(container.value.offsetWidth, container.value.offsetHeight)
        let randomZMultiplier = Math.random()

        const arrow = new Sprite({
            texture: arrowTexture,

        })
        arrow.anchor.set(.5, 0)

        arrow.scale.set(.5 + randomZMultiplier * 1.5)

        arrow.zIndex = randomZMultiplier

        arrow.tint = lerpGrayscaleHexColor(.75 + (randomZMultiplier * .25));

        let reference = point.clone().subtract(center)
        let normalized = reference.clone().normalize()

        arrow.rotation = reference.direction() - (Math.PI / 2) + (Math.PI * Math.random() * .2)
        let xNormal = Math.cos(arrow.rotation + (Math.PI / 2))
        let yNormal = Math.sin(arrow.rotation + (Math.PI / 2))

        let offsetMagnitude = Math.random()
        // arrow.position.x = point.x - (10 * xNormal) - (xNormal * offsetMagnitude * 300)
        // arrow.position.y = point.y - (10 * yNormal) - (yNormal * offsetMagnitude * 300)
        arrow.position.x = point.x
        arrow.position.y = point.y

        arrows.push(arrow)
        app.stage.addChild(arrow);

        gsap.to(arrow, {
            pixi: {
                positionX: point.x - (10 * xNormal) - (xNormal * offsetMagnitude * 1200),
                positionY: point.y - (10 * yNormal) - (yNormal * offsetMagnitude * 1200)
            },
            scrollTrigger: {
                start: 0,
                end: container.value.offsetHeight,
                scrub: .5
            }
        })
    }

    // app.stage.scale = .5
    // app.stage.position.x = container.value.offsetWidth / 4
    // app.stage.position.y = container.value.offsetHeight / 4
    // app.stage.filters = blurFilter

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
})

function generateRandomGrayHexColor() {
    // Generate a random number between 0 and 255
    const randomValue = Math.floor(Math.random() * 256);
    // Convert the number to a hexadecimal string
    const hexValue = randomValue.toString(16).padStart(2, '0');
    // Concatenate the strings to form a hex color code
    return `#${hexValue}${hexValue}${hexValue}`;
}

function lerpGrayscaleHexColor(v: number) {
    let value = Math.floor(v *= 256)
    const hexValue = value.toString(16).padStart(2, '0')
    return `#${hexValue}${hexValue}${hexValue}`
}

</script>

<template>
    <div ref="page" class="page">
        <div ref="container" class="container"></div>
    </div>
</template>

<style>
.page {
    height: 2000px;
}

.container {
    width: 100%;
}
</style>