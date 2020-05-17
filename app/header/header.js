Vue.component("bs-header", {
  template: `
    <div class="header">
      <div class="header__content">
        <div class="logo-container">
          <router-link to="/dashboard">
            <img
              class="logo"
              src="../assets/img/BenchStore-Logo.svg"
            />
          </router-link>
        </div>
        <div class="navigation">
          <router-link
            to="/dashboard"
            class="navigation__link"
          >Übersicht</router-link>
          <router-link
            to="/figures"
            class="navigation__link"
          >Unternehmensdaten</router-link>
          <router-link
            to="/company"
            class="navigation__link"
          >
            <div class="user">
              <img
                class="profile-picture"
                src="../assets/img/profile.svg"
              />
              <div>
                <div class="user__name">Hans Muster</div>
                <a class="logout" href="#">❯ Abmelden</a>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  `,
});
