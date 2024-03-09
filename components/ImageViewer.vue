<script setup>
import { gsap } from "gsap";

const props = defineProps(['src'])
const imageviewer = ref()
var mainImg = null

const tl = gsap.timeline({
    paused: true
})

onMounted(() => {
    mainImg = imageviewer.value.querySelector('img.main')

    if (mainImg.naturalWidth > mainImg.naturalHeight) {
        mainImg.style.width = '100%'
    } else {
        mainImg.style.height = '100%'
    }

    tl.fromTo(imageviewer.value, {
        display: 'none'
    }, {
        display: 'flex',
        duration: 0
    })
    tl.fromTo(imageviewer.value, {
        opacity: 0
    }, {
        opacity: 1,
        duration: .2
    })
    tl.fromTo(mainImg, {
        translateY: window.innerHeight + 'px'
    }, {
        translateY: '0px',
        duration: .2,
        ease: 'power1.out'
    }, ">-0.05")
    tl.addPause(">")
    tl.to(mainImg, {
        translateY: window.innerHeight + 'px',
        duration: .2,
        ease: 'power1.in'
    })
    tl.to(imageviewer.value, {
        opacity: 0,
        duration: .3
    })
    tl.to(imageviewer.value, {
        display: 'none',
        duration: 0
    })

    tl.seek(0)
})

async function open() {
    tl.restart()
}

async function close() {
    tl.play()
}

defineExpose({ open, close })
</script>

<template>
    <div class="imageviewer" ref="imageviewer">
        <div class="shadow" @click="close"></div>
        <NuxtImg :src="src" class="main" />
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
    z-index: 10;
    opacity: 0;
    display: none;
    justify-content: center;
    align-items: center;

    >.shadow {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: -1;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    >img.main {
        margin: auto;
    }

    @media screen and (max-width: 800px) {
        padding: 3rem 1rem;
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