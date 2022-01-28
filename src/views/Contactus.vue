<template>
    <section>
        <Caption/>
        <!-- that is like the router-view or the empty div with ID created to load the things in it  -->
        <Cards/>
    </section>
</template>
// this tag is the one in which I write the things to be shown and usually each programmer has one 
// I have to add a router-link in app.vue page to add a link for this page and a route in the index.js 
<script>
import Caption from "@/components/Contactus/caption.vue"
import Cards from "@/components/Contactus/cards.vue"

export default{
    name: "Contactus",
    components: {
        Caption,
        Cards
    }
    

    // I can name it as I like and it would be the one imported in index.js
    // I have to import the component with it and then I import it and define it in index.js

}
// I have to import the component in the vue page and then view it in the above template and finally import it in the index.js after exporting it here
// where Caption is the name I have given to the export and @ refers to the src folder
</script>