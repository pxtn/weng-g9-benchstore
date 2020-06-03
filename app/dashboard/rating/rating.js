Vue.component("rating", {
  props: {
    value: Number,
    text: String,
  },
  data: function () {
    return {
      initial: true,
      colors: [
        "#f0593e", // red
        "#f89d48", // orange
        "#fff46d", // yellow
        "#87c765", // lightgreen
        "#71bf44", // green
      ],
    };
  },
  computed: {
    left: function () {
      const value = this.initial ? 0 : this.value;
      return `calc(${value}% - (${value / 100} * 30px))`;
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      setTimeout(() => {
        this.initial = false;
      }, 300);
    });
  },
  template: `
    <div class="rating__container">
      <div class="rating__visual">
        <div
          v-for="color in colors"
          class="rating__visual__part"
          v-bind:style="{background: color}"
        ></div>
      </div>
      <div class="rating__visual__arrow-container">
        <div
          v-bind:style="{left: left}"
          class="rating__visual__arrow"
        ></div>
      </div>
      <div class="rating__text">{{text}}</div>
    </div>
  `,
});
