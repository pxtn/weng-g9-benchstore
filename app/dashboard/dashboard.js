var dashboardComponent = Vue.component("dashboard", {
  data: function () {
    return {
      selectedChart: null,
      charts: [],
      totalPerformance: 7.8,
      revenue: {
        own: "CHF 39'230",
        foreign: "CHF 70'000",
      },
      employees: {
        own: 4,
        foreign: 2,
      },
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
      const response = await axios.get(`${apiBaseUrl}/benchmark`);
      this.charts = response.data.charts;
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
              <div class="tile__title">Gesamt-Performance</div>
              <div class="performance-chart">
                <div class="performance-chart__fill"></div>
                <div class="performance-chart__value">{{totalPerformance}} / 10</div>
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
                <div v-if="charts[selectedChart].title === 'Umsatz'">
                  <p>
                    Der durchschnittliche Umsatz ähnlicher Geschäfte* betrug diesen
                    Monat <span class="stats stats--foreign">{{revenue.foreign}}</span> während
                    ihr Umsatz
                    <span class="stats stats--own">{{revenue.own}}</span> betrug.
                  </p>
                  <p>
                    Sie haben <span class="stats stats--own">{{employees.own}}</span> Angestellte
                    während ähnliche Geschäfte*
                    <span class="stats stats--foreign">{{employees.foreign}}</span> Angestellte
                    beschäftigen.
                  </p>
                  <p class="legend">
                    *heruntergerechnet auf gleiche Ladengrösse, Mitarbeiterzahl und
                    Werbeausgaben
                  </p>
                </div>
                <div v-else>
                  <p>
                    Hier werden Informationen von anderen Geschäften zum Vergleich
                    dargestellt, sobald sie verfügbar sind.
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  `,
});
