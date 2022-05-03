<template>
    <ul class="sidenav app-sidenav" :class="{ open: isOpen }">
        <router-link
            v-for="link in links"
            :key="link.url"
            :to="link.url"
            :exact="link.exact"
            tag="li"
            active-class="active"
        >
            <a href="#" class="waves-effect waves-orange pointer">{{
                link.title
            }}</a>
        </router-link>
    </ul>
</template>

<script>
import localizeFilter from '@/filters/localize.filter';

export default {
    data: () => ({
        links: [
            {
                title: localizeFilter('SIDEBAR/MENU/ITEM/ACCOUNT'),
                url: "/",
                exact: true,
            },
            {
                title: localizeFilter('SIDEBAR/MENU/ITEM/HISTORY'),
                url: "/history",
            },
            {
                title: localizeFilter('SIDEBAR/MENU/ITEM/PLANNING'),
                url: "/planning",
            },
            {
                title: localizeFilter('SIDEBAR/MENU/ITEM/NEW_RECORD'),
                url: "/record",
            },
            {
                title: localizeFilter('SIDEBAR/MENU/ITEM/CATEGORIES'),
                url: "/categories",
            },
        ],
    }),
    props: {
        isOpen: Boolean,
    },
};
</script>
