<template>
    <section class="slider postition-relative">
        <div class="caption position-absolute top-50 start-50 translate-middle">
            <h6>DESIGN / DEVELOPMENT / PHOTOGRAPHY</h6>
            <h1>CREATIVITY HAS A NEW LEVEL</h1>
            <a class="btn career me-2">Preview</a>
            <a class="btn career ms-2">Get them</a>
        </div>
        <!-- u can also add a link like bootstrap view with a class btn -->
    </section>
</template>


<style>
.slider{
    background: url("../assets/imgs/header.jpg");
    background-size: cover;
    background-color: var(--grey);
    background-blend-mode: multiply;
    /* that is how to make the background color and image blend instead of positioning and opacity */
    height: 85vh;
    color: var(--white);
}

.slider .caption .career{
    color: var(--white);
    font-size: bold;
    font-size: calc(var(--default-font-size) + 2px);
    border: 1px solid var(--white);
}

.slider .caption .career:hover{
    background-color: var(--main-color);
    border: 1px solid var(--main-color);
}

</style>

<script>
    export default{
        name: "Slider"
    }
</script>