<script setup>
/**
 * Move expandable image viewer button to new component
 */

const brPosterImageviewer = ref()
function openBRPosterImageviewer() {
    brPosterImageviewer.value?.open()
}

</script>

<template>
    <section id="journey" class="story">
        <h1>Our Journey</h1>
        <div class="mobile">
            <div class="chapter">
                <h1>How it Started</h1>
                <p>
                    Bergen Routes started when the members of the Computer Technology Club at Bergen Community College
                    decided to make finding their meeting room easier for new members. The idea expanded to encompass the
                    whole
                    campus. Soon Bergen Routes became an official project supported by the STEM Student Scholar Program.
                    This provided the team with critical funds, sourced via federal grants.
                </p>
                <img src="/images/computer_tech_club_logo.png">
            </div>
            <div class="chapter">
                <h1>The Internship</h1>
                <p>
                    As an internship project within the 3SP program, the Bergen Routes team chose Dr.
                    Emily Vandalovsky, Dean of STEM, as a mentor. The project quickly picked up popularity
                    and recruited a total of 13 developers.
                </p>
                <CarouselDevelopers />
                <p>
                    Over the course of production our team tackled challenges such as implementing routing algorithms,
                    managing and collecting data, and building a good UX.
                </p>
                <div class="expandable_image" @click="openBRPosterImageviewer">
                    <button>
                        <Icon name="tabler:zoom-in" size="1.5rem" color="var(--g4)" />
                    </button>
                    <img src="/images/br_poster.png">
                </div>
            </div>
            <div class="chapter">
                <h1>What we Achieved</h1>
                <p>
                    Bergen Routes won first place in a poster competition running against multiple computer science
                    related projects. The project facilitated the development of a special set of tools and processes
                    for managing 360° images. These tools could one day contribute to a more large scale project.
                </p>
                <CarouselCompetition />
                <p>
                    The original members of Bergen Routes have since graduated, the project itself has been
                    rebranded and continues to be developed under the name [new brand].
                </p>
            </div>
        </div>
        <div class="desktop">
            <div class="chapter">
                <div class="cm">
                    <div class="caption">
                        <h1>How it Started</h1>
                        <p>
                            Bergen Routes started when the members of the Computer Technology Club at Bergen Community
                            College
                            decided to make finding their meeting room easier for new members. The idea expanded to
                            encompass the
                            whole
                            campus. Soon Bergen Routes became an official project supported by the STEM Student Scholar
                            Program.
                            This provided the team with critical funds, sourced via federal grants.
                        </p>
                    </div>
                    <div class="media">
                        <img src="/images/computer_tech_club_logo.png">
                    </div>
                </div>
            </div>
            <div class="chapter">
                <div class="mc">
                    <div class="media">
                        <CarouselDevelopers />
                    </div>
                    <div class="caption">
                        <h1>The Internship</h1>
                        <p>
                            As an internship project within the 3SP program, the Bergen Routes team chose Dr.
                            Emily Vandalovsky, Dean of STEM, as a mentor. The project quickly picked up popularity
                            and recruited a total of 13 developers.
                        </p>
                        <p>
                            Over the course of its production our team tackled challenges such as implementing routing
                            algorithms,
                            managing and collecting data, and building a good user experience.
                        </p>
                    </div>
                </div>
            </div>
            <div class="chapter">
                <div class="cm">
                    <div class="caption">
                        <h1>What we Achieved</h1>
                        <p>
                            Bergen Routes won first place in a poster competition running against multiple computer science
                            related projects. The project facilitated the development of a special set of tools and
                            processes
                            for managing 360° images. These tools could one day contribute to a more large scale project.
                        </p>
                        <p>
                            The original members of Bergen Routes have since graduated, the project itself has been
                            rebranded and continues to be developed under the name [new brand].
                        </p>
                    </div>
                    <div class="media">
                        <CarouselCompetition />
                    </div>
                </div>
                <div class="expandable_image" @click="openBRPosterImageviewer">
                    <button>
                        <Icon name="tabler:zoom-in" size="1.5rem" color="var(--g4)" />
                    </button>
                    <img src="/images/br_poster.png">
                </div>
            </div>
        </div>
    </section>
    <ImageViewer src="/images/br_poster.png" ref="brPosterImageviewer" />
</template>

<style>
.stack>.story {
    padding: 0 1rem;
    color: var(--g4);

    >h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        font-weight: 900;
        color: var(--brand-purple);
        text-align: center;
        margin-top: 4rem;
    }

    p {
        margin: 0.5rem 0;
    }

    @media screen and (min-width: 1024px) {
        >.mobile {
            display: none !important;
        }

        >.desktop {
            display: block !important;
        }
    }

    .expandable_image {
        position: relative;
        cursor: pointer;

        >button {
            background-color: var(--g1);
            position: absolute;
            bottom: 0px;
            right: 0px;
            transform: translate(20%, 20%);
            border: none;
            border-radius: 50%;
            padding: .75rem;
            box-shadow: 0px 1px 2px 0px lightgray;
            cursor: pointer;
        }

        >img {
            width: 100%;
            border-radius: .5rem;
            box-shadow: 0px 1px 4px 0px lightgray;
        }
    }

    >.mobile {

        /* display: flex;
        flex-direction: column;
        gap: 2rem; */
        >.chapter {
            max-width: 960px;
            margin: 4rem auto;

            >img, >.carousel {
                margin: 2rem auto;
                width: 100%;
            }

            >h1 {
                margin: 1rem 0 .5rem 0;
                padding: 0;
                font-weight: 300;
            }

            >.expandable_image{
                margin: 2rem auto;
                width: 90%;
            }
        }

        >.chapter:nth-child(1) {
            >img {
                margin: 1rem auto;
                width: 40%;
                max-width: 200px;
            }
        }

        >.chapter:nth-child(2) {
            >img {
                margin: 1rem auto;
                width: 90%;
            }
        }
    }

    >.desktop {
        display: none;
        >.chapter {
            max-width: 960px;
            margin: 6rem auto;

            >.mc {
                display: grid;
                grid-template-columns: 4fr 5fr;
                align-items: center;
                gap: 6rem;
                margin: 4rem auto;
            }

            >.cm {
                display: grid;
                grid-template-columns: 5fr 4fr;
                align-items: center;
                gap: 6rem;
                margin: 4rem auto;
            }

            .expandable_image {
                width: 90%;
                max-width: 460px;
                margin: 1rem auto;
            }

            >div {
                >.caption {
                    >h1 {
                        margin: 1rem 0 .5rem 0;
                        padding: 0;
                        font-weight: 300;
                    }

                    >h1::before {
                        content: "The ";
                    }
                }

                >.media {
                    display: block;

                    >img {
                        margin: 1rem auto;
                        width: 90%;
                        max-width: 460px;
                    }
                }
            }

            &:nth-child(1) {
                img {
                    margin: 1rem auto;
                    width: 60% !important;
                }

                >.cm {
                    grid-template-columns: 5fr 3fr;
                    gap: 2rem;
                }
            }

            &:nth-child(2) {
                >.mc {
                    grid-template-columns: 4fr 5fr;
                    gap: 6rem;
                }
            }

            &:nth-child(3) {
                >.cm {
                    grid-template-columns: 5fr 4fr;
                    gap: 6rem;
                }
            }
        }
    }
}
</style>