<script setup lang="ts">

</script>

<template>
    <section id="about" class="about">
        <div class="content_wrapper">
            <div class="caption">
                <h1>Future of Wayfinding</h1>
                <!-- <img src="/images/thumbnail_alt.svg"> -->
                <iframe src="https://www.youtube.com/embed/1EK-AlE1HBM" title="" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <p>
                    In the age of portable electronics, the use of maps and directories have become defunct.
                    Bergen Routes is a web based application designed to assist users in navigating large buildings.
                    After scanning one of the many QR codes placed around a building and specifying a destination,
                    the application will display a set of clear instructions on which route to take.
                    Instructions are provided via a visual route assembled using 360° footage of the journey,
                    an experience akin to watching a video.
                </p>
            </div>
            <div class="desktop_media">
                <!-- <img src="/images/thumbnail_alt.svg"> -->
                <iframe src="https://www.youtube.com/embed/1EK-AlE1HBM" title="" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<style>
.stack>.about {
    background: var(--g0);
    border-top: 1px solid var(--g2);
    border-bottom: 1px solid var(--g2);
    padding: 1rem;
    color: var(--g4);

    >.content_wrapper {
        max-width: 960px;
        margin: 0 auto;

        >.caption {

            >img,
            >iframe {
                margin: 1rem auto;
                width: 90%;
                max-width: 460px;
                aspect-ratio: 4 / 3;
                display: block;
            }

            >h1 {
                margin: 1rem 0 .5rem 0;
                padding: 0;
                font-weight: 300;
            }

            >p {
                margin: .5rem 0;
            }
        }

        >.desktop_media {
            display: none;
        }


        @media screen and (min-width: 1024px) {
            display: grid;
            grid-template-columns: 5fr 4fr;
            align-items: center;
            gap: 6rem;
            margin: 8rem auto;

            >.caption {

                >img,
                >iframe {
                    display: none;
                }

                >h1 {
                    margin-bottom: 0;
                }

                >h1::before {
                    content: "The ";
                }
            }

            >.desktop_media {
                display: block;

                >img,
                >iframe {
                    width: 100%;
                    aspect-ratio: 4 / 3;
                }
            }
        }
    }
}
</style>