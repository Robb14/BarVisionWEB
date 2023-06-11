<template>
    <div>
        <Header />
        <Bars />
        <Footer />
    </div>
</template>
  
<script>
import Header from "@/components/header/Header.vue";
import Bars from "@/components/bars/Bars.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "ResultsView",
    components: { Header, Bars, Footer },
    methods: {},
};
</script>
<style scoped>
</style>