<template>
    <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
        <div class="container">
            <div class="w-full">
                <div class="block rounded-lg bg-gray-900 shadow-lg dark:bg-neutral-800">
                    <div class="px-4 py-6 text-white">
                        <div class="block rounded-lg bg-gray-900 shadow-lg dark:bg-neutral-800">
                            <div class="px-4 py-6 text-white">
                                <h4 class="mb-6 text-xl font-semibold">Explore</h4>

                                <div class="flex items-center mb-6">
                                    <label for="searchOption" class="mr-2 text-white">Search by:</label>
                                    <select class="px-3 py-2 rounded bg-white text-gray-800" v-model="searchOption">
                                        <option value="match">Match</option>
                                        <option value="location">Location</option>
                                        <option value="bar">Bar</option>
                                    </select>
                                </div>

                                <div class="flex items-center mb-6">
                                    <input type="text" class="w-full px-3 py-2 rounded border-0 bg-white text-gray-800"
                                        placeholder="Enter name to search" v-model="searchText" />
                                </div>

                                <div class="flex justify-between">
                                    <router-link to="/results"
                                        class="inline-block rounded px-6 py-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        style="background: linear-gradient(to bottom right, #283E51, #0A2342);"
                                        @click="search">
                                        Search
                                    </router-link>

                                    <router-link to="/home"
                                        class="inline-block rounded px-6 py-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        style="background: linear-gradient(to bottom right, #283E51, #0A2342);">
                                        Home
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    data() {
        return {
            searchOption: 'match',
            searchText: '',
        };
    },
    methods: {
        search() {
            this.$store.dispatch('searchBars', this.searchText);
        },
    },
};
</script>
  
<style scoped>
/* Estilos del componente Search.vue */
</style>
  
  