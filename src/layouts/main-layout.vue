<template>
  <c-menu v-if="$store.state.widget.isMenu === true" />
  <div v-else class="widget__wrapper">
    <c-header @handleHeaderButtonClick="$store.commit('widget/OPEN_MENU')" />
    <c-progress-bar />
    <slot name="default"></slot>
  </div>
</template>

<script>
import CMenu from "@/views/CMenu";
import CHeader from "@/components/CHeader";
import CProgressBar from "@/components/CProgressBar";

export default {
  name: "main-layout",
  components: { CProgressBar, CHeader, CMenu },
};
</script>

<style scoped></style>
