import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import NewsDetailView from "@/views/NewsDetailView.vue";
import NewsView from "@/views/NewsView.vue";
import NotFound from "@/views/NotFound.vue";
import UsersView from "@/views/UsersView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      component: DashboardView,
      meta: { admin: true },
      children: [
        {
          path: "users",
          component: UsersView,
        },
        {
          path: "news",
          component: NewsView,
        },
        {
          path: "news/:id",
          component: NewsDetailView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  const isAdmin = true;
  if (to.meta.admin) {
    if (isAdmin) {
      next();
    } else {
      alert("Precisas ser admin para aceder");
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
