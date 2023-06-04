<template>
    <div class="back-img-login justify-center items-center">
        <Search/>
    </div>
</template>
  
<script>
import Search from "@/components/search/Search.vue";
export default {
    name: "SearchView",
    components: { Search },
    methods: {},
};
</script>
<style scoped>
.back-img-login {
    background-image: url(../assets/fondosearch.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
</style>