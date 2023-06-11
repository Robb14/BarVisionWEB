<template>
    <div>
        <Header />
        <Matches />
        <Footer />
    </div>
</template>
  
<script>
import Header from "@/components/header/Header.vue";
import Matches from "@/components/matches/Matches.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "MatchesView",
    components: { Header, Matches, Footer },
    methods: {},
};
</script>
<style scoped>
</style>