import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//import HomeView from "../views/HomeView.vue";

import searchCriterias from "../components/searchCriterias/searchCriterias.vue";


import JobComponent from "../components/JobComponent.vue";


const routes: Array<RouteRecordRaw> = [
  
  {
    path: "/recherche",
    name: "recherche",
    component: searchCriterias,
  },
  {
    path: "/Recherche",
    name: "Recherche",
    component: () => import("../views/RechercheView.vue"),
  },
  {
  path: "/Job",
  name: "Job",
  component: JobComponent,
  },
  {
    path:"/definejob",
    name:"DefineJob",
    component: () => import("../views/DefineJobView.vue")
  },
  {
    path:"/dashbord",
    name:"dashbord",
    component:  () => import("../views/DashbordView.vue"),
  },
  {
    path:"/upload",
    name:"upload",
    component: () => import("../views/UploadpdfView.vue")
  },
  {
    path: "/DefineParametre",
    name: "DefineParametre",
    component: () => import("../views/DefineParametre.vue")
  },
  {
    path: "/jobdetails",
    name: "jobdetails",
    component: () => import("../views/JobDetails.vue")
  },
  {path: "/PageHome ", name: "PageHome", component: () => import("../views/PageView.vue")}, 
  {path: "/definejob", name: "definejob", component: () => import("../views/DefineJobView.vue")},
  {path: "/Login", name: "Login", component: () => import("../views/LoginView.vue")},
  {path:"/Accueil", name:"Accueil", component: () => import("../views/AccueilView.vue")},
  {path: "/test,", name: "test", component: () => import("../views/test.vue")},
  




];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
