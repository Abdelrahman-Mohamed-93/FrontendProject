<template>
    <section>
        <Caption/>
        <Cards/>
    </section>
</template>





<script>
    import Caption from "@/components/Service/caption.vue"
    import Cards from "@/components/Service/cards.vue"

    export default{
        name: "Service",
        components: {
            Caption,
            Cards
        }
    }
</script>