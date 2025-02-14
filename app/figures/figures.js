var figuresComponent = Vue.component("figures", {
  data: function () {
    return {
      figures: {
        revenue: null,
        expenses: null,
        advertisingExpenses: null,
      },
      modifiedFigures: {
        revenue: null,
        expenses: null,
        advertisingExpenses: null,
      },
      loading: true,
      error: false,
    };
  },
  methods: {
    reset: function () {
      this.modifiedFigures = { ...this.figures };
    },
    submit: async function () {
      try {
        await axios.post(`${apiBaseUrl}/figures`, this.modifiedFigures);
        this.figures = { ...this.modifiedFigures };
        this.$refs.snackbar.info("Daten wurden erfolgreich gespeichert.");
      } catch (e) {
        this.$refs.snackbar.error(
          "Beim Speichern der Daten ist ein Fehler aufgetreten."
        );
      }
    },
    localizedMonth: function (subtractMonths = 0) {
      return moment()
        .locale("de")
        .subtract(subtractMonths, "months")
        .format("MMMM YYYY");
    },
  },
  computed: {
    isModified: function () {
      return (
        this.figures.revenue !== this.modifiedFigures.revenue ||
        this.figures.expenses !== this.modifiedFigures.expenses ||
        this.figures.advertisingExpenses !==
          this.modifiedFigures.advertisingExpenses
      );
    },
  },
  mounted: async function () {
    try {
      const response = await axios.get(`${apiBaseUrl}/figures`);
      this.figures = { ...response.data };
      this.modifiedFigures = { ...response.data };
      this.loading = false;
      this.error = false;
    } catch (e) {
      this.loading = false;
      this.error = true;
    }
  },
  template: `
    <div>
      <img v-if="loading" class="loading-indicator" src="assets/img/loading.svg" />
      <div v-else>
        <div v-if="error" class="error">Beim Laden der Daten ist ein Fehler aufgetreten.</div>
        <div v-else class="content">
          <div class="main">
            <div class="tile">
              <p class="figures__heading">Daten für den {{localizedMonth()}}</p>
              <div class="form">
                <ul>
                  <li>
                    <label for="umsatz">Umsatz:</label>
                    <input
                      type="number"
                      name="umsatz"
                      id="umsatz"
                      maxlength="12"
                      placeholder="in CHF"
                      v-model.number="modifiedFigures.revenue"
                    />
                  </li>
                  <li>
                    <label for="ausgaben">Ausgaben:</label>
                    <input
                      type="number"
                      name="ausgaben"
                      id="ausgaben"
                      maxlength="12"
                      placeholder="in CHF"
                      v-model.number="modifiedFigures.expenses"
                    />
                  </li>
                  <li>
                    <label for="werbeausgaben">Werbeausgaben:</label>
                    <input
                      type="number"
                      name="werbeausgaben"
                      id="werbeausgaben"
                      maxlength="12"
                      placeholder="in CHF"
                      v-model.number="modifiedFigures.advertisingExpenses"
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
              <p class="figures__heading">Vorherige Monate</p>
              <p v-for="month in 4"><a>❯ {{localizedMonth(month)}}</a></p>
            </div>
          </div>
        </div>
      </div>
      <snackbar baseSize="6rem" ref="snackbar" :holdTime="5000" :position="'bottom-center'"/>
    </div>
  `,
});
