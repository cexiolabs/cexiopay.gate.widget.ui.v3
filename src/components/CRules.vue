<template>
  <div
    :style="{ color: widgetColorsTheme.mainColor2 }"
    class="widget__terms text--400 lh--130"
  >
    {{ $t("screen1.termsAndPrivacy.sentence") }} <br />
    <a
      :style="{ color: widgetColorsTheme.mainColor1 }"
      class="widget__terms-link text--600"
      href="#"
      >{{ $t("screen1.termsAndPrivacy.terms") }}</a
    >
    {{ $t("screen1.termsAndPrivacy.delimiter") }}
    <a
      :style="{ color: widgetColorsTheme.mainColor1 }"
      class="widget__terms-link text--600"
      href="#"
      >{{ $t("screen1.termsAndPrivacy.privacy") }}</a
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CRules",
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>
