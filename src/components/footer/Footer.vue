<template>
    <footer class="bg-white text-black py-14">
        <div class="container mx-auto py-6 px-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <h4 class="text-lg font-semibold">About us</h4>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold">BarVision</h4>
                    <ul class="mt-4 space-y-2">
                        <li>Tel 123-456-7890</li>
                        <li>Email info@barvision.com</li>
                    </ul>
                    <div class="flex mt-4 justify-center sm:justify-start">
                        <a href="#" class="text-black hover:text-gray-400">
                            <img class="h-6 w-6" src="../../assets/instagram.png" alt="Instagram">
                        </a>
                        <a href="#" class="text-black hover:text-gray-400">
                            <img class="h-6 w-6" src="../../assets/twitter.png" alt="Twitter">
                        </a>
                        <a href="#" class="text-black hover:text-gray-400">
                            <img class="h-6 w-6" src="../../assets/facebook.png" alt="Facebook">
                        </a>
                    </div>
                </div>
                <div class="flex flex-col items-center mt-4 sm:mt-0">
                    <h4 class="text-lg font-semibold">Subscribe to our Newsletter</h4>
                    <div class="mt-4 flex">
                        <input type="email" placeholder="Enter your email"
                            class="border border-black px-4 py-2 rounded-l-md focus:outline-none">
                        <button
                            class="bg-black text-white px-4 py-2 rounded-r-md transition-colors duration-300 hover:bg-gray-800 hover:text-white">Join</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<style>
.justify-center {
    justify-content: center;
}

.space-x-8>*+* {
    margin-left: 2rem;
}

.sm\:justify-start {
    justify-content: flex-start !important;
}
</style>
  