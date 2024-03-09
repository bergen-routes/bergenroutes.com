<script setup>
const overlay = ref()
onMounted(() => {
    overlay.value.style.height = window.innerHeight + "px"
})

</script>

<template>
    <div ref="page" class="page">
        <ArrowBackdrop class="backdrop" />
        <div class="overlay" ref="overlay">
            <h1>Test Text</h1>
        </div>
    </div>

</template>

<style>
.page {
    position: relative;
    height: 2000px;
}

.backdrop {
    position: absolute;
    top: 0;
    left: 0;
}

.overlay {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffffff75;
    background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 84%, rgba(255,255,255,1) 100%);

    h1 {
        margin:0 auto;
        font-family: 'Montserrat', sans-serif;
        font-size: 5rem;
        font-weight: 900;
        color: var(--brand-purple);
    }
}
</style>