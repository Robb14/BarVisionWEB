<template>
    <div class="back-img-login relative justify-center flex items-center">
        <AddBar />
    </div>
</template>
  
<script>
import AddBar from "@/components/bars/AddBar.vue";

export default {
    name: "AddBarView",
    components: {
        AddBar,
    },
    methods: {},
};
</script>
  
<style scoped>
.back-img-login {
    background-image: url(../assets/fondoaddbar.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
</style>
  