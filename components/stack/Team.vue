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
        icon: "/images/team/placeholder.jpg",
        title: "Full-Stack Engineer",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Petar Petroski",
        icon: "/images/team/petar_petroski.jpg",
        title: "UI / UX, Branding, & IT",
        url: "https://www.linkedin.com/in/petroski/"
    }, {
        name: "Jacob Jalinski",
        icon: "/images/team/placeholder.jpg",
        title: "Software Engineer",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Jace Zito",
        icon: "/images/team/placeholder.jpg",
        title: "Front-End Developer & Technical Writer",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Oliver Cruz",
        icon: "/images/team/placeholder.jpg",
        title: "Database Engineer",
        url: "https://www.linkedin.com/in/olivercruz1/"
    }, {
        name: "Karla Santamaria",
        icon: "/images/team/placeholder.jpg",
        title: "Front End Developer",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Agraw Mindaye",
        icon: "/images/team/placeholder.jpg",
        title: "Front-End Developer",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Ron Cohen",
        icon: "/images/team/placeholder.jpg",
        title: "Full-Stack Engineer & Media",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Justin Diaz",
        icon: "/images/team/placeholder.jpg",
        title: "Photography",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "Mateo Armas",
        icon: "/images/team/placeholder.jpg",
        title: "Technical Writer",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }, {
        name: "James Mullins",
        icon: "/images/team/placeholder.jpg",
        title: "Data Entry",
        url: "https://www.linkedin.com/in/ohad-farkash"
    }
]
</script>

<template>
    <section class="team">
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
    </section>
</template>

<style>
.stack>.team {
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

    >.cards {
        margin: 0;
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        list-style: none;
        gap: 3rem;

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
</style>