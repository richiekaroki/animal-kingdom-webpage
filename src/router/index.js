import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import AnimalDetail from "../components/AnimalDetail.vue";
import AnimalList from "../components/AnimalList.vue";
import Contact from "../components/Contact.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/animals",
    name: "AnimalList",
    component: AnimalList,
  },
  {
    path: "/animals/:name", // Dynamic route for individual animal page
    name: "AnimalDetail",
    component: AnimalDetail,
    props: true, // Pass route parameters as props to the component
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
