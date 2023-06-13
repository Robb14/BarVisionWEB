<template>
    <div class="container-wrapper">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-2xl font-bold mb-4">Reservations</h1>
        <div v-if="reservations.length === 0" class="text-gray-600">
          No tienes reservas.
        </div>
        <div v-else>
          <ul class="space-y-4">
            <li
              v-for="reservation in reservations"
              :key="reservation.id"
              class="bg-white p-4 shadow rounded"
            >
              <div>
                <span class="font-bold">Reservation ID:</span> {{ reservation.id }}
              </div>
              <div>
                <span class="font-bold">Date:</span> {{ reservation.date }}
              </div>
              <div>
                <span class="font-bold">Amount of people:</span> {{ reservation.amountOfPeople }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .container-wrapper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  
  <script>
  export default {
    computed: {
      reservations() {
        return this.$store.state.reservations.filter(
          (reservation) => reservation.userId === this.$store.state.loggedInUser.id
        );
      },
    },
    created() {
      this.fetchReservations();
    },
    methods: {
      async fetchReservations() {
        try {
          await this.$store.dispatch('fetchReservations');
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  