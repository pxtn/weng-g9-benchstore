const apiBaseUrl = "https://a0166695-8f4b-4a4b-817d-77769f7173de.mock.pstmn.io";

const router = new VueRouter({
  routes: [
    {
      path: "/dashboard",
      component: dashboardComponent,
      meta: { title: "Übersicht | BenchStore" },
    },
    {
      path: "/figures",
      component: figuresComponent,
      meta: { title: "Kennzahlen | BenchStore" },
    },
    {
      path: "/company",
      component: companyComponent,
      meta: { title: "Meine Firma | BenchStore" },
    },
    { path: "*", redirect: "/dashboard" },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

Vue.component("snackbar", VueSnackbar);

var app = new Vue({
  el: "#app",
  router,
});
