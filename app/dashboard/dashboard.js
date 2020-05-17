var dashboardComponent = Vue.component("dashboard", {
  data: function () {
    return {
      selectedChart: 0,
      charts: [
        { title: "Umsatz", value: "CHF 39'230", result: "mediocre" },
        { title: "Werbeausgaben", value: "CHF 250", result: "bad" },
        {
          title: "Umsatz pro Mitarbeiter",
          value: "CHF 9'870.50",
          result: "mediocre",
        },
        { title: "Produkte-Abschreibung", value: "CHF 370", result: "good" },
        { title: "Anlagedeckungsgrad 1", value: "40,2%", result: "good" },
        { title: "Anlagedeckungsgrad 2", value: "102,46%", result: "good" },
        { title: "Fremdfinanzierungsgrad", value: "83,38%", result: "bad" },
        { title: "Gesamtkapitalrendite", value: "8,76%", result: "mediocre" },
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
          <div class="chart">
            <img
              class="chart__graphic"
              v-bind:src="'../assets/img/chart_' + chart.result + '.png'"
            />
            <div class="chart__value">{{chart.value}}</div>
          </div>
        </div>
      </div>
      <div class="side-right">
        <div class="tile tile--dark">
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
      </div>
    </div>
  `,
});
