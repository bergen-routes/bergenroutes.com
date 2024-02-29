<script setup lang="ts">

</script>

<template>
    <section class="story">
        <div class="mobile">
            <div class="chapter">
                <h1>How it Started</h1>
                <img src="/images/computer_tech_club_logo.png">
                <p>
                    Bergen Routes started when the members of the Computer Technology Club at Bergen Community College
                    decided to make finding their meeting room easier for new members. The idea expanded to encompass the
                    whole
                    campus. Soon Bergen Routes became an official project supported by the STEM Student Scholar Program.
                    This provided the team with critical funds, sourced via federal grants.
                </p>
            </div>
            <div class="chapter">
                <h1>The Internship</h1>
                <p>
                    As an internship project within the 3SP program, the Bergen Routes team chose Dr.
                    Emily Vandalovsky, Dean of STEM, as a mentor. The project quickly picked up popularity
                    and recruited a total of 13 developers.
                </p>
                <CarouselDevelopers/>
                <!-- <img src="/images/br_team_frame.svg"> -->
                <p>
                    Over the course of its production our team tackled challenges such as implementing routing algorithms, managing and collecting data, and building a good UX.
                </p>
                <img src="/images/temp_media.svg">
            </div>
        </div>
    </section>
</template>

<style>
.stack>.story {
    padding: 1rem;
    color: var(--g4);

    >.mobile {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        >.chapter {
            max-width: 960px;
            margin: 0 auto;

            >img {
                margin: 1rem auto;
                width: 100%;
            }

            >h1 {
                margin: 1rem 0 1.5rem 0;
                padding: 0 0 .25rem 0;
                border-bottom: 1px solid var(--g4);
                font-weight: 300;
            }
        }
        >.chapter:nth-child(1){
            >img {
                margin: 1rem auto;
                width: 50%;
            }
        }
    }
}
</style>