<script setup>
const props = defineProps(['src'])
const img = ref()
const clipframe = ref()
const imageviewer = ref()

onMounted(() => {
    console.log(img.value.naturalHeight)
})

async function open() {
    imageviewer.value.style['transition-delay'] = "0ms";
    clipframe.value.style['transition-delay'] = "200ms";

    imageviewer.value.style.display = "block"
    setTimeout(() => {
        imageviewer.value.style.opacity = 1;
        clipframe.value.style.transform = "translateY(0%)"
    }, 100)
}

async function close() {
    imageviewer.value.style['transition-delay'] = "300ms";
    clipframe.value.style['transition-delay'] = "0ms";

    imageviewer.value.style.opacity = 0;
    clipframe.value.style.transform = "translateY(200%)"
    setTimeout(() => {
        imageviewer.value.style.display = "none"
    }, 800)
}

defineExpose({ open, close })
</script>

<template>
    <div class="imageviewer" ref="imageviewer">
        <div class="shadow" @click="close"></div>
        <div class="clipframe" ref="clipframe">
            <img :src="src" ref="img">
        </div>
        <button @click="close">
            <Icon name="material-symbols-light:close" size="3rem" color="black" />
        </button>
    </div>
</template>

<style>
.imageviewer {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 3rem;
    z-index: 1;
    opacity: 0;
    display: none;
    transition: opacity 500ms;
    transition-delay: 300ms;

    >.shadow {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: -1;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    @media screen and (max-width: 800px) {
        padding: 3rem 1rem;
    }

    >.clipframe {
        overflow: hidden;
        width: 100%;
        height: 100%;
        transition: transform 500ms;
        transform: translateY(200%);

        >img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    >button {
        position: absolute;
        right: 0px;
        top: 0px;
        background: none;
        border: none;
    }
}
</style>