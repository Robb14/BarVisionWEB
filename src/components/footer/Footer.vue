<template>
    <footer class="bg-white text-black py-14">
        <div class="container mx-auto py-6 px-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="flex flex-col items-center sm:items-stretch">
                    <h4 class="text-lg font-semibold text-center">About us</h4>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center justify-center mt-4 sm:mt-0">
                    <h4 class="text-lg font-semibold text-center">BarVision</h4>
                    <ul class="mt-4 space-y-2">
                        <li>Tel 123-456-7890</li>
                        <li>Email info@barvision.com</li>
                    </ul>
                    <div class="flex mt-4 space-x-8 justify-center sm:justify-start">
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
                <div class="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                    <h4 class="text-lg font-semibold text-center">Subscribe to our Newsletter</h4>
                    <div class="mt-4 flex justify-center sm:justify-end">
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
</style>
  