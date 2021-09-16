<template>
  <div id="widget">
    <div
      class="widget"
      :style="{
        background: $store.state.widget.widgetColorsTheme.backgroundColor,
      }"
    >
      <c-more-coins
        v-if="$store.state.widget.currentScreen === 'c-more-coins'"
      />
      <c-screen1 v-if="$store.state.widget.currentScreen === 'c-screen-1'" />
      <c-menu v-if="$store.state.widget.currentScreen === 'c-menu'" />
    </div>
  </div>
</template>

<script>
import "./assets/scss/style.scss";
import CScreen1 from "@/views/CScreen1";
import CMenu from "@/views/CMenu";
import CMoreCoins from "@/views/CMoreCoins";

export default {
  name: "App",
  components: { CMoreCoins, CScreen1, CMenu },
};
</script>
