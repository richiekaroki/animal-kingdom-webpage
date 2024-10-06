import { createRouter, createWebHistory } from "vue-router";
import About from "../components/AboutUs.vue";
import Home from "../components/AnimalCard.vue";
import AnimalDetail from "../components/AnimalDetail.vue";
import AnimalList from "../components/AnimalList.vue";
import Contact from "../components/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutUs",
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
    name: "ContactUs",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
