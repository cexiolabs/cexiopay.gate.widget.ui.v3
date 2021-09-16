<template>
  <div
    @click="$store.commit('widget/CHANGE_SCREEN', 'c-screen-2')"
    class="widget__box-item widget__coin-item"
  >
    <hr
      :style="{ background: widgetColorsTheme.borderLineColor }"
      class="widget__box-item-decor"
    />
    <div class="widget__box-item-wrapper">
      <div class="widget__box-item-name widget__coin-item-name">
        <img
          class="widget__box-item-icon widget__coin-item-icon"
          :src="require(`@/assets/icons/coins/${this.coinCurrencyName}.svg`)"
          alt="bitcoin"
        />
        <div
          class="
            widget__coin-item-title widget__box-item-title
            text--small text--600
            lh--130
          "
          :style="{ color: widgetColorsTheme.mainColor1 }"
        >
          {{ coinTitle }}
        </div>
      </div>
      <div class="widget__box-item-convert widget__coin-item-convert">
        <div
          class="
            widget__coin-item-value widget__box-item-value
            text--small text--400
            lh--100
          "
          :style="{ color: widgetColorsTheme.mainColor1 }"
        >
          {{ coinValue }} {{ coinCurrencyName }}
        </div>
        <svg
          class="widget__box-item-arrow widget__coin-item-arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.65041 12.8875C9.29109 12.5281 9.29077 11.9456 9.6497 11.5859L13.2277 8.00011L9.6497 4.41431C9.29077 4.05459 9.29109 3.4721 9.65041 3.11277C10.01 2.75317 10.5931 2.75317 10.9527 3.11277L15.1329 7.29301C15.5234 7.68353 15.5234 8.3167 15.1329 8.70722L10.9527 12.8875C10.5931 13.2471 10.01 13.2471 9.65041 12.8875Z"
            :fill="widgetColorsTheme.mainColor1"
          />
        </svg>
      </div>
    </div>
    <hr
      :style="{ background: widgetColorsTheme.borderLineColor }"
      class="widget__box-item-decor"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CCoinItem",
  props: {
    coinTitle: {
      type: String,
      required: true,
    },
    coinValue: {
      type: Number,
      required: true,
    },
    coinCurrencyName: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>
