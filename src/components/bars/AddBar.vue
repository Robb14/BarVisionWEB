<template>
    <section class="h-full bg-neutral-200 dark:bg-neutral-700">
        <div class="container mx-auto h-full p-10">
            <div class="flex h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div class="w-full max-w-md">
                    <div class="block rounded-lg bg-gray-900 shadow-lg dark:bg-neutral-800">
                        <div class="px-8 py-6">
                            <!-- Logo -->
                            <div class="text-center">
                                <img class="mx-auto w-48" src="../../assets/logo.png" alt="logo" />
                                <h4 class="my-4 text-xl font-semibold text-white">
                                    Cheers to Sports Lovers, Cheers to BarVision!
                                </h4>
                            </div>
                            <form @submit.prevent="submitForm">
                                <p class="mb-4 text-white">Add a new bar</p>

                                <!-- Name input -->
                                <div class="mb-4" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="nameInput" placeholder="Bar Name" v-model="name" @focus="clearInput('name')"
                                        :class="{ 'bg-white': name !== '' }" />
                                    <label for="nameInput"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-primary"
                                        :class="{ 'hidden': name !== '' }">
                                        Bar Name
                                    </label>
                                </div>

                                <!-- Location input -->
                                <div class="mb-4" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="locationInput" placeholder="Location" v-model="location"
                                        @focus="clearInput('location')" :class="{ 'bg-white': location !== '' }" />
                                    <label for="locationInput"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-primary"
                                        :class="{ 'hidden': location !== '' }">
                                        Location
                                    </label>
                                </div>

                                <!-- Match input -->
                                <div class="mb-4" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="matchInput" placeholder="Match" v-model="match" @focus="clearInput('match')"
                                        :class="{ 'bg-white': match !== '' }" />
                                    <label for="matchInput"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-primary"
                                        :class="{ 'hidden': match !== '' }">
                                        Match
                                    </label>
                                </div>

                                <!-- Menu input -->
                                <div class="mb-4" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="menuInput" placeholder="Menu" v-model="menu" @focus="clearInput('menu')"
                                        :class="{ 'bg-white': menu !== '' }" />
                                    <label for="menuInput"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-primary"
                                        :class="{ 'hidden': menu !== '' }">
                                        Menu
                                    </label>
                                </div>

                                <!-- Submit button -->
                                <div class="mt-6">
                                    <button type="submit"
                                        class="w-full py-3 px-4 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:bg-primary-dark "
                                        @click.prevent="submitForm">
                                        Add Bar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    text-align: center;
    margin-bottom: 1rem;
}

.logo img {
    max-width: 200px;
}

.form-wrapper {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.form-wrapper label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-wrapper input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #f2f2f2;
    transition: background-color 0.2s ease;
}

.form-wrapper input:focus {
    outline: none;
    background-color: #e0e0e0;
}

.form-wrapper button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #2575fc;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s ease;
}

.form-wrapper button:hover {
    background-color: #1c56d8;
}
</style>
  
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            name: '',
            location: '',
            match: '',
            menu: '',
        };
    },
    methods: {
        clearInput(field) {
            if (field === 'name') {
                this.name = '';
            } else if (field === 'location') {
                this.location = '';
            } else if (field === 'match') {
                this.match = '';
            } else if (field === 'menu') {
                this.menu = '';
            }
        },
        ...mapActions(['createBar']),
        submitForm() {
            const barData = {
                name: this.name,
                location: this.location,
                match: this.match,
                menu: this.menu,
                ownerId: this.loggedInUser ? this.loggedInUser.id : null
            };

            this.createBar(barData)
                .then(() => {
                    // Registro exitoso, redirige al componente de inicio de sesión
                    this.$router.push('/profile');
                })
                .catch((error) => {
                    console.error(error);
                    this.errorMessage = error.message;
                });
        },
    },
};
</script>
  