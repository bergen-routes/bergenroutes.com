<script setup lang="ts">
const showFullNavShadow = ref(false)
const mobile_nav = ref()
const nav_shadow = ref()

onMounted(() => {
    window.addEventListener('scroll', () => {
        showFullNavShadow.value = window.scrollY > 10
    })
})

async function open() {
    nav_shadow.value.style['transition-delay'] = "0ms";
    mobile_nav.value.style['transition-delay'] = "200ms";

    nav_shadow.value.style.display = "block"
    mobile_nav.value.style.display = "block"
    setTimeout(() => {
        nav_shadow.value.style.opacity = 1;
        mobile_nav.value.style.transform = "translateX(0%)"
    }, 100)
}

async function close() {
    nav_shadow.value.style['transition-delay'] = "300ms";
    mobile_nav.value.style['transition-delay'] = "0ms";

    nav_shadow.value.style.opacity = 0;
    mobile_nav.value.style.transform = "translateX(100%)"
    setTimeout(() => {
        mobile_nav.value.style.display = "none"
        nav_shadow.value.style.display = "none"
    }, 800)
}
</script>

<template>
    <header class="menu_bar">
        <nav class="full_nav">
            <ul>
                <li class="home"><a href="/"><img src="/images/bergen_routes_logo_inline.svg"></a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#journey">Journey</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="mobile_menu" :class="{ show_shadow: showFullNavShadow }">
            <a href="/" class="logo">
                <img src="/images/bergen_routes_logo.svg" />
            </a>
            <button class="menu" @click="open">
                <Icon name="material-symbols:menu-rounded" size="1.75rem" color="var(--g4)" />
            </button>

            <div class="nav_shadow" ref="nav_shadow" @click="close"></div>
            <nav ref="mobile_nav">
                <button @click="close">
                    <Icon name="material-symbols-light:close" size="1.75rem" color="var(--g4)" />
                </button>
                <ul>
                    <li><a href="#about" @click="close">About</a></li>
                    <li><a href="#journey" @click="close">Journey</a></li>
                    <li><a href="#team" @click="close">Team</a></li>
                    <li><a href="#contact" @click="close">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style>
header.menu_bar {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;

    >.full_nav {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
        }

        width: fit-content;
        padding: .25rem;
        background-color: white;
        border: 1px solid var(--g2);
        border-radius: .5rem;
        margin: 1rem auto 0 auto;

        >ul {
            list-style: none;
            padding: 0 .5rem;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(5, 6rem);
            align-items: center;
            justify-items: center;
            font-size: .85rem;
            color: var(--g4);

            >li {
                text-align: center;
                height: fit-content;

                >a {
                    display: block;
                    padding: .5rem;
                }
            }

            >li.home {
                >a>img {
                    height: 1rem;
                }
            }
        }
    }

    >.mobile_menu {
        height: 4rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 .25rem 0 1rem;
        transition: box-shadow 200ms ease-in-out;
        background-color: white;

        &.show_shadow {
            box-shadow: 0px 1px 4px 0px var(--g2);
        }

        @media screen and (min-width: 1024px) {
            display: none;
        }

        >.logo {
            >img {
                height: 1.5rem;
            }
        }

        >button {
            border: none;
            display: flex;
            align-items: center;
            padding: 1rem;
            background-color: transparent;
        }

        >.nav_shadow {
            display: none;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;

            transition: opacity 200ms;
        }

        >nav {
            position: fixed;
            top: 0;
            right: 0;

            background-color: white;
            border-top: 0;
            border-bottom-left-radius: .5rem;

            transform: translateX(100%);

            transition: transform 200ms;

            >button {
                border: none;
                display: flex;
                align-items: center;
                padding: 1rem;
                background-color: transparent;
                margin-left: auto;
            }

            ul {
                list-style: none;
                padding: .5rem 1rem;
                margin: 0;
                display: grid;
                grid-template-rows: repeat(4, min-content);
                gap: .5rem;

                >li {
                    >a {
                        display: block;
                        width: 100%;
                        padding: .5rem;
                    }
                }
            }
        }
    }
}
</style>