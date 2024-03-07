<script setup lang="ts">
import { ObservablePoint, Point, type PointLike } from 'pixi.js';
import Victor from 'victor';

const container = ref()
const page = ref()

onMounted(async () => {
    window.addEventListener('resize', () => {
        container.value.style.height = window.innerHeight + "px"
    })
    window.dispatchEvent(new Event('resize'))

    const { Application, Sprite, Assets, Graphics, Point } = await import('pixi.js')
    const app = new Application();
    await app.init({
        resizeTo: container.value,
        backgroundColor: 'lightgray'
    })
    container.value.appendChild(app.canvas);


    // const arrowsCount = 20
    // const arrows = []
    // const arrowTexture = await Assets.load('/images/purple_arrow.svg')
    // for (let i = 0; i < arrowsCount; i++) {
    //     const arrow = new Sprite(arrowTexture)
    //     arrow.anchor.set(.5, 0)
    //     arrow.scale.set(0.8 + Math.random() * 0.3)

    //     arrow.tint = generateRandomGrayHexColor();

    //     arrow.position.x = app.renderer.width * Math.random()
    //     arrow.position.y = app.renderer.height * Math.random()

    //     arrows.push(arrow)
    //     app.stage.addChild(arrow);
    // }

    const pointCount = 500
    for (let i = 0; i < pointCount; i++) {
        let graphics = new Graphics()
        let point = randomPointOnFrame(container.value.offsetWidth, container.value.offsetHeight)
        console.log(point)
        graphics.circle(point.x, point.y, 2)
        graphics.fill('red')
        let projection = graphics.position.project(new Point(container.value.offsetWidth / 2, container.value.offsetHeight / 2))
        graphics.circle(projection.x, projection.y, 3)
        graphics.fill('black')

        app.stage.addChild(graphics);
    }

    // Listen for frame updates
    app.ticker.add(() => {
        // each frame we spin the bunny around a bit
    });

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