<template>
  <main-layout>
    <template slot="default">
      <div class="widget__body">
        <div class="widget__content">
          <div class="widget__information">
            <div
              class="text--small text--600 lh--100"
              :style="{ color: widgetColorsTheme.mainColor1 }"
            >
              Provide your e-mail address
            </div>
            <div class="widget__email">
              <svg
                class="widget__email-icon"
                width="117"
                height="116"
                viewBox="0 0 117 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.1"
                  cx="58.5"
                  cy="58"
                  r="56"
                  :stroke="widgetColorsTheme.mainColor1"
                  stroke-width="4"
                />
                <rect
                  x="26.5"
                  y="34"
                  width="64"
                  height="48"
                  rx="8"
                  :stroke="widgetColorsTheme.ctaColor"
                  stroke-width="4"
                />
                <path
                  d="M90.5 40L66.2384 60.4707C61.7687 64.242 55.2313 64.242 50.7615 60.4707L26.5 40"
                  :stroke="widgetColorsTheme.ctaColor"
                  stroke-width="4"
                />
              </svg>
              <div
                class="widget__email-text text--medium lh--130 text--600"
                :style="{ color: widgetColorsTheme.mainColor1 }"
              >
                Send status updates to e-mail
              </div>
              <input
                v-model="email"
                class="widget__input text--small lh--130 text--400"
                :style="{
                  border:
                    this.errors.length > 0
                      ? `0.15rem solid ${widgetColorsTheme.errorColor}`
                      : `0.15rem solid ${widgetColorsTheme.borderLineColor}`,
                  color: widgetColorsTheme.mainColor1,
                }"
                @keypress.enter="nextScreen"
                placeholder="Provide your e-mail address"
              />
              <div
                class="widget__errors lh--130 text--400"
                v-if="errors.length > 0"
              >
                <p
                  :style="{ color: widgetColorsTheme.errorColor }"
                  v-for="(item, idx) in errors"
                  :key="idx"
                >
                  {{ item }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="widget__buttons">
          <c-button type="secondary" @handleButtonClick="backScreen"
            >Back
          </c-button>
          <c-button type="primary" @handleButtonClick="nextScreen"
            >Next
          </c-button>
        </div>
      </div>
    </template>
  </main-layout>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "@/components/CButton";
import MainLayout from "@/layouts/main-layout";

export default {
  name: "CScreen1",
  components: { MainLayout, CButton },
  data() {
    return {
      email: "",
      errors: [],
      isSubmitted: false,
    };
  },
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
  methods: {
    validateEmail(email) {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validationResult = emailRegex.test(email);

      if (email && validationResult) {
        this.errors = [];
        return true;
      }

      this.errors = [];

      if (!email) {
        this.errors.push("Field is required!");
        return false;
      }

      if (!validationResult) {
        this.errors.push("Fill correct email");
        return false;
      }
    },
    nextScreen() {
      const isValid = this.validateEmail(this.email);
      this.isSubmitted = true;
      if (!isValid) {
        return false;
      }
      this.$store.commit("widget/CHANGE_SCREEN", "c-screen-3");
    },
    backScreen() {
      this.$store.commit("widget/CHANGE_SCREEN", "c-screen-1");
    },
  },
  watch: {
    email(val) {
      if (this.isSubmitted === true) {
        this.validateEmail(val);
      }
    },
  },
};
</script>

<style lang="scss"></style>
