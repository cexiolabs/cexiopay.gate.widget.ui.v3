<template>
  <main-layout>
    <template slot="default">
      <div class="widget__body">
        <div class="widget__content">
          <div class="widget__information">
            <div
              class="text--small text--600 lh--130"
              :style="{ color: widgetColorsTheme.mainColor1 }"
            >
              Payment successful
            </div>
            <div
              class="text--small text--600 lh--130 spacer--8"
              :style="{ color: widgetColorsTheme.mainColor2 }"
            >
              Information has been sent to your email
            </div>
            <svg
              class="widget__confirmation-icon"
              width="116"
              height="116"
              viewBox="0 0 116 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M113.993 52.8236V58.0312C113.979 82.8302 97.6548 104.666 73.8735 111.698C50.0922 118.729 24.5186 109.281 11.0211 88.4768C-2.47649 67.6728 -0.682672 40.4688 15.4298 21.6172C31.5422 2.7657 58.135 -3.2426 80.7871 6.85059"
                :stroke="widgetColorsTheme.mainColor1"
                stroke-width="4"
              />
              <path
                d="M114 12.6345L57.7143 68.9202L41 52.206"
                :stroke="widgetColorsTheme.ctaColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="widget__amount">
              <span
                class="text--small text--600 lh--130"
                :style="{ color: widgetColorsTheme.mainColor1 }"
                >Amount:</span
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
          </div>
        </div>
        <div class="widget__footer">
          <div class="widget__footer-item">
            <div
              class="widget__footer-item-title lh--130 text--400 text--small"
              :style="{ color: widgetColorsTheme.mainColor1 }"
            >
              Order ID
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
              Invoice amount
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
              Exchange rate
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
              Amount in ETH
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
              Inputted amount
            </div>
            <div
              class="widget__footer-item-value lh--130 text--600 text--small"
              :style="{ color: widgetColorsTheme.mainColor1 }"
            >
              0.04629523
            </div>
          </div>
        </div>
      </div>
    </template>
  </main-layout>
</template>

<script>
import { mapGetters } from "vuex";
import MainLayout from "@/layouts/main-layout";

export default {
  name: "CScreen1",
  components: { MainLayout },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
  methods: {},
};
</script>

<style lang="scss"></style>
