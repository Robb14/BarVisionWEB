<template>
    <div>
        <Header />
        <Profile />
        <Footer />
    </div>
</template>
  
<script>
import Header from "@/components/header/Header.vue";
import Profile from "@/components/profile/Profile.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "ProfileView",
    components: { Header, Profile, Footer },
    methods: {},
};
</script>
<style scoped>
</style>