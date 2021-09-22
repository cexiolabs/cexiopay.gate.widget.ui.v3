<template>
  <div class="widget__amount">
    <span
      class="text--small text--600 lh--130"
      :style="{ color: widgetColorsTheme.mainColor1 }"
      >{{ $t("amount.title") }}:</span
    >
    <div
      class="widget__amount-value lh--130 text--600"
      :style="{ color: widgetColorsTheme.mainColor1 }"
    >
      0.04629523 ETH
    </div>
    <span
      class="text--small text--600 lh--130"
      :style="{ color: widgetColorsTheme.mainColor1 }"
      >20 USD</span
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CAmount",
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>
