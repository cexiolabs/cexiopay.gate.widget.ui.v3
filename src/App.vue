<template>
  <div id="widget">
    <div class="widget">
      <c-header />
      <c-progress-bar v-if="$store.state.widget.currentScreen !== 'c-menu'" />
      <c-screen1 v-if="$store.state.widget.currentScreen === 'c-screen-1'" />
      <c-menu v-if="$store.state.widget.currentScreen === 'c-menu'" />
    </div>
  </div>
</template>

<script>
import "./assets/scss/style.scss";
import CScreen1 from "@/views/CScreen1";
import CMenu from "@/views/CMenu";
import CHeader from "@/components/CHeader";
import CProgressBar from "@/components/CProgressBar";

export default {
  name: "App",
  components: { CProgressBar, CHeader, CScreen1, CMenu },
};
</script>
