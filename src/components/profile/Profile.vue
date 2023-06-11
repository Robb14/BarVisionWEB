<template>
    <div class="bg-gray-300 flex justify-center items-center h-screen">
        <div class="bg-gray-900 p-8 rounded-lg w-1/2">
            <h2 class="text-2xl font-bold text-white">{{ loggedInUser ? loggedInUser.username : '' }}</h2>
            <p class="text-gray-600">{{ loggedInUser ? loggedInUser.email : '' }}</p>
            <button class="mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded" @click="togglePasswordVisibility">
                {{ showPassword ? 'Hide Password' : 'Show Password' }}
            </button>
            <router-link to="/reviews" class="block mt-4 text-blue-500">Show My Reservations</router-link>
            <p v-if="showPassword" class="mt-4 text-white">Password: {{ loggedInUser ? loggedInUser.password : '' }}</p>
            <p class="mt-4 text-white">User Type: <span class="capitalize">{{ userType }}</span></p>
            <router-link v-if="canAddBar" to="/addbar" class="block mt-4 text-blue-500">Add Bar</router-link>
            <button v-if="canDeleteAccount" class="mt-4 px-4 py-2 font-bold text-white bg-red-500 rounded"
                @click="confirmDeleteAccount">
                Delete Account
            </button>
            <div v-if="showDeleteConfirmation">
                <p class="mt-4 text-white">Are you sure you want to delete your account?</p>
                <div class="flex justify-center mt-4">
                    <button class="mr-4 px-4 py-2 font-bold text-white bg-red-500 rounded"
                        @click="deleteAccount">Yes</button>
                    <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                        @click="cancelDeleteAccount">No</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            loggedInUser: null,
            userType: '',
            showPassword: false,
            showDeleteConfirmation: false
        };
    },
    mounted() {
        this.loggedInUser = this.$store.state.loggedInUser;
        this.setUserType();
    },
    computed: {
        ...mapState(['loggedInUser']),
        canAddBar() {
            return this.loggedInUser && (this.loggedInUser.userType === 1 || this.loggedInUser.userType === 2);
        },
        canDeleteAccount() {
            return this.loggedInUser !== null;
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        setUserType() {
            if (this.loggedInUser) {
                switch (this.loggedInUser.userType) {
                    case 0:
                        this.userType = 'normal';
                        break;
                    case 1:
                        this.userType = 'owner';
                        break;
                    case 2:
                        this.userType = 'admin';
                        break;
                    default:
                        this.userType = 'unknown';
                        break;
                }
            }
        },
        confirmDeleteAccount() {
            this.showDeleteConfirmation = true;
        },
        cancelDeleteAccount() {
            this.showDeleteConfirmation = false;
        },
        deleteAccount() {
            this.$store.dispatch('deleteUser', this.loggedInUser.id)
                .then(() => {
                    this.$router.push('/home');
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
};
</script>
  
<style scoped>
.container {
    background-color: #f1f1f1;
}
</style>
