<script setup>
</script>

<template>
    <footer>
        <div class="logos">
            <img src="/images/program_logos.png">
            <img src="/images/STEMatics_logo.png">
        </div>
        <a class="source" href="https://github.com/bergen-routes/bergenroutes.com">
            <span>Like this site?</span>
            <span class="blurb">
                <Icon name="bxl:github" size="1.5rem" color="var(--brand-purple)"/>
                <span>View the source</span>
            </span>
        </a>
    </footer>
</template>

<style>
footer {
    border-top: 4px solid rgb(66, 33, 98);
    background-color: var(--brand-purple);
    color: white;

    padding: 2rem 1rem 1rem;
    display: grid;
    grid-template-columns: minmax(120px, 200px) auto;
    gap: 4rem;

    >.logos {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: .5rem;

        >img {
            width: 100%;
        }
    }

    a.source{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        margin-left: auto;
        gap: .5rem;
        >span.blurb{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .25rem;
            background-color: white;
            color: var(--brand-purple);
            width: fit-content;
            padding: .5rem .75rem .5rem .7rem;
            border-radius: .5rem;
            text-wrap: nowrap;
        }
    }
}</style>