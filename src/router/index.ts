import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/empresa/pages/Dashboard.vue")
      },
      {
        path: "/perguntas",
        name: "Perguntas",
        component: () => import("@/views/empresa/pages/Perguntas.vue")
      },
      {
        path: "/auditoria",
        name: "Auditoria",
        component: () => import("@/views/empresa/pages/Auditoria.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/empresa/auth/SignIn.vue")
  },
  {
    path: "/password-reset",
    name: "password-reset",
    component: () => import("@/views/empresa/auth/PasswordReset.vue")
  },
  {
    path: "/admin/",
    redirect: "/admin/dashboard",
    component: () => import("@/layout/LayoutAdmin.vue"),
    children: [
      {
        path: "/admin/dashboard",
        name: "DashboardAdmin",
        component: () => import("@/views/admin/pages/Dashboard.vue")
      }
    ]
  },
  {
    path: "/admin/login",
    name: "loginAdmin",
    component: () => import("@/views/admin/auth/SignIn.vue")
  },
  {
    path: "/admin/password-reset",
    name: "passwordResetAdmin",
    component: () => import("@/views/admin/auth/PasswordReset.vue")
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/error/Error404.vue")
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/Error500.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  //store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
