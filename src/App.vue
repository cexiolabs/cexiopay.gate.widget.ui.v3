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
      <c-screen3 v-if="$store.state.widget.currentScreen === 'c-screen-3'" />
      <c-screen4 v-if="$store.state.widget.currentScreen === 'c-screen-4'" />
      <c-screen5 v-if="$store.state.widget.currentScreen === 'c-screen-5'" />
    </div>
  </div>
</template>

<script>
import "./assets/scss/style.scss";
import CScreen1 from "@/views/CScreen1";
import CScreen2 from "@/views/CScreen2";
import CScreen3 from "@/views/CScreen3";
import CScreen4 from "@/views/CScreen4";
import CScreen5 from "@/views/CScreen5";

export default {
  name: "App",
  components: { CScreen1, CScreen2, CScreen3, CScreen4, CScreen5 },
};
</script>
