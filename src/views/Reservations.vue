<template>
    <div>
        <Header />
        <Reservations />
    </div>
</template>
  
<script>
import Header from "@/components/header/Header.vue";
import Reservations from "@/components/reservations/Reservations.vue";
export default {
    name: "ReservationsView",
    components: { Header, Reservations},
    methods: {},
};
</script>
<style scoped>
</style>