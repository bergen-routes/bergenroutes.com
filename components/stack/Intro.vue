<script setup>
const intro = ref()

onMounted(() => {
    intro.value.style.height = window.innerHeight + "px"
})

async function scrollToAbout() {
    const about = document.getElementById('about');
    // window.location.href = "#about"
    const offsetTop = about.offsetTop - 100
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    })
}
</script>

<template>
    <section ref="intro" class="intro">
        <ArrowBackdrop class="backdrop" />
        <div class="body">
            <h1>
                <span>Bergen Routes</span>
                <span>Find Your Way</span>
            </h1>
            <div class="button_wrapper">
                <button class="standard try_demo" style="display:none;">
                    Try Demo
                </button>
                <button class="standard learn_more" @click="scrollToAbout">
                    <span>Learn More</span>
                    <Icon name="material-symbols:arrow-downward-rounded" color="#404040" size="1rem" />
                </button>
            </div>
        </div>
    </section>
</template>

<style>
.stack>.intro {
    position: relative;

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .body {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        z-index: 1;

        background-color: rgba(255, 255, 255, 0.5);
        /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 84%, rgba(255, 255, 255, 1) 100%); */

        &>h1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin: 0;

            &>span:nth-child(1) {
                font-family: 'Montserrat', sans-serif;
                font-size: 5rem;
                font-weight: 900;
                color: var(--brand-purple);
            }

            &>span:nth-child(2) {
                margin-top: 1rem;
                font-size: 1.5rem;
                font-weight: 300;
                color: var(--g4);
            }
        }

        &>.button_wrapper {
            display: grid;
            /* grid-template-rows: min-content min-content; */
            grid-template-rows: min-content;
            grid-template-columns: none;
            gap: 1rem;

            @media screen and (min-width: 1024px) {
                /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
                grid-template-columns: minmax(0, 1fr);
                grid-template-rows: none;
            }

            &>button.try_demo {
                background-color: var(--brand-orange);
                color: white;
                border-color: var(--brand-orange-border);
                cursor: pointer;
            }

            &>button.learn_more {
                gap: .5rem;
                background-color: white;
                border-color: var(--g1);
                cursor: pointer;
            }
        }

    }
}
</style>