<template>
  <div class="widget__box widget__menu">
    <div class="widget__box-item widget__menu-item">
      <div class="widget__box-item-name widget__menu-item-name">
        <img
          class="widget__box-item-icon widget__menu-item-icon"
          src="@/assets/icons/menu/language.svg"
          alt="bitcoin"
        />
        <div
          class="
            widget__box-item-title
            text--primary text--small text--600
            lh--130
          "
        >
          Language
        </div>
      </div>
      <img
        class="widget__box-item-arrow"
        src="@/assets/icons/arrow_right.svg"
        alt="arrow_right"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CMenu",
};
</script>

<style scoped></style>
