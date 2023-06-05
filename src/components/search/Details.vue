<template>
    <section class="bar-details">
        <div class="container mx-auto">
            <div class="flex">
                <div class="w-2/3">
                    <img :src="bar.photo" alt="Bar Photo" class="w-full h-auto rounded-lg mb-6" />
                    <h2 class="text-3xl font-bold mb-4">{{ bar.name }}</h2>
                    <p class="text-lg text-gray-700 mb-4">{{ bar.location }}</p>
                    <p class="text-lg text-gray-700 mb-6">{{ bar.match }}</p>
                    <div class="flex">
                        <button class="btn-menu mr-4" @click="viewMenu">Ver menú</button>
                        <button class="btn-reserve" @click="reserve">Reservar</button>
                        <div class="people-select ml-6">
                            <label for="people" class="text-lg text-gray-700">Número de personas:</label>
                            <select v-model="selectedPeople" id="people" class="px-4 py-2 rounded bg-white text-gray-800">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <!-- Agrega más opciones según sea necesario -->
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="reviews mt-12">
                <h3 class="text-2xl font-bold mb-4">Reseñas</h3>
                <ul>
                    <li v-for="review in bar.reviews" :key="review.id" class="review-item">
                        <p class="text-lg text-gray-700 mb-2">{{ review.text }}</p>
                        <p class="text-gray-600">{{ review.author }}</p>
                    </li>
                </ul>

                <div class="add-review mt-8">
                    <h4 class="text-xl font-bold mb-2">Deja tu reseña</h4>
                    <textarea v-model="newReview" rows="4"
                        class="w-full px-4 py-2 rounded bg-white text-gray-800 mb-4"></textarea>
                    <button class="btn-add-review" @click="addReview">Añadir reseña</button>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    data() {
        return {
            bar: {
                id: 1,
                photo: "bar-photo.jpg",
                name: "Bar Name",
                location: "Location",
                match: "Match",
                reviews: [
                    {
                        id: 1,
                        text: "Excelente lugar para ver los partidos. Buena comida y ambiente.",
                        author: "Juan",
                    },
                    {
                        id: 2,
                        text: "El personal es muy amable y el ambiente es genial.",
                        author: "María",
                    },
                    // Agrega más reseñas según sea necesario
                ],
            },
            selectedPeople: 1,
            newReview: "",
        };
    },
    methods: {
        viewMenu() {
            // Lógica para ver el menú del bar
        },
        reserve() {
            // Lógica para reservar en el bar con la cantidad de personas seleccionadas
        },
        addReview() {
            // Lógica para agregar una nueva reseña
            if (this.newReview.trim() !== "") {
                const newReview = {
                    id: this.bar.reviews.length + 1,
                    text: this.newReview,
                    author: "Usuario",
                };
                this.bar.reviews.push(newReview);
                this.newReview = "";
            }
        },
    },
};
</script>
  
<style scoped>
.bar-details {
    padding: 40px;
}

.btn-menu,
.btn-reserve,
.btn-add-review {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
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
</style>
  