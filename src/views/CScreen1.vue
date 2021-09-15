<template>
  <div class="widget__body">
    <template>
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
          <div class="widget__box-item widget__coin-item">
            <hr
              :style="{ background: widgetColorsTheme.borderLineColor }"
              class="widget__box-item-decor"
            />
            <div class="widget__box-item-wrapper">
              <div class="widget__box-item-name widget__coin-item-name">
                <img
                  class="widget__box-item-icon widget__coin-item-icon"
                  src="@/assets/icons/coins/bitcoin.svg"
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
                  Bitcoin
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
                  0.005 BTC
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
        </div>
        <div class="widget__link-wrapper">
          <a
            :style="{ color: widgetColorsTheme.ctaColor }"
            href="#"
            class="widget__link text--small text--600"
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
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CScreen1",
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>

<style scoped></style>
