<script setup lang="ts">
const page = ref()
onMounted(async () => {
    const { Application, Sprite, Assets, Graphics } = await import('pixi.js')
    const app = new Application({
        resizeTo: window,
        backgroundColor: 'lightgray'
    })
    page.value.appendChild(app.view);

    const arrowsCount = 20
    const arrows = []
    const arrowTexture = await Assets.load('/images/purple_arrow.svg')
    for (let i = 0; i < arrowsCount; i++){
        const arrow = new Sprite(arrowTexture)
        arrow.anchor.set(.5, 0)
        arrow.scale.set(0.8 + Math.random() * 0.3)

        arrow.tint = generateRandomGrayHexColor();
        
        arrow.position.x = app.renderer.width * Math.random()
        arrow.position.y = app.renderer.height * Math.random()

        arrows.push(arrow)
        app.stage.addChild(arrow);
    }
    

    // Listen for frame updates
    app.ticker.add(() => {
        // each frame we spin the bunny around a bit
    });
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
    <div ref="page" class="page"></div>
</template>

<style>
.page{
    height: 2000px;
}
</style>