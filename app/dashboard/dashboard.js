var dashboardComponent = Vue.component("dashboard", {
  data: function () {
    return {
      selectedChart: 0,
      charts: [
        { title: "Umsatz", value: "CHF 39'230", rating: 62 },
        { title: "Werbeausgaben", value: "CHF 250", rating: 15 },
        { title: "Umsatz pro Mitarbeiter", value: "CHF 9'870.50", rating: 75 },
        { title: "Produkte-Abschreibung", value: "CHF 370", rating: 90 },
        { title: "Anlagedeckungsgrad 1", value: "40,2%", rating: 95 },
        { title: "Anlagedeckungsgrad 2", value: "102,46%", rating: 85 },
        { title: "Fremdfinanzierungsgrad", value: "83,38%", rating: 10 },
        { title: "Gesamtkapitalrendite", value: "8,76%", rating: 55 },
      ],
    };
  },
  methods: {
    selectChart: function (index) {
      this.selectedChart = index;
    },
  },
  template: `
    <div class="content">
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
        <div class="tile tile--dark">
          <transition name="fade">
            <div class="tile__title">{{charts[selectedChart].title}}</div>
          </transition>
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
      </div>
    </div>
  `,
});
