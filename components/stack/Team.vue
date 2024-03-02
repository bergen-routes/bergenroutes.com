<script setup lang="ts">
const members = [
    {
        name: "Ohad Farkash",
        icon: "/images/team/ohad_farkash.jpg",
        title: "Project Lead & Software Engineer",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Matthew Paccione",
        icon: "/images/team/matthew_paccione.jpg",
        title: "Software Engineer",
        url: "https://www.linkedin.com/in/matthew-paccione-373980240/"
    }, {
        name: "Lisa Nam",
        icon: "/images/team/lisa_nam.jpg",
        title: "Full-Stack Engineer",
        url: "https://www.linkedin.com/in/lisasnam/"
    }, {
        name: "Petar Petroski",
        icon: "/images/team/petar_petroski.jpg",
        title: "UI / UX, Branding, & IT",
        url: "https://www.linkedin.com/in/petroski/"
    }, {
        name: "Jacob Jalinski",
        icon: "/images/team/jacob_jalinski.jpg",
        title: "Software Engineer",
        url: "https://www.linkedin.com/in/jacob-jalinski-a5b556221/"
    }, {
        name: "Jace Zito",
        icon: "/images/team/jace_zito.jpg",
        title: "Front-End Developer & Technical Writer",
        url: "https://www.linkedin.com/in/jace-zito-2a789938/"
    }, {
        name: "Oliver Cruz",
        icon: "/images/team/placeholder.jpg",
        title: "Database Engineer",
        url: "https://www.linkedin.com/in/olivercruz1/"
    }, {
        name: "Karla Santamaria",
        icon: "/images/team/placeholder.jpg",
        title: "Front End Developer",
        url: "https://www.linkedin.com/in/karla-santamaria-698b29242/"
    }, {
        name: "Agraw Mindaye",
        icon: "/images/team/agraw_mindaye.jpg",
        title: "Front-End Developer",
        url: "https://www.linkedin.com/in/agraw-min/"
    }, {
        name: "Ron Cohen",
        icon: "/images/team/ron_cohen.jpg",
        title: "Full-Stack Engineer & Media",
        url: "https://www.linkedin.com/in/ron-cohen-477376253/"
    }, {
        name: "Justin Diaz",
        icon: "/images/team/justin_diaz.jpg",
        title: "Photography",
        url: ""
    }, {
        name: "Mateo Armas",
        icon: "/images/team/mateo_armas.jpg",
        title: "Technical Writer",
        url: "https://www.linkedin.com/in/mateo-armas-53382b253/"
    }, {
        name: "James Mullins",
        icon: "/images/team/james_mullins.jpg",
        title: "Data Entry",
        url: "https://www.linkedin.com/in/jammullins/"
    }
]
</script>

<template>
    <section class="team">
        <div class="content_wrapper">
            <h1>Our Team</h1>
            <ul class="cards">
                <li v-for="member in members">
                    <a :href="member.url">
                        <img :src="member.icon">
                        <h1>{{ member.name }}</h1>
                        <h2>{{ member.title }}</h2>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.stack>.team {
    padding: 0 1rem;
    color: var(--g4);

    >.content_wrapper {
        max-width: 960px;
        margin: 0 auto;

        >h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            font-weight: 900;
            color: var(--brand-purple);
            text-align: center;
            margin-top: 4rem;
        }

        >.cards {
            margin: 0;
            padding: 2rem;
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            list-style: none;
            gap: 3rem;

            @media screen and (min-width: 500px) {
                grid-template-columns: 1fr 1fr;
                >li:last-child{
                    grid-column: 1/3;
                }
            }

            @media screen and (min-width: 800px) {
                grid-template-columns: 1fr 1fr 1fr;
                >li:last-child{
                    grid-column: 2;
                }
            }

            >li>a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;

                >img {
                    border-radius: 50%;
                    width: 12rem;
                    margin: auto;
                }

                >h1 {
                    margin: .75rem 0 0 0;
                    font-weight: normal;
                    font-size: 1.4rem;
                }

                >h2 {
                    margin: .5rem 0 0 0;
                    font-weight: 300;
                    font-size: 1rem;
                }
            }
        }
    }
}</style>