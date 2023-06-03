<template>
    <header class="bg-gray-900 text-white">
        <div class="container mx-auto px-4 py-6 flex items-center justify-between">
            <a href="/" class="flex items-center">
                <img src="../../assets/logo.png" alt="eDreams" class="h-16 mr-2">
            </a>
            <nav>
                <ul class="flex space-x-8">
                    <li><a href="#" class="hover:text-gray-400">Matches</a></li>
                    <li><a href="#" class="hover:text-gray-400">Bars</a></li>
                    <li><a href="#" class="hover:text-gray-400">Locations</a></li>
                    <li><a href="#" class="hover:text-gray-400">Reservations</a></li>
                    <li><a href="#" class="hover:text-gray-400">More</a></li>
                </ul>
            </nav>
            <div>
                <router-link to="/login" class="text-white mr-8 hover:text-gray-400">Log In</router-link>
                <router-link to="/sign"
                    class="bg-white text-gray-900 font-medium py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-400 hover:text-white">Create
                    Account</router-link>
            </div>
        </div>
    </header>
</template>