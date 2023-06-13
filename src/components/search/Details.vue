<template>
    <section class="bar-details bg-gray-300">
        <div class="min-h-screen flex justify-center items-center">
            <div class="container mx-auto">
                <div class="w-full">
                    <div class="grid grid-cols-2 gap-4 bg-gray-900">
                        <div>
                            <img :src="require(`../../assets/fotobar.jpg`)" alt="Bar Photo 1"
                                class="w-full h-auto bar-image ml-3 mt-4" />
                        </div>
                        <div>
                            <img :src="require(`../../assets/fotobar2.jpg`)" alt="Bar Photo 2"
                                class="w-full h-auto bar-image mr-2 mt-4" />
                        </div>
                    </div>
                </div>
                <div class="w-full bg-gray-900 p-6 flex flex-col justify-center rounded-b-lg">
                    <h2 class="text-3xl font-bold text-white mb-4">{{ bar.name }}</h2>
                    <p class="text-lg text-white mb-4">{{ bar.location }}</p>
                    <p class="text-lg text-white mb-6">{{ bar.match }}</p>
                    <div class="flex justify-center">
                        <button class="btn-menu mr-4" @click="showMenu = !showMenu">
                            View Menu
                        </button>
                        <button class="btn-reserve" @click="reserve">Reserve</button>
                    </div>
                    <div class="people-select mt-6">
                        <label for="people" class="text-lg text-white">Amount of people:</label>
                        <select v-model="selectedPeople" id="people" class="px-4 py-2 rounded bg-white text-gray-800">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div v-if="showMenu" class="menu-container">
                        <h3 class="text-2xl font-bold mt-4 text-white">Menu</h3>
                        <div class="menu-items">
                            <p class="text-lg text-white">{{ bar.menu }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="reviews mt-12">
            <h3 class="text-2xl font-bold mb-4">Reviews</h3>
            <ul>
                <li v-for="review in bar.reviews" :key="review.id" class="review-item">
                    <p class="text-lg text-gray-700 mb-2">{{ review.text }}</p>
                    <p class="text-gray-600">{{ review.author }}</p>
                </li>
            </ul>

            <div class="add-review mt-8">
                <h4 class="text-xl font-bold mb-2">Leave a review</h4>
                <textarea v-model="newReview" rows="4"
                    class="w-full px-4 py-2 rounded bg-white text-gray-800 mb-4"></textarea>
                <button class="btn-add-review" @click="addReview">Add Review</button>
            </div>
        </div>
    </section>
</template>
  
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            selectedPeople: 1,
            newReview: '',
            showMenu: false,
        };
    },
    computed: {
        bar() {
            return this.$store.state.bar;
        },
        loggedInUser() {
            return this.$store.state.loggedInUser;
        },
    },
    methods: {
        addReview() {
            // Lógica para agregar una nueva reseña
            if (this.newReview.trim() !== '') {
                const newReview = {
                    id: this.bar.reviews.length + 1,
                    text: this.newReview,
                    author: 'User',
                };
                this.bar.reviews.push(newReview);
                this.newReview = '';
            }
        },
        ...mapActions(['createReservation']),
        reserve() {
            // Verificar si el usuario está autenticado
            if (!this.$store.state.loggedInUser) {
                alert('Please log in to make a reservation.');
                return;
            }

            // Crear el objeto de reserva
            const reservation = {
                date: new Date(),
                barId: this.bar.id,
                userId: this.$store.state.loggedInUser.id,
                amountOfPeople: parseInt(this.selectedPeople),
            };

            // Llamar a la acción 'createReservation' del store para crear la reserva
            this.createReservation(reservation)
                .then(() => {
                    alert('Reservation created successfully!');
                    // Aquí puedes realizar cualquier acción adicional después de la creación de la reserva, como redireccionar a una página de confirmación, actualizar los datos del usuario, etc.
                })
                .catch((error) => {
                    console.error(error);
                    alert('Failed to create reservation.');
                });
        },
        ...mapActions(['fetchBarData']),
    },
    mounted() {
        // Obtén el ID del bar desde las props o desde la ruta, dependiendo de cómo lo estés pasando
        const barId = this.$route.params.barId;

        // Llama a la acción 'fetchBarData' pasando el ID del bar para cargar los datos del bar correspondiente
        this.fetchBarData(barId);
        this.$store
            .dispatch('fetchBarData', barId)
            .then(() => {
                this.bar = this.$store.state.bar;
                // La acción fetchBarData se ha completado correctamente
                console.log(this.bar);
            })
            .catch((error) => {
                console.error(error);
                // Maneja el error de la carga de datos del bar
            });
    },
    ...mapActions(['fetchBarData', 'createReservation']),
};
</script>
  
<style scoped>
.bar-image {
    max-width: 98%;
    max-height: 500px;
}

.bar-details {
    padding: 40px;
}

.container {
    background-color: #f1f1f1;
}

.bg-gray-100 {
    background-color: #f1f1f1;
}

.bg-gray-900 {
    background-color: #1a202c;
}

.btn-menu,
.btn-reserve,
.btn-add-review {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    background: linear-gradient(to bottom right, #283e51, #0a2342);
    color: white;
    text-decoration: none;
}

.btn-menu:hover,
.btn-reserve:hover,
.btn-add-review:hover {
    box-shadow: 0 8px 9px -4px rgba(0, 0, 0, 0.1), 0 4px 18px 0 rgba(0, 0, 0, 0.2);
}

.btn-menu:focus,
.btn-reserve:focus,
.btn-add-review:focus {
    box-shadow: 0 8px 9px -4px rgba(0, 0, 0, 0.1), 0 4px 18px 0 rgba(0, 0, 0, 0.2);
    outline: none;
}

.btn-menu:active,
.btn-reserve:active,
.btn-add-review:active {
    box-shadow: 0 8px 9px -4px rgba(0, 0, 0, 0.1), 0 4px 18px 0 rgba(0, 0, 0, 0.2);
}

.people-select {
    margin-top: 16px;
}

.people-select label {
    display: block;
    font-size: 14px;
    margin-bottom: 6px;
}

.review-item {
    margin-bottom: 16px;
}

.menu-container {
    margin-top: 16px;
}

.menu-items {
    margin-top: 16px;
    color: gray;
}

.menu-item {
    background-color: #ffffff;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 8px;
}

.menu-item {
    background-color: #ffffff;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 8px;
}
</style>
  