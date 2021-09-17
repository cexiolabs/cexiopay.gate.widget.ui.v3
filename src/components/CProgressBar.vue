<template>
  <div
    class="widget__progress"
    :style="{ background: widgetColorsTheme.borderLineColor }"
  >
    <div
      class="widget__progress-bar"
      :style="{
        background: widgetColorsTheme.ctaColor,
        width: `${currentProgressValue}%`,
      }"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CProgressBar",
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
    currentProgressValue() {
      let screenResult = null;
      const screens = 5;
      switch (this.$store.state.widget.currentScreen) {
        case "c-screen-1": {
          screenResult = 1;
          break;
        }
        case "c-screen-2": {
          screenResult = 2;
          break;
        }
        case "c-screen-3": {
          screenResult = 3;
          break;
        }
        case "c-screen-4": {
          screenResult = 4;
          break;
        }
        case "c-screen-5": {
          screenResult = 5;
          break;
        }
      }
      return (screenResult * 100) / screens;
    },
  },
};
</script>
