<script setup lang="ts">

</script>

<template>
    <section class="about">
        <div class="media">
            <img src="/images/temp_media.svg">
            <h1>Future of Wayfinding</h1>
            <p>
                In the age of portable electronics, the use of maps and directories have become defunct.
                Bergen Routes is a web based application designed to assist users in navigating large buildings.
                After scanning one of the many QR codes placed around a building and specifying a destination,
                the application will display a set of clear instructions on which route to take.
                Instructions are provided via a visual route assembled using 360° footage of the journey,
                an experience akin to watching a video.
            </p>
        </div>
    </section>
</template>

<style>
.stack>.about {
    background: var(--g0);
    border-top: 1px solid var(--g2);
    padding: 1rem;
    color: var(--g4);

    >img {
        margin: 1rem auto;
        width: 80%;
    }
    >h1 {
        margin: 0px;
        padding: 0 0 .25rem 0;
        border-bottom: 1px solid var(--g4);
        font-weight: 300;
    }
}
</style>