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
              {{ $t("screen5.title") }}
            </div>
            <div
              class="text--small text--600 lh--130 spacer--8"
              :style="{ color: widgetColorsTheme.mainColor2 }"
            >
              {{ $t("screen5.helper") }}
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
  name: "CScreen5",
  components: { CAmount, CFooter, MainLayout },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>
