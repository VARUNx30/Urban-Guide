import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";
import axios from "axios";

const HomePage = () => import("@/pages/Home.vue");
const ToursPage = () => import("@/pages/Tours.vue");
const EducationsPage = () => import("@/pages/Educations.vue");
const JobsPage = () => import("@/pages/Jobs.vue");

const DetailsPage = () => import("@/pages/custom/Details.vue");

const LoginPage = () => import("@/pages/Login.vue");
const RegisterPage = () => import("@/pages/Register.vue");
const ProfilePage = () => import("@/pages/Profile.vue");

const RequestPage = () => import("@/pages/Request.vue");

// admin routes
const AdminPage = () => import("@/admin/Admin.vue");
const AdminDashboardPage = () => import("@/admin/Dashboard.vue");

const ToursBoxPage = () => import("@/admin/ToursBox.vue");
const EducationsBoxPage = () => import("@/admin/EducationsBox.vue");
const JobsBoxPage = () => import("@/admin/JobsBox.vue");
const LocationsPage = () => import("@/admin/Locations.vue");

const AdminItemCreatePage = () => import("@/admin/ItemCreate.vue");
const AdminItemEditPage = () => import("@/admin/ItemEdit.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      name: "home",
    },
  },
  {
    path: "/tours",
    name: "Tours",
    component: ToursPage,
    meta: {
      name: "tours",
      details: false,
    },
  },
  {
    path: "/tours/details/:id",
    name: "TourDetails",
    component: DetailsPage,
    props: true,
    meta: {
      name: "tours",
    },
  },
  {
    path: "/educations",
    name: "Educations",
    component: EducationsPage,
    meta: {
      name: "educations",
      details: false,
    },
  },
  {
    path: "/educations/details/:id",
    name: "EducationDetails",
    component: DetailsPage,
    props: true,
    meta: {
      name: "educations",
    },
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsPage,
    meta: {
      name: "jobs",
      details: false,
    },
  },
  {
    path: "/jobs/details/:id",
    name: "JobDetails",
    component: DetailsPage,
    props: true,
    meta: {
      name: "jobs",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
  //   admin routes
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboardPage,
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/tours",
    name: "AdminTours",
    component: ToursBoxPage,
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/tours/create",
    name: "AdminTourCreate",
    component: AdminItemCreatePage,
    meta: {
      admin: true,
      name: "tours",
    },
  },
  {
    path: "/admin/tours/edit/:id",
    name: "AdminTourEdit",
    component: AdminItemEditPage,
    props: true,
    meta: {
      admin: true,
      name: "tours",
    },
  },
  {
    path: "/admin/educations",
    name: "AdminEducations",
    component: EducationsBoxPage,
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/educations/create",
    name: "AdminEducationCreate",
    component: AdminItemCreatePage,
    meta: {
      admin: true,
      name: "educations",
    },
  },
  {
    path: "/admin/educations/edit/:id",
    name: "AdminEducationEdit",
    component: AdminItemEditPage,
    props: true,
    meta: {
      admin: true,
      name: "educations",
    },
  },
  {
    path: "/admin/jobs",
    name: "AdminJobs",
    component: JobsBoxPage,
    meta: {
      admin: true,
    },
  },
  {
    path: "/admin/jobs/create",
    name: "AdminJobCreate",
    component: AdminItemCreatePage,
    meta: {
      admin: true,
      name: "jobs",
    },
  },
  {
    path: "/admin/jobs/edit/:id",
    name: "AdminJobEdit",
    component: AdminItemEditPage,
    props: true,
    meta: {
      admin: true,
      name: "jobs",
    },
  },
  {
    path: "/admin/locations",
    name: "Locations",
    component: LocationsPage,
    meta: {
      admin: true,
      name: "locations",
    },
  },
  {
    path: "/request",
    name: "Request",
    component: RequestPage,
  },
];

// add route guard
routes.forEach((route) => {
  route.beforeEnter = (to, from, next) => {
    if (to.meta.admin) {
      return next();
    }
    if (
      to.name !== "Register" &&
      to.name !== "Login" &&
      !store.getters["authLoggedIn"]
    ) {
      if (localStorage.getItem("user_email")) {
        axios
          .get("/users/" + localStorage.getItem("user_email"))
          .then((res) => {
            store.commit("setUser", res.data);
            store.commit("setIsUserLoggedIn", true);
          });
        next();
      } else {
        next({ name: "Login" });
      }
    } else {
      next();
    }
  };
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
