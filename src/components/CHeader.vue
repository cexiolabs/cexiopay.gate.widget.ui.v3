<template>
  <div class="widget__hero">
    <slot>
      <svg
        @click="handleHeaderButtonClick"
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
        <line
          x1="8.75"
          y1="9.5"
          x2="17.25"
          y2="9.5"
          :stroke="widgetColorsTheme.mainColor1"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <line
          x1="8.75"
          y1="16.5"
          x2="17.25"
          y2="16.5"
          :stroke="widgetColorsTheme.mainColor1"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </slot>
    <svg
      class="widget__hero-menu-logo"
      width="106"
      height="26"
      viewBox="0 0 106 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73 19.6829V5.60645H78.1418C79.0542 5.60645 79.8036 5.71072 80.3901 5.91925C80.9897 6.1278 81.4589 6.41454 81.7978 6.77948C82.1497 7.14443 82.3908 7.56803 82.5212 8.05027C82.6645 8.51949 82.7362 9.01477 82.7362 9.53612C82.7362 10.3181 82.5733 10.9633 82.2474 11.4716C81.9346 11.98 81.5241 12.384 81.0158 12.6838C80.5074 12.9705 79.9274 13.1725 79.2758 13.2898C78.6371 13.4071 77.9919 13.4658 77.3402 13.4658H74.3294V19.6829H73ZM77.3793 12.3319C78.005 12.3319 78.5654 12.2928 79.0607 12.2146C79.556 12.1364 79.9731 11.993 80.3119 11.7844C80.6638 11.5629 80.931 11.2696 81.1135 10.9047C81.309 10.5267 81.4068 10.0379 81.4068 9.43837C81.4068 8.55207 81.1135 7.88084 80.527 7.42465C79.9535 6.96847 79.0346 6.74038 77.7704 6.74038H74.3294V12.3319H77.3793Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        d="M82.2691 19.6829L87.802 5.60645H89.3074L94.7033 19.6829H93.3348L91.7121 15.2645H85.2995L83.6377 19.6829H82.2691ZM85.7492 14.1305H91.2624L88.5058 6.74038L85.7492 14.1305Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        d="M100.195 12.3905L104.437 5.60645H105.982L100.879 13.544V19.6829H99.5496V13.6418L94.5251 5.60645H96.05L100.195 12.3905Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        d="M44.6358 17.5988C43.2553 18.9882 41.4121 19.6788 39.5932 19.6788C34.9322 19.6788 32.4962 16.4125 32.4799 12.675C32.4393 8.97004 34.851 5.50879 39.5932 5.50879C41.4121 5.50879 43.2472 6.19941 44.6358 7.58879L43.905 8.22254C42.7194 7.03629 41.1604 6.45941 39.5932 6.45941C35.5575 6.45941 33.4868 9.31129 33.5031 12.6344C33.5437 15.8763 35.5981 18.6875 39.5932 18.6875C41.1522 18.6875 42.7357 18.0944 43.9212 16.9244L44.6358 17.5988Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        d="M47.3813 12.0739H55.4852V13.0489H47.3813V18.4764H56.1186V19.5001H46.3094V5.67139H56.3216V6.69514H47.3894V12.0739H47.3813Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        d="M66.9981 5.67139H68.1349V5.70389L63.4415 12.4151L68.5328 19.5001V19.5164H67.2661L62.8 13.1789L58.3339 19.5164H57.0591V19.5001L62.1423 12.4151L57.4488 5.70389V5.67139H58.61L62.8 11.5864L66.9981 5.67139Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        d="M69.3464 11.8379C69.7687 11.8379 70.1016 12.1791 70.1016 12.5935C70.1016 13.016 69.7605 13.3491 69.3464 13.3491C68.9323 13.3491 68.5912 13.0079 68.5912 12.5935C68.5912 12.171 68.9242 11.8379 69.3464 11.8379Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3687 13C11.3687 13.8937 12.0995 14.625 12.9927 14.625H22.7368L24.3608 13L22.7368 11.375H12.9927C12.0995 11.375 11.3687 12.1062 11.3687 13Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9926 5.6875C8.95686 5.6875 5.68445 8.96188 5.68445 13C5.68445 17.0381 8.95686 20.3125 12.9926 20.3125H17.0526L20.3007 17.0625H12.9926C10.7514 17.0625 8.9325 15.2425 8.9325 13C8.9325 10.7575 10.7514 8.9375 12.9926 8.9375H20.3007L17.0526 5.6875H12.9926Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9922 0C5.81401 0 0 5.8175 0 13C0 20.1825 5.81401 26 12.9922 26H25.9844V22.75H12.9922C7.60856 22.75 3.24805 18.3869 3.24805 13C3.24805 7.61312 7.60856 3.25 12.9922 3.25H25.9844V0H12.9922Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.5494 8.9375H25.9854V5.6875H20.3013L23.5494 8.9375Z"
        :fill="widgetColorsTheme.mainColor1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.3013 20.3125H25.9854V17.0625H23.5494L20.3013 20.3125Z"
        :fill="widgetColorsTheme.mainColor1"
      />
    </svg>
    <svg
      class="widget__hero-menu-cross"
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
      <path
        d="M9 17L17 9"
        :stroke="widgetColorsTheme.mainColor1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M17 17L9 9"
        :stroke="widgetColorsTheme.mainColor1"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CHeader",
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
  methods: {
    handleHeaderButtonClick() {
      this.$emit("handleHeaderButtonClick");
    },
  },
};
</script>
