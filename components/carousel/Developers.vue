<script setup>
</script>

<template>
    <Carousel>
        <Slide :key=1>
            <img class="carousel__item" src="/images/team_reel/br_team_all.jpg">
        </Slide>
        <Slide :key=2>
            <img class="carousel__item" src="/images/team_reel/lisa_presentation.jpg">
        </Slide>
        <Slide :key=3>
            <img class="carousel__item" src="/images/team_reel/agraw_presentation.jpg">
        </Slide>
        <Slide :key=4>
            <img class="carousel__item" src="/images/team_reel/petar_presentation.jpg">
        </Slide>
        <Slide :key=5>
            <img class="carousel__item" src="/images/team_reel/lisa_presentation_2.jpg">
        </Slide>
        <Slide :key=6>
            <img class="carousel__item" src="/images/team_reel/br_team_1.jpg">
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>
  
<style>
.carousel{
    ol{
        margin:0;
    }
}
.carousel__item {
    width: 100%;
    object-fit: cover;
    border-radius: .25rem;
}

.carousel__slide {
    padding: 10px;
}

.carousel__pagination {
    margin: 0;
    padding: 0;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    color: lightgray;
    opacity: 1;
    mix-blend-mode: difference;
}
.carousel__prev:hover,
.carousel__next:hover {
    color: white;
}
</style>
  