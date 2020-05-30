Vue.component("rating", {
  props: {
    value: Number,
    text: String,
  },
  data: function () {
    return {
      initial: true,
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
      }, 0);
    });
  },
  template: `
    <div class="rating__container">
      <div class="rating__visual">
        <div class="rating__visual__part rating__visual__part--red"></div>
        <div class="rating__visual__part rating__visual__part--orange"></div>
        <div class="rating__visual__part rating__visual__part--yellow"></div>
        <div class="rating__visual__part rating__visual__part--lightgreen"></div>
        <div class="rating__visual__part rating__visual__part--green"></div>
      </div>
      <div class="rating__visual__arrow-container">
        <div v-bind:style="{left: left}" class="rating__visual__arrow"></div>
      </div>
      <div class="rating__text">{{text}}</div>
    </div>
  `,
});
