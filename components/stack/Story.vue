<script setup lang="ts">

</script>

<template>
    <section class="story">
        <div class="content_wrapper">
            <h1>How it Started</h1>
            <img src="/images/temp_media.svg">
            <p>
                Bergen Routes started when the members of the Computer Science Club at Bergen Community College
                decided to make finding their meeting room easier for new members. The idea expanded to encompas the whole
                campus. Soon Bergen Routes became an official project supported by the STEM Student Scholar Program.
                This provided the team with critical funds, sourced via federal grants.
            </p>
        </div>
    </section>
</template>

<style>
.stack>.story {
    padding: 1rem;
    color: var(--g4);

    >.content_wrapper {
        max-width: 960px;
        margin: 0 auto;
        >img {
            margin: 1rem auto;
            width: 90%;
        }

        >h1 {
            margin: 1rem 0 1.5rem 0;
            padding: 0 0 .25rem 0;
            border-bottom: 1px solid var(--g4);
            font-weight: 300;
        }
    }
}
</style>