import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import homeRoutes from "./home.routes";
import adminRoutes from "./admin.routes";
import accountRoutes from "@/views/account/account.routes";
import NotFound from "@/components/NotFound.vue";

export const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    history: createWebHashHistory('.'),
    // history: createWebHistory('.'),
    linkActiveClass: "active",
    routes: [
        { ...homeRoutes },
        { ...adminRoutes},
        { ...accountRoutes },
        {
            path: "/not-found",
            component: NotFound,
        },
        { path: "/:pathMatch(.*)*", redirect: "/not-found" }, // SI NO HAY UNA RUTA, REDIRECT A NOT FOUND
    ],
});