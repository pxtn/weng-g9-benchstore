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

var app = new Vue({
  el: "#app",
  router,
});
