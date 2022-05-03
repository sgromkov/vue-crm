<template>
    <div>
        <Loader v-if="loading" />
        <div v-else class="app-main-layout">
            <Navbar @navbar-toggler-click="isOpen = !isOpen" />
            <Sidebar :is-open="isOpen" :key="locale" />
            <Main :is-full="!isOpen" />
            <FloatButton />
        </div>
    </div>
</template>

<script>
import messages from "@/utils/messages";
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";
import Main from "@/components/app/Main.vue";
import FloatButton from "@/components/app/FloatButton.vue";
import Loader from "@/components/app/Loader.vue";

export default {
    name: "MainLayout",
    data: () => ({
        isOpen: true,
        loading: true,
    }),
    async mounted() {
        if (Object.keys(this.$store.getters.info).length === 0) {
            await this.$store.dispatch("fetchInfo");
        }

        this.loading = false;
    },
    components: {
        Navbar,
        Sidebar,
        Main,
        FloatButton,
        Loader,
    },
    computed: {
        error() {
            return this.$store.getters.error;
        },
        locale() {
            return this.$store.getters.info.locale;
        },
    },
    watch: {
        error(firebaseError) {
            this.$error(messages[firebaseError.code] || "Что-то пошло не так");
        },
    },
};
</script>
