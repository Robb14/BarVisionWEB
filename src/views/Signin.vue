<template>
    <div class="back-img relative justify-center flex items-center">
      <Register class="absolute" />
    </div>
  </template>
  
  <script>
  import Register from "@/components/register/Register.vue";
  export default {
    name: "Signin",
    components: { Register },
    methods: {},
  };
  </script>
  <style scoped>
  .back-img {
    background-image: url(../assets/cambiar.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
  </style>
  