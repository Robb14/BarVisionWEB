<template>
    <div class="back">
        <Header />
        <Main />
        <Footer />
    </div>
</template>
  
<script>
import Header from "@/components/header/Header.vue";
import Main from "@/components/main/Main.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "Home",
    components: { Header, Main, Footer },
};
</script>
<style>
.back {
    overflow-y: auto;
    height: 100vh;
}
</style>
  