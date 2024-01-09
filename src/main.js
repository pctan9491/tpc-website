import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Resume from "./views/Resume.vue";
import Gallery from "./views/Gallery.vue";
import Contact from "./views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, redirect: { name: "Home" } },
    { path: "/about", component: About },
    { path: "/resume", component: Resume },
    { path: "/gallery", component: Gallery },
    { path: "/contact", component: Contact },
    // Define other routes here
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
