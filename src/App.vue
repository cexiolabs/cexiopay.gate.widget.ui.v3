<template>
  <div id="widget">
    <div class="widget">
      <div class="widget__hero">
        <img
          class="widget__hero-menu"
          src="@/assets/icons/icon_menu.svg"
          alt="icon_menu"
          v-if="$store.state.widget.isMenuOpen === false"
          @click="$store.commit('widget/OPEN_MENU')"
        />
        <img
          class="widget__hero-menu"
          src="@/assets/icons/icon_back.svg"
          alt="icon_menu"
          v-else
          @click="$store.commit('widget/CLOSE_MENU')"
        />
        <img
          class="widget__hero-menu-logo"
          src="@/assets/icons/logo.svg"
          alt="logo"
        />
        <img
          class="widget__hero-menu-cross"
          src="@/assets/icons/icon_cross.svg"
          alt="icon_cross"
        />
      </div>
      <div
        v-if="$store.state.widget.isMenuOpen === false"
        class="widget__progress"
      >
        <div class="widget__progress-bar"></div>
      </div>
      <div class="widget__body">
        <template v-if="$store.state.widget.isMenuOpen === false">
          <div class="widget__content">
            <div class="widget__information">
              <div class="text--small text--primary text--600 lh--100">
                Amount:
              </div>
              <div class="text--big text--primary text--600 lh--100 spacer--8">
                535 USD
              </div>
              <div
                class="
                  text--smallest text--secondary text--600
                  lh--100
                  spacer--8
                "
              >
                Choose crypto for payment:
              </div>
            </div>
            <div class="widget__box widget__coin">
              <div class="widget__box-item widget__coin-item">
                <div class="widget__box-item-name widget__coin-item-name">
                  <img
                    class="widget__box-item-icon widget__coin-item-icon"
                    src="./assets/icons/coins/bitcoin.svg"
                    alt="bitcoin"
                  />
                  <div
                    class="
                      widget__coin-item-title widget__box-item-title
                      text--primary text--small text--600
                      lh--130
                    "
                  >
                    Bitcoin
                  </div>
                </div>
                <div class="widget__box-item-convert widget__coin-item-convert">
                  <div
                    class="
                      widget__coin-item-value widget__box-item-value
                      text--primary text--small text--400
                      lh--100
                    "
                  >
                    0.005 BTC
                  </div>
                  <img
                    class="widget__box-item-arrow widget__coin-item-arrow"
                    src="./assets/icons/arrow_right.svg"
                    alt="arrow_right"
                  />
                </div>
              </div>
              <div class="widget__box-item widget__coin-item">
                <div class="widget__box-item-name widget__coin-item-name">
                  <img
                    class="widget__box-item-icon widget__coin-item-icon"
                    src="./assets/icons/coins/bitcoin.svg"
                    alt="bitcoin"
                  />
                  <div
                    class="
                      widget__coin-item-title widget__box-item-title
                      text--primary text--small text--600
                      lh--130
                    "
                  >
                    Bitcoin
                  </div>
                </div>
                <div class="widget__box-item-convert widget__coin-item-convert">
                  <div
                    class="
                      widget__coin-item-value widget__box-item-value
                      text--primary text--small text--400
                      lh--100
                    "
                  >
                    0.005 BTC
                  </div>
                  <img
                    class="widget__box-item-arrow widget__coin-item-arrow"
                    src="./assets/icons/arrow_right.svg"
                    alt="arrow_right"
                  />
                </div>
              </div>
              <div class="widget__box-item widget__coin-item">
                <div class="widget__box-item-name widget__coin-item-name">
                  <img
                    class="widget__box-item-icon widget__coin-item-icon"
                    src="./assets/icons/coins/bitcoin.svg"
                    alt="bitcoin"
                  />
                  <div
                    class="
                      widget__coin-item-title widget__box-item-title
                      text--primary text--small text--600
                      lh--130
                    "
                  >
                    Bitcoin
                  </div>
                </div>
                <div class="widget__box-item-convert widget__coin-item-convert">
                  <div
                    class="
                      widget__coin-item-value widget__box-item-value
                      text--primary text--small text--400
                      lh--100
                    "
                  >
                    0.005 BTC
                  </div>
                  <img
                    class="widget__box-item-arrow widget__coin-item-arrow"
                    src="./assets/icons/arrow_right.svg"
                    alt="arrow_right"
                  />
                </div>
              </div>
              <div class="widget__box-item widget__coin-item">
                <div class="widget__box-item-name widget__coin-item-name">
                  <img
                    class="widget__box-item-icon widget__coin-item-icon"
                    src="./assets/icons/coins/bitcoin.svg"
                    alt="bitcoin"
                  />
                  <div
                    class="
                      widget__coin-item-title widget__box-item-title
                      text--primary text--small text--600
                      lh--130
                    "
                  >
                    Bitcoin
                  </div>
                </div>
                <div class="widget__box-item-convert widget__coin-item-convert">
                  <div
                    class="
                      widget__coin-item-value widget__box-item-value
                      text--primary text--small text--400
                      lh--100
                    "
                  >
                    0.005 BTC
                  </div>
                  <img
                    class="widget__box-item-arrow widget__coin-item-arrow"
                    src="./assets/icons/arrow_right.svg"
                    alt="arrow_right"
                  />
                </div>
              </div>
            </div>
            <div class="widget__link-wrapper">
              <a href="#" class="widget__link text--small text--600">
                More coins
                <svg
                  class="widget__link-icon"
                  width="1.2rem"
                  height="0.7rem"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.11255 0.650414C1.47188 0.291086 2.05437 0.290768 2.41409 0.649705L5.99989 4.22769L9.58569 0.649704C9.94541 0.290767 10.5279 0.291086 10.8872 0.650414C11.2468 1.01002 11.2468 1.59306 10.8872 1.95266L6.70699 6.13289C6.31647 6.52342 5.6833 6.52342 5.29278 6.13289L1.11255 1.95266C0.752944 1.59306 0.752944 1.01002 1.11255 0.650414Z"
                    fill="#1CB6C1"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="widget__terms text--primary text--400 lh--130">
            By making a payment you are agreeing with <br />
            <a class="widget__terms-link text--primary text--600" href="#"
              >Terms of use</a
            >
            and
            <a class="widget__terms-link text--primary text--600" href="#"
              >Privacy policy</a
            >
          </div>
        </template>
        <CMenu v-else />
      </div>
    </div>
  </div>
</template>

<script>
import "./assets/scss/style.scss";
import CMenu from "./components/CMenu";

export default {
  name: "App",
  components: { CMenu },
};
</script>
