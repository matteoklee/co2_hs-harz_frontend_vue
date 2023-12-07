import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Calculator from "../views/Calculator.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/calculation",
        name: "Calculator",
        component: Calculator,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;