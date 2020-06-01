var companyComponent = Vue.component("company", {
  data: function () {
    return {
      companyData: {
        name: null,
        address: null,
        zipCode: null,
        city: null,
        employees: null,
        storeArea: null,
      },
      modifiedCompanyData: {
        name: null,
        address: null,
        zipCode: null,
        city: null,
        employees: null,
        storeArea: null,
      },
      loading: true,
      error: false,
    };
  },
  methods: {
    reset: function () {
      this.modifiedCompanyData = { ...this.companyData };
    },
    submit: async function () {
      try {
        await axios.post(`${apiBaseUrl}/companyData`, this.modifiedCompanyData);
        this.companyData = { ...this.modifiedCompanyData };
        this.$refs.snackbar.info("Daten wurden erfolgreich gespeichert.");
      } catch (e) {
        this.$refs.snackbar.error(
          "Beim Speichern der Daten ist ein Fehler aufgetreten."
        );
      }
    },
  },
  computed: {
    isModified: function () {
      return (
        this.companyData.name !== this.modifiedCompanyData.name ||
        this.companyData.address !== this.modifiedCompanyData.address ||
        this.companyData.zipCode !== this.modifiedCompanyData.zipCode ||
        this.companyData.city !== this.modifiedCompanyData.city ||
        this.companyData.employees !== this.modifiedCompanyData.employees ||
        this.companyData.storeArea !== this.modifiedCompanyData.storeArea
      );
    },
  },
  mounted: async function () {
    try {
      const response = await axios.get(`${apiBaseUrl}/companyData`);
      this.companyData = { ...response.data };
      this.modifiedCompanyData = { ...response.data };
      this.loading = false;
      this.error = false;
    } catch (e) {
      this.loading = false;
      this.error = true;
    }
  },
  template: `
    <div>
      <img v-if="loading" class="loading-indicator" src="../assets/img/loading.svg" />
      <div v-else>
        <div v-if="error" class="error">Beim Laden der Daten ist ein Fehler aufgetreten.</div>
        <div v-else class="content">
          <div class="content">
            <div class="main">
              <div class="tile">
                <p class="company__heading">Firmendaten</p>
                <div class="form">
                  <ul>
                    <li>
                      <label for="name">Firmenname:</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        maxlength="53"
                        v-model="modifiedCompanyData.name"
                      />
                    </li>
                    <li>
                      <label for="adresse">Adresse:</label>
                      <input
                        type="text"
                        name="adresse"
                        id="adresse"
                        maxlength="53"
                        v-model="modifiedCompanyData.address"
                      />
                    </li>
                    <li>
                      <label for="plz">PLZ:</label>
                      <input
                        type="number"
                        name="plz"
                        id="plz"
                        maxlength="4"
                        v-model.number="modifiedCompanyData.zipCode"
                      />
                    </li>
                    <li>
                      <label for="ort">Ort:</label>
                      <input
                        type="text"
                        name="ort"
                        id="ort"
                        maxlength="53"
                        v-model="modifiedCompanyData.city"
                      />
                    </li>
                    <li>
                      <label for="mitarbeiter">Mitarbeiter:</label>
                      <input
                        type="number"
                        name="mitarbeiter"
                        id="mitarbeiter"
                        maxlength="6"
                        v-model.number="modifiedCompanyData.employees"
                      />
                    </li>
                    <li>
                      <label for="flaeche">Ladenfläche:</label>
                      <input
                        type="number"
                        name="flaeche"
                        id="flaeche"
                        maxlength="6"
                        placeholder="in m2"
                        v-model.number="modifiedCompanyData.storeArea"
                      />
                    </li>
                    <li class="buttons">
                      <button :disabled="!isModified" v-on:click="reset()">Zurücksetzen</button>
                      <button :disabled="!isModified" v-on:click="submit()">Speichern</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="side-right">
              <div class="tile">
                <p class="company__heading">Weitere Informationen</p>
                <p><a>❯ Über uns</a></p>
                <p><a>❯ AGB</a></p>
                <p><a>❯ Impressum</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <snackbar baseSize="6rem" ref="snackbar" :holdTime="5000" :position="'bottom-center'"/>
    </div>
  `,
});
