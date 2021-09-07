<template>
  <div id="widget">
    <div class="widget">
      <div class="widget__hero">
        <img
          class="widget__hero-menu"
          src="@/assets/icons/icon_menu.svg"
          alt="icon_menu"
          v-if="$store.state.isMenuOpen === false"
          @click="$store.commit('OPEN_MENU')"
        />
        <img
          class="widget__hero-menu"
          src="@/assets/icons/icon_back.svg"
          alt="icon_menu"
          v-else
          @click="$store.commit('CLOSE_MENU')"
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
      <div v-if="$store.state.isMenuOpen === false" class="widget__progress">
        <div class="widget__progress-bar"></div>
      </div>
      <div class="widget__body">
        <template v-if="$store.state.isMenuOpen === false">
          <div class="widget__information">
            <div class="text--small text--primary text--600 lh--100">
              Amount:
            </div>
            <div class="text--big text--primary text--600 lh--100 spacer--8">
              535 USD
            </div>
            <div
              class="text--smallest text--secondary text--600 lh--100 spacer--8"
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
            <a href="#" class="widget__link text--smallest text--600">
              More coins
            </a>
          </div>
          <div class="widget__terms text--primary text--400">
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
