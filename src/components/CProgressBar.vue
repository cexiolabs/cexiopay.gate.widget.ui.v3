<template>
  <div
    class="widget__progress"
    :style="{ background: widgetColorsTheme.borderLineColor }"
  >
    <div
      class="widget__progress-bar"
      :style="{ background: widgetColorsTheme.ctaColor }"
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
  },
};
</script>
