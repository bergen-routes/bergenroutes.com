<script setup lang="ts">
const showFullNavShadow = ref(false)

onMounted(()=>{
    window.addEventListener('scroll', ()=>{
        showFullNavShadow.value = window.scrollY > 10
    })
})
</script>

<template>
    <header class="menu_bar">
        <nav class="full_nav">
            <ul>
                <li class="home"><img src="/images/bergen_routes_logo_inline.svg"></li>
                <li>About</li>
                <li>Journey</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div class="mobile_menu" :class="{show_shadow: showFullNavShadow}">
            <div class="logo">
                <img src="/images/bergen_routes_logo.svg" />
            </div>
            <button class="menu">
                <Icon name="material-symbols:menu-rounded" size="1.75rem" color="var(--g4)" />
            </button>
        </div>
    </header>
</template>

<style>
header.menu_bar {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;

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
            padding: .5rem;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(5, 6rem);
            align-items: center;
            justify-items: center;
            font-size: .85rem;
            color: var(--g4);

            >li {
                text-align: center;
            }

            >li.home {
                >img {
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
        
        &.show_shadow{
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
    }
}</style>