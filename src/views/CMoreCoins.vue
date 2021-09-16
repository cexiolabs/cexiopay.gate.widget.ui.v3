<template>
  <div class="widget__wrapper">
    <c-header>
      <slot name="default">
        <template slot="default">
          <svg
            @click="$store.commit('widget/CHANGE_SCREEN', 'c-screen-1')"
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
      </slot>
    </c-header>
    <div class="widget__body widget__more-coins-body">
      <div class="widget__box widget__coin widget__more-coins">
        <c-coin-item
          coin-title="Bitcoin"
          :coin-value="0.005"
          coin-currency-name="BTC"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
        />
        <c-coin-item
          coin-title="Bitcoin"
          :coin-value="0.005"
          coin-currency-name="BTC"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
        />
        <c-coin-item
          coin-title="Bitcoin"
          :coin-value="0.005"
          coin-currency-name="BTC"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
        />
        <c-coin-item
          coin-title="Bitcoin"
          :coin-value="0.005"
          coin-currency-name="BTC"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
        />
        <c-coin-item
          coin-title="Ethereum"
          :coin-value="0.0000232"
          coin-currency-name="ETH"
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
};
</script>

<style scoped></style>
