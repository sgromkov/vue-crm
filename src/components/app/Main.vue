<template>
    <main class="app-content" :class="{ full: isFull }">
        <div class="app-page">
            <router-view />
        </div>
    </main>
</template>

<script>
export default {
    props: {
        isFull: Boolean,
    },
};
</script>
