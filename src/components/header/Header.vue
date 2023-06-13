<template>
    <header class="bg-gray-900 text-white">
        <div class="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
            <div class="flex items-center">
                <a href="/" class="flex items-center">
                    <img src="../../assets/logo.png" alt="BarVision" class="h-16 max-w-logo mr-2">
                </a>
                <button @click="toggleMenu" class="sm:hidden text-white focus:outline-none ml-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>
            </div>
            <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:flex sm:items-center sm:space-x-8">
                <div class="flex flex-grow justify-center sm:justify-start">
                    <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                        <li><router-link to="/matches" href="#" class="hover:text-gray-400">Matches</router-link></li>
                        <li><router-link to="/bars" href="#" class="hover:text-gray-400">Bars</router-link></li>
                        <li>
                            <router-link v-if="isLoggedIn" to="/reservations" href="#" class="hover:text-gray-400">Reservations</router-link>
                            <a v-else href="#" class="hover:text-gray-400" @click="showLoginMessage">Reservations</a></li>
                        <li><a href="#" class="hover:text-gray-400">More</a></li>
                    </ul>
                </div>
                <div class="mt-4 sm:mt-0 sm:flex sm:items-center">
                    <template v-if="isLoggedIn">
                        <!-- Mostrar el logo de perfil cuando se haya iniciado sesión -->
                        <router-link to="/profile" class="flex justify-center">
                            <img src="../../assets/usuario.png" alt="Profile" class="h-8 w-8 rounded-full">
                        </router-link>
                    </template>
                    <template v-else>
                        <!-- Mostrar "Log In" y "Create Account" cuando no se haya iniciado sesión -->
                        <router-link to="/login" class="text-white mr-4 hover:text-gray-400">Log In</router-link>
                        <router-link to="/signup"
                            class="bg-white text-gray-900 font-medium py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-400 hover:text-white">Create
                            Account</router-link>
                    </template>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        showLoginMessage() {
            alert("Please log in or sign up to view your reservations.");
        },
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        }
    }
};
</script>
