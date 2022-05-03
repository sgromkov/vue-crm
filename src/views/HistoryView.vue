<template>
    <div>
        <div class="page-title">
            <h3>История записей</h3>
        </div>

        <div class="history-chart">
            <canvas></canvas>
        </div>

        <Loader v-if="loading" />

        <p v-else-if="records.length === 0">Нет записей</p>

        <section v-else>
            <HistoryTable :records="items" />

            <Paginate
                v-model="page"
                :page-count="pageCount"
                :click-handler="pageChangeHandler"
                :prev-text="'Назад'"
                :next-text="'Вперед'"
                :container-class="'pagination'"
                :page-class="'waves-effect'"
            />
        </section>
    </div>
</template>

<script>
import HistoryTable from "@/components/HistoryTable.vue";
import Loader from '@/components/app/Loader.vue';
import PaginationMixin from '@/mixins/pagination.mixin';

export default {
    name: "history",
    data: () => ({
        loading: true,
        records: [],
    }),
    async mounted() {
        this.records = await this.$store.dispatch("fetchRecords");
        const categories = await this.$store.dispatch("fetchCategories");

        this.setupPagination(this.records.map(record => {
            return {
                ...record,
                categoryName: categories.find(category => category.id === record.categoryId).title,
                typeClass: record.type === 'income' ? 'green' : 'red',
                typeText: record.type === 'income' ? 'Доход' : 'Расход',
            };
        }));

        this.loading = false;
    },
    components: {
        HistoryTable,
        Loader,
    },
    mixins: [PaginationMixin],
};
</script>
