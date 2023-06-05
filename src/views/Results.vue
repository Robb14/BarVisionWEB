<template>
    <div>
        <Header />
        <Results />
        <Footer />
    </div>
</template>
  
<script>
import Header from "@/components/header/Header.vue";
import Results from "@/components/search/Results.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "ResultsView",
    components: { Header, Results, Footer },
    methods: {},
};
</script>
<style scoped>
</style>