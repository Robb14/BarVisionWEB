<template>
    <section class="results">
        <div class="container">
            <h2 class="text-3xl font-bold mb-6">Results</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <router-link to="/details" v-for="result in bars" :key="result.id" class="result-card">
                    <img :src="require(`../../assets/fotobar.jpg`)" alt="Bar Photo" class="result-photo" />
                    <div class="result-details">
                        <h3 class="result-name">{{ result.name }}</h3>
                        <p class="result-location">{{ result.location }}</p>
                        <p class="result-match">{{ result.match }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['bars']),
    },

    methods: {
        ...mapActions(['fetchBars']),
    },

    mounted() {
        this.fetchBars();
    },
};
</script>
  
<style scoped>
.results {
    padding: 40px;
    background-color: #f1f1f1;
}

.result-card {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.result-photo {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
}

.result-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
}

.result-location,
.result-match {
    font-size: 14px;
    margin-bottom: 4px;
}
</style>
  