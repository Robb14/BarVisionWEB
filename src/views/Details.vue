<template>
    <div>
        <Header />
        <Details />
        <Footer />
    </div>
</template>
  
<script>
import Header from "@/components/header/Header.vue";
import Details from "@/components/search/Details.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "DetailsView",
    components: { Header, Details, Footer },
    methods: {},
};
</script>
<style scoped>
</style>