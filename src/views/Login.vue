<template>
    <div class="back-img-login relative justify-center flex items-center">
        <Login />
    </div>
</template>
  
<script>
import Login from "@/components/login/Login.vue";
export default {
    name: "Login",
    components: { Login },
    methods: {},
};
</script>
<style scoped>
.back-img-login {
    background-image: url(../assets/fondologin.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
</style>