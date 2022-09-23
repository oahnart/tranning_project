import "antd/dist/antd.css";
import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";
import {
  DMSansRegular,
  GmarketSansTTFLight,
  GmarketSansTTFBold,
  MontaguSlab,
  MontaguSlabBold,
  NotoSansCJKkr,
  NotoSansKR,
  NotoSansKRBold,
  Poppins,
  OpenSansR,
  OpenSansRI,
  OpenSansSB,
  OpenSansSBI,
  OpenSansB,
  OpenSansBI,
  OpenSansEB,
  OpenSansEBI,
} from "assets/fonts/font";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Close from "assets/icons/close.svg";


const GlobalStyles = createGlobalStyle`

/* @font-face {
  font-family: 'DM Sans';
  src: local('DM Sans'), url(${DMSansRegular}) format('opentype');
}

@font-face {
  font-family: 'Gmarket Sans';
  src: local('Gmarket Sans'), url(${GmarketSansTTFLight}) format('opentype');
}
@font-face {
  font-family: 'Gmarket Sans Bold';
  src: local('Gmarket Sans'), url(${GmarketSansTTFBold}) format('opentype');
}

@font-face {
  font-family: 'Montagu Slab';
  src: local('Montagu Slab'), url(${MontaguSlab}) format('opentype');
}

@font-face {
  font-family: 'Montagu Slab Bold';
  src: local('Montagu Slab Bold'), url(${MontaguSlabBold}) format('opentype');
}

@font-face {
  font-family: 'Noto Sans CJK KR';
  src: local('Noto Sans CJK KR'), url(${NotoSansCJKkr}) format('opentype');
}

@font-face {
  font-family: 'Noto Sans KR';
  src: local('Noto Sans KR'), url(${NotoSansKR}) format('opentype');
}
@font-face {
  font-family: 'Noto Sans KR Bold';
  src: local('Noto Sans KR Bold'), url(${NotoSansKRBold}) format('opentype');
} */

@font-face {
  font-family: 'Poppins';
  src: local('Poppins'), url(${Poppins}) format('opentype');
}


@font-face {
  font-family: 'OpenSans-Regular';
  src: local('OpenSans-Regular'), url(${OpenSansR}) format('opentype');
}

@font-face {
  font-family: 'OpenSans-RegularItalic';
  src: local('OpenSans-RegularItalic'), url(${OpenSansRI}) format('opentype');
}

@font-face {
  font-family: 'OpenSans-SemiBold';
  src: local('OpenSans-SemiBold'), url(${OpenSansSB}) format('opentype');
}

@font-face {
  font-family: 'OpenSans-SemiBoldItalic';
  src: local('OpenSans-SemiBoldItalic'), url(${OpenSansSBI}) format('opentype');
}

@font-face {
  font-family: 'OpenSans-Bold';
  src: local('OpenSans-Bold'), url(${OpenSansB}) format('opentype');
}

@font-face {
  font-family: 'OpenSans-BoldItalic';
  src: local('OpenSans-BoldItalic'), url(${OpenSansBI}) format('opentype');
}

@font-face {
  font-family: 'OpenSans-ExtraBold';
  src: local('OpenSans-ExtraBold'), url(${OpenSansEB}) format('opentype');
}

@font-face {
  font-family: 'OpenSans-ExtraBoldItalic';
  src: local('OpenSans-ExtraBoldItalic'), url(${OpenSansEBI}) format('opentype');
}

  * {
    margin: 0;
    font-family: 'Noto Sans CJK KR', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    height: 100%;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    outline: none;
  }

  h1 {
    ${theme("fontStyle.h3")}
  }

  h2 {
    ${theme("fontStyle.h4")}
  }

  h2 {
    ${theme("fontStyle.h5")}
  }

  h3 {
    ${theme("fontStyle.subtitle1")}
  }

  h4 {
    ${theme("fontStyle.subtitle2")}
  }

  h5 {
    ${theme("fontStyle.body1")}
  }

  text{
    font-family: 'NotoSansKR-Bold';
  }

  p {
    ${theme("fontStyle.body2")}
  }
  .hljs{
    background: #000000;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  /* overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 4px;
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    max-width: 230px;
    background-color: #5d7160;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(180, 185, 171, 0.3);
    background-color: #b4b9ab;
  } */
  outline : none;

  /* .slick-slider {
    .slick-arrow {
      &.slick-prev{
        display: none !important;
      }
      &.slick-next{
        display: none !important;
      }
    }
  } */

  .ant-btn[disabled], .ant-btn[disabled]:hover{
    border: none;
    font-family: 'NotoSansKR-Medium';
  }
  
  /* Select */
  .ant-select-item-option-content {
    font-size: 16px;
  }

  /* CheckBox */
  .ant-checkbox-wrapper{
    .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner{
      border: 1px solid #d9d9d9;
    }
    .ant-checkbox-checked{
      &::after{
        border: none;
      }
    }
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #5c7161;
    &::after {
      background: #5c7161;
    }
  }
  .ant-radio-wrapper {
    margin-right: 40px;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #5c7161;
    border-color: #5c7161;

    /* &:after{
      content: "\e816" ;
      font-family: 'themify-icons';
      border:none;
      transform: rotate(0deg) scale(1) translate(-20%, -20%);
    } */
  }

  /** ======================================== */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .ant-modal-wrap {
    cursor: url(${Close}), auto;
  }
  .ant-modal-content {
    cursor: default;
  }

  .hidden-mobile {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  /* .ant-pagination {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }; */

  .ant-pagination {
    .ant-pagination-item {
      border: none;
      background-color: unset;
    }
    .ant-pagination-item-active {
      border: solid 1px #5c7161;
      border-radius: 50%;
      a {
        color: #5c7161;
      }
    }
    .ant-pagination-item-link {
      border: none;
      background: transparent;
    }

    @media screen and (max-width: 768px) {
      justify-content: center;
      text-align: center;
    }
  }
  /**modal */
  .ant-modal-root{
    .ant-modal {
      @media(max-width : 360px) {
        /* margin: 0; */
        max-width: 100% !important;
        padding: 0 15px;
      }
    }
  }
  /**table */
  .ant-table-wrapper {
    .ant-table-body {
      &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 0px;
        display: block;
      }
    }
  }
  .ant-table-wrapper .ant-table-body .ant-table-tbody > tr > td {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    &:last-child {
      border-right: none;
    }
  }

  /**select antd */
  .ant-select-item {
    .ant-select-item-option-content {
      font-family: "OpenSans-Regular";
    font-size: 14px;
    font-weight: 500;
    color: #5d7160;
    }
    .ant-select-selector {
      font-family: "Montserrat-SemiBold";
    }
  }

  .marquee {
    min-width: unset !important;
  }

  /**popup error api */
  .ant-notification {
    .ant-notification-notice {
      .ant-notification-notice-message {
        text-align: center;
        margin-top: 8px;
        text-align: center;
        font-family: "Montserrat-Medium";
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.6px;
        color: #5c7161;
        padding-right: 40px;
      }
      .ant-notification-notice-close {
        top : 24px;
        .ant-notification-close-icon {
          font-size: 13px;
          color: #111;
          border-radius: 50%;
          background-color: #d9d9d9;
          padding: 5px;
        }
      }
    }
  }


  /* popover tableProject*/
  
  .ant-popover-inner {
        border-radius: 10px !important;
        font-family: "OpenSans-Regular";
        font-size: 16px;
        line-height: 22px;
    }

  /** daum kakao address */
  .box-modified{
    >div >span{
      background-color: #5d7160;
    }
  }
`;

export default GlobalStyles;


