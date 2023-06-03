<template>
    <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div class="container h-full p-10">
            <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div class="w-full">
                    <div class="block rounded-lg bg-gray-900 shadow-lg dark:bg-neutral-800">
                        <div class="g-0 lg:flex lg:flex-wrap">
                            <div class="px-4 md:px-0 lg:w-6/12">
                                <div class="md:mx-6 md:p-12">
                                    <div class="text-center">
                                        <img class="mx-auto w-48" src="../../assets/logo.png" alt="logo" />
                                        <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-white">
                                            Cheers to Sports Lovers, Cheers to BarVision!
                                        </h4>
                                    </div>

                                    <form>
                                        <p class="mb-4 text-white">Please login to your account</p>
                                        <div class="relative mb-4" data-te-input-wrapper-init>
                                            <input type="text"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInput1" placeholder="Username" v-model="username"
                                                @focus="clearInput('username')" :class="{ 'bg-white': username !== '' }" />
                                            <label for="exampleFormControlInput1"
                                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-primary"
                                                :class="{ 'hidden': username !== '' }">
                                                Username
                                            </label>
                                        </div>

                                        <div class="relative mb-4" data-te-input-wrapper-init>
                                            <input type="password"
                                                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInput11" placeholder="Password" v-model="password"
                                                @focus="clearInput('password')" :class="{ 'bg-white': password !== '' }" />

                                            <label for="exampleFormControlInput11"
                                                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-primary"
                                                :class="{ 'hidden': password !== '' }">
                                                Password
                                            </label>
                                        </div>

                                        <div class="mb-12 pb-1 pt-1 text-center">
                                            <button
                                                class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                type="button" data-te-ripple-init data-te-ripple-color="light"
                                                style="background: linear-gradient(to bottom right, #283E51, #0A2342);">
                                                Log in
                                            </button>



                                            <a href="#!" class="text-white">Forgot password?</a>
                                        </div>

                                        <div class="flex items-center justify-between pb-6">
                                            <p class="mb-0 mr-2 text-white">Don't have an account?</p>
                                            <div class="flex items-center justify-center h-full">
                                                <router-link to="/sign" type="button"
                                                    class="inline-block rounded bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-medium"
                                                    data-te-ripple-init data-te-ripple-color="light"
                                                    style="background: linear-gradient(to bottom right, #283E51, #0A2342);">
                                                    REGISTER
                                                </router-link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                style="background: linear-gradient(to right, #71BDE7, #283E51);">
                                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                                    <h4 class="mb-6 text-xl font-semibold">
                                        Unlock a World of Football Excitement
                                    </h4>
                                    <p class="text-sm">
                                        Discover a new way to experience the passion of football. With BarVision, book your
                                        ideal spot to
                                        enjoy the most exciting matches at the best bars and sports venues. Immerse yourself
                                        in a unique
                                        experience alongside other fans and live every goal with intensity. The ultimate
                                        choice for football
                                        enthusiasts and great company!
                                    </p>
                                    <router-link to="/home"
                                        class="mt-6 inline-block rounded bg-gray-900 hover:bg-gray-700 px-4 py-2 text-white font-medium"
                                        data-te-ripple-init data-te-ripple-color="light"
                                        style="background: linear-gradient(to bottom right, #283E51, #0A2342);">
                                        Go to Home
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
            username: '',
            password: '',
        };
    },
    methods: {
        clearInput(field) {
            if (field === 'username') {
                this.username = '';
            } else if (field === 'password') {
                this.password = '';
            }
        },
    },
};
</script>