<template>
  <div id="widget">
    <div
      class="widget"
      :style="{
        background: $store.state.widget.widgetColorsTheme.backgroundColor,
      }"
    >
      <c-screen1 v-if="$store.state.widget.currentScreen === 'c-screen-1'" />
      <c-screen2 v-if="$store.state.widget.currentScreen === 'c-screen-2'" />
    </div>
  </div>
</template>

<script>
import "./assets/scss/style.scss";
import CScreen1 from "@/views/CScreen1";
import CScreen2 from "@/views/CScreen2";

export default {
  name: "App",
  components: { CScreen1, CScreen2 },
};
</script>
