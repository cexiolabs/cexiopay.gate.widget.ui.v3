<template>
  <button
    class="widget__button text--small text--600 lh--130"
    @click="handleButtonClick"
    :style="buttonStyles"
  >
    <slot name="default"></slot>
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CButton",
  methods: {
    handleButtonClick() {
      this.$emit("handleButtonClick");
    },
  },
  props: {
    type: {
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
    buttonStyles() {
      switch (this.type) {
        case "primary": {
          return {
            background: this.widgetColorsTheme.ctaColor,
            color: this.widgetColorsTheme.backgroundColor,
          };
        }
        case "secondary": {
          return {
            background: this.widgetColorsTheme.backgroundColor,
            color: this.widgetColorsTheme.ctaColor,
            border: `0.15rem solid ${this.widgetColorsTheme.borderLineColor}`,
          };
        }
        default: {
          return null;
        }
      }
    },
  },
};
</script>
