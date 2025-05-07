import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/pages/Home.vue"),
    },
    {
        path: "/new",
        name: "new",
        component: () => import("@/pages/New.vue"),
    },
    {
        path: "/men",
        name: "men",
        component: () => import("@/pages/Men.vue"),
    },
    {
        path: "/women",
        name: "women",
        component: () => import("@/pages/Women.vue"),
    },
    {
        path: "/couple",
        name: "couple",
        component: () => import("@/pages/Couple.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/pages/About.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(), // Enables SPA behavior (no page reloads)
    routes,
});

export default router;
