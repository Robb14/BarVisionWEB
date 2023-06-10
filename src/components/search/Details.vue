<template>
    <section class="bar-details bg-gray-300">
        <div class="min-h-screen flex justify-center items-center">
            <div class="container mx-auto">
                <div class="w-full">
                    <div class="grid grid-cols-2 gap-4 bg-gray-900">
                        <div>
                            <img :src="require(`../../assets/${bar.photo1}`)" alt="Bar Photo 1"
                                class="w-full h-auto bar-image ml-3 mt-4" />
                        </div>
                        <div>
                            <img :src="require(`../../assets/${bar.photo2}`)" alt="Bar Photo 2"
                                class="w-full h-auto bar-image mr-2 mt-4" />
                        </div>
                    </div>
                </div>
                <div class="w-full bg-gray-900 p-6 flex flex-col justify-center rounded-b-lg">
                    <h2 class="text-3xl font-bold text-white mb-4">{{ bar.name }}</h2>
                    <p class="text-lg text-white mb-4">{{ bar.location }}</p>
                    <p class="text-lg text-white mb-6">{{ bar.match }}</p>
                    <div class="flex justify-center">
                        <router-link to="/menu" class="btn-menu mr-4">View Menu</router-link>
                        <router-link to="/reserve" class="btn-reserve">Reserve</router-link>
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
</style>

<script>
export default {
    data() {
        return {
            bar: {
                id: 1,
                photo1: "fotobar.jpg",
                photo2: "fotobar2.jpg",
                name: "Bar Murray's",
                location: "C. de María Zayas Sotomayor, 2, 50018 Zaragoza",
                match: "Inter de Milán - Manchester City",
                reviews: [
                    {
                        id: 1,
                        text: "Excellent place to watch matches. Good food and atmosphere.",
                        author: "Juan",
                    },
                    {
                        id: 2,
                        text: "The staff is very friendly and the atmosphere is great.",
                        author: "María",
                    },
                    // Add more reviews as needed
                ],
            },
            selectedPeople: 1,
            newReview: "",
        };
    },
    methods: {
        viewMenu() {
            // Logic to view the bar menu
        },
        reserve() {
            // Logic to make a reservation at the bar with the selected number of people
        },
        addReview() {
            // Logic to add a new review
            if (this.newReview.trim() !== "") {
                const newReview = {
                    id: this.bar.reviews.length + 1,
                    text: this.newReview,
                    author: "User",
                };
                this.bar.reviews.push(newReview);
                this.newReview = "";
            }
        },
    },
};
</script>