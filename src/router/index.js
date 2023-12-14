import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Calculator from "../views/Calculator.vue";
import KidsHome from "../views/Children.vue";
import NotFound from "../views/NotFound.vue";
import Help from "../views/Help.vue";
import Developer from "../views/Developer.vue";

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
    {
        path: "/children",
        name: "KidsHome",
        component: KidsHome,
    },
    {
        path: "/help",
        name: "Help",
        component: Help,
    },
    {
        path: "/developer",
        name: "Developer",
        component: Developer,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;