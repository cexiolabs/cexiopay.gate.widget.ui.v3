<template>
  <div class="widget__box widget__menu">
    <div class="widget__box-item widget__menu-item">
      <div class="widget__box-item-name widget__menu-item-name">
        <svg
          class="widget__box-item-icon widget__menu-item-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9899 15.796V11.377"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9899 8.2041H11.9999"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3346 2.75H7.66561C4.64461 2.75 2.75061 4.889 2.75061 7.916V16.084C2.75061 19.111 4.63561 21.25 7.66561 21.25H16.3336C19.3646 21.25 21.2506 19.111 21.2506 16.084V7.916C21.2506 4.889 19.3646 2.75 16.3346 2.75Z"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div
          class="widget__box-item-title text--small text--600 lh--130"
          :style="{ color: widgetColorsTheme.mainColor1 }"
        >
          About
        </div>
      </div>
      <svg
        class="widget__box-item-arrow"
        width="0.7rem"
        height="1.2rem"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.650414 10.8875C0.291086 10.5281 0.290768 9.94563 0.649705 9.58591L4.22769 6.00011L0.649704 2.41431C0.290767 2.05459 0.291086 1.4721 0.650414 1.11277C1.01002 0.753169 1.59306 0.753169 1.95266 1.11277L6.13289 5.29301C6.52342 5.68353 6.52342 6.3167 6.13289 6.70722L1.95266 10.8875C1.59306 11.2471 1.01002 11.2471 0.650414 10.8875Z"
          :fill="widgetColorsTheme.mainColor1"
        />
      </svg>
    </div>
    <div class="widget__box-item widget__menu-item">
      <div class="widget__box-item-name widget__menu-item-name">
        <svg
          class="widget__box-item-icon widget__menu-item-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="11.611"
            cy="11.611"
            r="9.61098"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          class="widget__box-item-title text--small text--600 lh--130"
          :style="{ color: widgetColorsTheme.mainColor1 }"
        >
          FAQ
        </div>
      </div>
      <svg
        class="widget__box-item-arrow"
        width="0.7rem"
        height="1.2rem"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.650414 10.8875C0.291086 10.5281 0.290768 9.94563 0.649705 9.58591L4.22769 6.00011L0.649704 2.41431C0.290767 2.05459 0.291086 1.4721 0.650414 1.11277C1.01002 0.753169 1.59306 0.753169 1.95266 1.11277L6.13289 5.29301C6.52342 5.68353 6.52342 6.3167 6.13289 6.70722L1.95266 10.8875C1.59306 11.2471 1.01002 11.2471 0.650414 10.8875Z"
          :fill="widgetColorsTheme.mainColor1"
        />
      </svg>
    </div>
    <div class="widget__box-item widget__menu-item">
      <div class="widget__box-item-name widget__menu-item-name">
        <svg
          class="widget__box-item-icon widget__menu-item-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.13769 22C7.72569 22 7.33469 21.968 6.96669 21.905L6.74869 21.864C4.37769 21.371 2.99969 19.555 2.99969 16.791V7.209C2.99969 6.875 3.01969 6.555 3.05969 6.249C3.40869 3.564 5.25369 2 8.13769 2H15.8627C19.0587 2 20.9697 3.92 20.9997 7.132V7.209V16.791C20.9997 20.048 19.0837 22 15.8627 22H8.13769ZM8.13769 3.457C5.68169 3.457 4.43669 4.72 4.43669 7.209V16.791C4.43669 19.28 5.68169 20.543 8.13769 20.543H15.8537C18.3087 20.543 19.5457 19.28 19.5457 16.791V7.209C19.5457 4.72 18.3087 3.457 15.8537 3.457H8.13769ZM16.3057 16.234C16.3057 15.834 15.9867 15.51 15.5927 15.51H8.38169C7.9877 15.51 7.6677 15.834 7.6677 16.234C7.6677 16.634 7.9877 16.958 8.38169 16.958H15.5927C15.9867 16.958 16.3057 16.634 16.3057 16.234ZM15.5927 11.271C15.8677 11.241 16.1367 11.373 16.2837 11.61C16.4307 11.849 16.4307 12.151 16.2837 12.39C16.1367 12.627 15.8677 12.759 15.5927 12.729H8.38169C8.01569 12.687 7.73869 12.374 7.73869 12C7.73869 11.626 8.01569 11.312 8.38169 11.271H15.5927ZM11.7767 7.771C11.7767 7.397 11.4997 7.083 11.1337 7.042H8.3907C8.02369 7.083 7.7467 7.397 7.7467 7.771C7.7467 8.144 8.02369 8.458 8.3907 8.499H11.1337C11.4997 8.458 11.7767 8.144 11.7767 7.771Z"
            :fill="widgetColorsTheme.mainColor1"
          />
        </svg>
        <div
          class="widget__box-item-title text--small text--600 lh--130"
          :style="{ color: widgetColorsTheme.mainColor1 }"
        >
          Terms of use
        </div>
      </div>
      <svg
        class="widget__box-item-arrow"
        width="0.7rem"
        height="1.2rem"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.650414 10.8875C0.291086 10.5281 0.290768 9.94563 0.649705 9.58591L4.22769 6.00011L0.649704 2.41431C0.290767 2.05459 0.291086 1.4721 0.650414 1.11277C1.01002 0.753169 1.59306 0.753169 1.95266 1.11277L6.13289 5.29301C6.52342 5.68353 6.52342 6.3167 6.13289 6.70722L1.95266 10.8875C1.59306 11.2471 1.01002 11.2471 0.650414 10.8875Z"
          :fill="widgetColorsTheme.mainColor1"
        />
      </svg>
    </div>
    <div class="widget__box-item widget__menu-item">
      <div class="widget__box-item-name widget__menu-item-name">
        <svg
          class="widget__box-item-icon widget__menu-item-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 8.389C3.5 7.117 4.54 6.081 5.817 6.081H18.183C19.455 6.081 20.49 7.117 20.49 8.389V11.446C18.847 12.467 16.953 13.182 14.959 13.533C14.411 12.426 13.271 11.7 11.99 11.7C10.72 11.7 9.575 12.423 9.011 13.524C7.029 13.175 5.142 12.463 3.5 11.446V8.389ZM10.704 3.5H13.286C13.958 3.5 14.521 3.961 14.688 4.581H9.301C9.469 3.961 10.031 3.5 10.704 3.5ZM9.384 15.101C9.764 15.154 10.111 14.92 10.211 14.556C10.434 13.744 11.149 13.2 11.99 13.2C12.822 13.2 13.544 13.756 13.746 14.552C13.832 14.888 14.134 15.118 14.473 15.118C14.507 15.118 14.542 15.116 14.576 15.111C17.145 14.755 19.592 13.846 21.654 12.482C21.864 12.342 21.99 12.108 21.99 11.856V8.389C21.99 6.289 20.282 4.581 18.183 4.581H16.206C16.019 3.13 14.788 2 13.286 2H10.704C9.202 2 7.972 3.129 7.784 4.581H5.817C3.712 4.581 2 6.289 2 8.389V11.856C2 12.108 2.126 12.343 2.337 12.482C4.396 13.84 6.833 14.745 9.384 15.101ZM11.2451 15.3841V16.6781C11.2451 17.0921 11.5811 17.4281 11.9951 17.4281C12.4091 17.4281 12.7451 17.0921 12.7451 16.6781V15.3841C12.7451 14.9701 12.4091 14.6341 11.9951 14.6341C11.5811 14.6341 11.2451 14.9701 11.2451 15.3841ZM20.5086 15.4169C20.5386 15.0329 20.8516 14.7269 21.2446 14.7269C21.6576 14.7269 21.9926 15.0619 21.9926 15.4749C21.9926 15.4813 21.9807 15.6353 21.963 15.8639C21.9198 16.4213 21.8423 17.4221 21.8196 17.8079C21.7626 18.7459 21.3986 19.7029 20.8456 20.3689C20.0756 21.2969 19.0946 21.7309 17.7606 21.7339C17.1416 21.7349 14.5836 21.7359 12.0246 21.7359C9.4666 21.7359 6.9076 21.7349 6.2896 21.7339C4.9546 21.7309 3.9736 21.2969 3.2036 20.3679C2.6516 19.7029 2.2866 18.7459 2.2306 17.8079C2.20754 17.4277 2.13173 16.4502 2.08816 15.8884C2.06939 15.6464 2.0566 15.4815 2.0566 15.4749C2.0566 15.0619 2.3916 14.7269 2.8046 14.7269C3.1976 14.7269 3.5106 15.0329 3.5406 15.4169C3.5406 15.4169 3.6946 17.1659 3.7276 17.7179C3.7646 18.3289 4.0126 18.9939 4.3586 19.4099C4.8486 20.0009 5.3906 20.2319 6.2916 20.2339C7.5276 20.2359 16.5206 20.2359 17.7576 20.2339C18.6596 20.2319 19.2016 20.0009 19.6906 19.4109C20.0376 18.9939 20.2856 18.3289 20.3226 17.7179C20.3546 17.1659 20.5086 15.4169 20.5086 15.4169Z"
            :fill="widgetColorsTheme.mainColor1"
          />
        </svg>
        <div
          class="widget__box-item-title text--small text--600 lh--130"
          :style="{ color: widgetColorsTheme.mainColor1 }"
        >
          Privacy policy
        </div>
      </div>
      <svg
        class="widget__box-item-arrow"
        width="0.7rem"
        height="1.2rem"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.650414 10.8875C0.291086 10.5281 0.290768 9.94563 0.649705 9.58591L4.22769 6.00011L0.649704 2.41431C0.290767 2.05459 0.291086 1.4721 0.650414 1.11277C1.01002 0.753169 1.59306 0.753169 1.95266 1.11277L6.13289 5.29301C6.52342 5.68353 6.52342 6.3167 6.13289 6.70722L1.95266 10.8875C1.59306 11.2471 1.01002 11.2471 0.650414 10.8875Z"
          :fill="widgetColorsTheme.mainColor1"
        />
      </svg>
    </div>
    <div class="widget__box-item widget__menu-item">
      <div class="widget__box-item-name widget__menu-item-name">
        <svg
          class="widget__box-item-icon widget__menu-item-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 11.4445C22.0038 12.911 21.6612 14.3577 21 15.6667C19.401 18.8659 16.1321 20.8875 12.5555 20.8889C11.089 20.8927 9.64234 20.5501 8.33332 19.8889L2 22L4.11111 15.6667C3.44992 14.3577 3.10729 12.911 3.11111 11.4445C3.11249 7.8679 5.13408 4.59896 8.33332 3.00003C9.64234 2.33884 11.089 1.99621 12.5555 2.00003H13.1111C17.9064 2.26459 21.7354 6.09357 22 10.8889V11.4445V11.4445Z"
            :stroke="widgetColorsTheme.mainColor1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          class="widget__box-item-title text--small text--600 lh--130"
          :style="{ color: widgetColorsTheme.mainColor1 }"
        >
          Contact us
        </div>
      </div>
      <svg
        class="widget__box-item-arrow"
        width="0.7rem"
        height="1.2rem"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.650414 10.8875C0.291086 10.5281 0.290768 9.94563 0.649705 9.58591L4.22769 6.00011L0.649704 2.41431C0.290767 2.05459 0.291086 1.4721 0.650414 1.11277C1.01002 0.753169 1.59306 0.753169 1.95266 1.11277L6.13289 5.29301C6.52342 5.68353 6.52342 6.3167 6.13289 6.70722L1.95266 10.8875C1.59306 11.2471 1.01002 11.2471 0.650414 10.8875Z"
          :fill="widgetColorsTheme.mainColor1"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CMenu",
  computed: {
    ...mapGetters({
      widgetColorsTheme: "widget/widgetColorsTheme",
    }),
  },
};
</script>

<style scoped></style>
