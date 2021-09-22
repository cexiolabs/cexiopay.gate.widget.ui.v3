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
              {{ $t("screen4.title") }}
            </div>
            <div
              class="text--small text--600 lh--130 spacer--8"
              :style="{ color: widgetColorsTheme.mainColor2 }"
            >
              {{ $t("screen4.helper") }}...
            </div>
            <svg
              class="widget__confirmation-icon"
              width="116"
              height="116"
              viewBox="0 0 116 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.1"
                cx="58"
                cy="58"
                r="56"
                :stroke="widgetColorsTheme.mainColor1"
                stroke-width="4"
              />
              <path
                d="M54.1893 28.2062C56.6247 26.8363 59.5982 26.8363 62.0335 28.2062L82.478 39.7062C84.997 41.1231 86.5559 43.7886 86.5559 46.6788V69.3212C86.5559 72.2114 84.997 74.8769 82.478 76.2938L62.0335 87.7938C59.5982 89.1637 56.6247 89.1637 54.1893 87.7938L33.7449 76.2938C31.2259 74.8769 29.667 72.2114 29.667 69.3212V46.6788C29.667 43.7886 31.2259 41.1231 33.7449 39.7062L54.1893 28.2062Z"
                :stroke="widgetColorsTheme.ctaColor"
                stroke-width="4"
                stroke-linejoin="round"
              />
              <path
                d="M58.1114 90V74V58L29.667 42"
                :stroke="widgetColorsTheme.ctaColor"
                stroke-width="4"
                stroke-linejoin="round"
              />
              <path
                d="M86.5559 42L58.1114 58L29.667 42"
                :stroke="widgetColorsTheme.ctaColor"
                stroke-width="4"
                stroke-linejoin="round"
              />
            </svg>
            <c-amount />
          </div>
        </div>
        <c-footer />
      </div>
    </template>
  </main-layout>
</template>

<script>
import { mapGetters } from "vuex";
import MainLayout from "@/layouts/main-layout";
import CFooter from "@/components/CFooter";
import CAmount from "@/components/CAmount";

export default {
  name: "CScreen4",
  components: { CAmount, CFooter, MainLayout },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>
