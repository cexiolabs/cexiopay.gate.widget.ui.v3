<template>
  <div class="widget__footer">
    <div class="widget__footer-item">
      <div
        class="widget__footer-item-title lh--130 text--400 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        {{ $t("footer.orderId") }}
      </div>
      <div
        class="widget__footer-item-value lh--130 text--600 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        967013fc-0611-4547-a880-ac0ea
      </div>
    </div>
    <div class="widget__footer-item">
      <div
        class="widget__footer-item-title lh--130 text--400 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        {{ $t("footer.invoiceAmount") }}
      </div>
      <div
        class="widget__footer-item-value lh--130 text--600 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        20 USD
      </div>
    </div>
    <div class="widget__footer-item">
      <div
        class="widget__footer-item-title lh--130 text--400 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        {{ $t("footer.exchangeRate") }}
      </div>
      <div
        class="widget__footer-item-value lh--130 text--600 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        432.01 USD
      </div>
    </div>
    <div class="widget__footer-item">
      <div
        class="widget__footer-item-title lh--130 text--400 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        {{ $t("footer.amountInCurrency") }} ETH
      </div>
      <div
        class="widget__footer-item-value lh--130 text--600 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        0.04629523
      </div>
    </div>
    <div class="widget__footer-item">
      <div
        class="widget__footer-item-title lh--130 text--400 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        {{ $t("footer.inputtedAmount") }}
      </div>
      <div
        class="widget__footer-item-value lh--130 text--600 text--small"
        :style="{ color: widgetColorsTheme.mainColor1 }"
      >
        0.04629523
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CFooter",
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>
