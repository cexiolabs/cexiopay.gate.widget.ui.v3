<template>
  <div class="widget__wrapper">
    <c-header>
      <template slot="default">
        <svg
          @click="$store.commit('widget/CLOSE_MORE_COINS')"
          class="widget__hero-menu"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.1"
            x="1"
            y="1"
            width="24"
            height="24"
            rx="4"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="8.75"
            y1="13"
            x2="17.25"
            y2="13"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M12 17L8 13.0003L12 9"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </c-header>
    <div class="widget__body widget__more-coins-body">
      <div class="widget__box widget__coin widget__more-coins">
        <c-coin-item
          v-for="coin in coins"
          :key="coin.id"
          :coin-title="coin.name"
          :coin-value="coin.value"
          :coin-currency-name="coin.currency"
        />
      </div>
      <div
        :style="{ color: widgetColorsTheme.mainColor2 }"
        class="widget__terms text--400 lh--130"
      >
        By making a payment you are agreeing with <br />
        <a
          :style="{ color: widgetColorsTheme.mainColor1 }"
          class="widget__terms-link text--600"
          href="#"
          >Terms of use</a
        >
        and
        <a
          :style="{ color: widgetColorsTheme.mainColor1 }"
          class="widget__terms-link text--600"
          href="#"
          >Privacy policy</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import CCoinItem from "@/components/CCoinItem";
import { mapGetters } from "vuex";
import CHeader from "@/components/CHeader";

export default {
  name: "CMoreCoins",
  components: { CHeader, CCoinItem },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
  data() {
    return {
      coins: [
        { id: 1, name: "Bitcoin", value: 0.003, currency: "BTC" },
        { id: 2, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 3, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 4, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 5, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 6, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 7, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 8, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 9, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 10, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 11, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 12, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 13, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 14, name: "Ethereum", value: 0.005, currency: "ETH" },
        { id: 15, name: "Ethereum", value: 0.005, currency: "ETH" },
      ],
    };
  },
};
</script>

<style scoped></style>
