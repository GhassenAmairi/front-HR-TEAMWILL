import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//import HomeView from "../views/HomeView.vue";

import SearchCriterias from "@/components/searchCriterias/searchCriterias.vue"; 

import JobComponent from "../components/JobComponent.vue";
import AccueilView from "../views/AccueilView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AccueilView",
    component: AccueilView,
    
  },
  {
    path: '/recherche',
    name: 'SearchCriterias',
    component: () => import("@/components/searchCriterias/searchCriterias.vue"),
  },
  {
    path: "/filter",
    name: "RechercheView",
    component: () => import("../views/DefineJobView.vue"),
  },
  {
    path: "/Job",
    name: "Job",
    component: JobComponent,
  },
  {
    path: "/DefineJob",
    name: "DefineJob",
    component: () => import("../views/RechercheView.vue"),
  },
  {
    path: "/dashbord",
    name: "dashbord",
    component: () => import("../views/DashbordView.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("../views/UploadpdfView.vue"),
  },
  {
    path: "/DefineParametre",
    name: "DefineParametre",
    component: () => import("../views/DefineParametre.vue"),
  },
  {
    path: "/jobdetails",
    name: "jobdetails",
    component: () => import("../views/JobDetails.vue"),
  },
  {
    path: "/score",
    name: "PageView",
    component: () => import("@/views/PageView.vue"),
  },
  {
    path: "/definejob",
    name: "definejob",
    component: () => import("../views/DefineJobView.vue"),
  },
  {
    path: "/text",
    name: "text",
    component: () => import("../views/TextComponent.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/Accueil",
    name: "Accueil",
    component: () => import("../views/AccueilView.vue"),
  },
  {
    path: "/test,",
    name: "test",
    component: () => import("../views/test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
