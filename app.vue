<script setup lang="ts">
</script>

<template>
    <NuxtPage />
</template>

<style>
html {
    height: 100%;
    font-family: 'Inter', sans-serif;
}

input[type="text"] {
    font-family: 'Inter', sans-serif;
}

body {
    height: 100%;
    margin: 0px;
}

:root {
    --brand-purple: rebeccapurple;
    --brand-orange: #F39E00;
    --brand-orange-border: #dc8f00;
    --g0: #fafafa;
    --g1: #f6f6f6;
    --g2: #ededed;
    --g3: lightgray;
    --g4: #404040;
    /* --highlight: #3c7614; */
    --border-radius: .75rem;
}

img {
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: #d089ff22;

    &:visited {
        color: inherit;
    }
}

div.shadow {
    background-color: #00000025;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

:focus-visible {
    outline: 3px solid black;
    outline-offset: -3px;
}

* {
    box-sizing: border-box;
}

/* ::selection {
    background: var(--highlight);
    color: white;
} */

.grecaptcha-badge {
    visibility: hidden !important;
}

button.standard {
    border-radius: .5rem;
    border: 1px solid var(--g3);
    background-color: var(--g2);
    color: var(--g4);
    padding: .75rem 1.25rem;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 2px 0px var(--g3);
}
</style>