<template>
  <div class="widget__wrapper">
    <c-header
      @handleHeaderButtonClick="$store.commit('widget/CHANGE_SCREEN', 'c-menu')"
    />
    <c-progress-bar />
    <div class="widget__body">
      <div class="widget__content">
        <div class="widget__information">
          <div
            class="text--small text--600 lh--100"
            :style="{ color: widgetColorsTheme.mainColor1 }"
          >
            Amount:
          </div>
          <div
            class="text--big text--600 lh--100 spacer--8"
            :style="{ color: widgetColorsTheme.mainColor1 }"
          >
            535 USD
          </div>
          <div
            class="text--smallest text--600 lh--100 spacer--8"
            :style="{ color: widgetColorsTheme.mainColor2 }"
          >
            Choose crypto for payment:
          </div>
        </div>
        <div class="widget__box widget__coin">
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
        </div>
        <div class="widget__link-wrapper">
          <a
            :style="{ color: widgetColorsTheme.ctaColor }"
            href="#"
            class="widget__link text--small text--600"
            @click.prevent="
              $store.commit('widget/CHANGE_SCREEN', 'c-more-coins')
            "
          >
            More coins
            <svg
              class="widget__link-icon"
              width="1.2rem"
              height="0.7rem"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.11255 0.650414C1.47188 0.291086 2.05437 0.290768 2.41409 0.649705L5.99989 4.22769L9.58569 0.649704C9.94541 0.290767 10.5279 0.291086 10.8872 0.650414C11.2468 1.01002 11.2468 1.59306 10.8872 1.95266L6.70699 6.13289C6.31647 6.52342 5.6833 6.52342 5.29278 6.13289L1.11255 1.95266C0.752944 1.59306 0.752944 1.01002 1.11255 0.650414Z"
                :fill="widgetColorsTheme.ctaColor"
              />
            </svg>
          </a>
        </div>
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
import { mapGetters } from "vuex";
import CCoinItem from "@/components/CCoinItem";
import CHeader from "@/components/CHeader";
import CProgressBar from "@/components/CProgressBar";

export default {
  name: "CScreen1",
  components: { CProgressBar, CHeader, CCoinItem },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>

<style scoped></style>
