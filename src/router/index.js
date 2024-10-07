import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/AboutUs.vue";
import Home from "../components/AnimalCarousel.vue";
import AnimalDetail from "../components/AnimalDetail.vue";
import AnimalList from "../components/AnimalList.vue";
import ContactUs from "../components/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
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
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
