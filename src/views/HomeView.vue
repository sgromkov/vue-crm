<template>
    <div>
        <div class="page-title">
            <h3>Счет</h3>

            <button class="btn waves-effect waves-light btn-small" @click="refresh">
                <i class="material-icons">refresh</i>
            </button>
        </div>

        <Loader v-if="loading" />

        <div v-else class="row">
            <div class="col s12 m6 l4">
                <HomeBill :rates="currency.rates" />
            </div>

            <div class="col s12 m6 l8">
                <HomeCurrency :rates="currency.rates" :date="currency.date" />
            </div>
        </div>
    </div>
</template>

<script>
import HomeBill from "@/components/HomeBill.vue";
import HomeCurrency from "@/components/HomeCurrency.vue";

export default {
    name: "home",
    data: () => ({
        loading: true,
        currency: null,
    }),
    async mounted() {
        this.currency = await this.$store.dispatch("fetchCurrency");
        this.loading = false;
    },
    components: {
        HomeBill,
        HomeCurrency,
    },
    methods: {
        async refresh() {
            this.loading = true;
            this.currency = await this.$store.dispatch("fetchCurrency");
            this.loading = false;
        }
    }
};
</script>
