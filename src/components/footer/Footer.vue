<template>
    <footer class="bg-white text-black py-14">
        <div class="container mx-auto py-6 px-4">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="flex flex-col items-center lg:items-stretch lg:justify-center">
                    <h4 class="text-lg font-semibold lg:text-center">About us</h4>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center justify-center mt-4 lg:mt-0">
                    <h4 class="text-lg font-semibold text-center">BarVision</h4>
                    <ul class="mt-4 space-y-2">
                        <li>Tel 123-456-7890</li>
                        <li>Email info@barvision.com</li>
                    </ul>
                    <div class="flex mt-4 space-x-8 justify-center lg:justify-start">
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
                <div class="flex flex-col items-center lg:items-end mt-4 lg:mt-0">
                    <h4 class="text-lg font-semibold text-center lg:text-right">Subscribe to our Newsletter</h4>
                    <div class="mt-4 flex justify-center lg:justify-end">
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

.lg:justify-start {
    justify-content: flex-start;
}

.lg:text-left {
    text-align: left;
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.items-center {
    align-items: center;
}

@media (max-width: 1024px) {
    .lg:grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .lg:justify-center {
        justify-content: center;
    }

    .lg:text-center {
        text-align: center;
    }
}
</style>
  