var dashboardComponent = Vue.component("dashboard", {
  data: function () {
    return {
      selectedChart: null,
      charts: [],
      loading: true,
      error: false,
    };
  },
  methods: {
    selectChart: function (index) {
      this.selectedChart = null;
      setTimeout(() => {
        this.selectedChart = index;
      }, 200);
    },
  },
  mounted: async function () {
    try {
      // const response = await axios.get(
      //   "https://a0166695-8f4b-4a4b-817d-77769f7173de.mock.pstmn.io/benchmark"
      // );
      // this.charts = response.data.charts;
      // this.loading = false;
      // this.error = false;
      setTimeout(() => {
        this.charts = [
          { title: "Umsatz", value: "CHF 39'230", rating: 62 },
          { title: "Werbeausgaben", value: "CHF 250", rating: 15 },
          {
            title: "Umsatz pro Mitarbeiter",
            value: "CHF 9'870.50",
            rating: 75,
          },
          { title: "Produkte-Abschreibung", value: "CHF 370", rating: 90 },
          { title: "Anlagedeckungsgrad 1", value: "40,2%", rating: 95 },
          { title: "Anlagedeckungsgrad 2", value: "102,46%", rating: 85 },
          { title: "Fremdfinanzierungsgrad", value: "83,38%", rating: 10 },
          { title: "Gesamtkapitalrendite", value: "8,76%", rating: 55 },
        ];
        this.loading = false;
        this.error = false;
      }, 1000);
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
          <div class="main">
            <div class="tile">
              <div class="tile__title">Gesamt-Performance</div>
              <div class="performance-chart">
                <div class="performance-chart__fill"></div>
                <div class="performance-chart__value">7.8 / 10</div>
              </div>
            </div>
            <div
              v-for="(chart, index) in charts"
              class="tile tile--small tile--clickable"
              v-bind:class="{'tile--selected': index === selectedChart}"
              v-on:click="selectChart(index)"
            >
              <div class="tile__title">{{chart.title}}</div>
              <rating v-bind:value="chart.rating" v-bind:text="chart.value"></rating>
            </div>
          </div>
          <div class="side-right">
            <transition name="fadezoom" mode="out-in">
              <div v-if="charts[selectedChart]" class="tile tile--dark">
                <div class="tile__title">{{charts[selectedChart].title}}</div>
                <p>
                  Der durchschnittliche Umsatz ähnlicher Geschäfte* betrug diesen
                  Monat <span class="stats stats--foreign">CHF 70'000</span> während
                  ihr Umsatz
                  <span class="stats stats--own">CHF 39'230</span> betrug.
                </p>
                <p>
                  Sie haben <span class="stats stats--own">4</span> Angestellte
                  während ähnliche Geschäfte*
                  <span class="stats stats--foreign">2</span> Angestellte
                  beschäftigen.
                </p>
                <p class="legend">
                  *heruntergerechnet auf gleiche Ladengrösse, Mitarbeiterzahl und
                  Werbeausgaben
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  `,
});
