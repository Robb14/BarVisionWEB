<template>
    <div class="relative">
        <div class="h-screen bg-cover bg-center bg-backg-home">
            <div class="flex flex-col items-center justify-center h-screen">
                <h1 class="text-4xl text-white font-bold">BarVision</h1>
                <p class="text-2xl text-white mt-4">Cheers to Sports Lovers, Cheers to BarVision!</p>
                <router-link to="/search"
                    class="bg-white text-black px-8 py-2 mt-8 transition-colors duration-500 hover:bg-gray-800 hover:text-white">
                    Search Now
                </router-link>
            </div>
        </div>

        <div class="bg-gray-900 py-8">
            <div class="container mx-auto">
                <h2 class="text-3xl font-semibold text-center mb-10 text-white mt-8">Suggested Matches</h2>
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8">
                    <div class="flex flex-col items-center">
                        <img class="w-full max-w-custom h-72 object-cover mb-6" src="../../assets/partidofutbol.jpg"
                            alt="Partido de Fútbol">
                        <p class="text-lg font-semibold text-white mt-2">{{ $store.state.suggestedMatches[0]?.sport }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img class="w-full max-w-custom h-72 object-cover mb-6" src="../../assets/partidotenis.jpg"
                            alt="Partido de Tenis">
                        <p class="text-lg font-semibold text-white mt-2">{{ $store.state.suggestedMatches[2]?.sport }}</p>

                    </div>
                    <div class="flex flex-col items-center">
                        <img class="w-full max-w-custom h-72 object-cover mb-6" src="../../assets/partidobaloncesto.jpg"
                            alt="Partido de Baloncesto">
                        <p class="text-lg font-semibold text-white mt-2">{{ $store.state.suggestedMatches[1]?.sport }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
.max-w-custom {
    max-width: 85%;
}

@media (max-width: 1024px) {
    .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

@media (min-width: 1025px) {
    .max-w-custom {
        max-width: 90%;
    }
}
</style>

<script>
export default {
    created() {
        this.$store.dispatch('fetchSuggestedMatches');
    },
};
</script>

  