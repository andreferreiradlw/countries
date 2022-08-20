"use strict";
exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 8997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_0)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./theme/globalStyles.ts

/* harmony default export */ const globalStyles = ((0,external_styled_components_.createGlobalStyle)(["*{font-family:'Nunito Sans',sans-serif;box-sizing:border-box;}*:before,*:after{box-sizing:inherit;}html,body,h1,h2,h3,h4,h5,h6,a,p,span,em,small,strong,sub,sup,mark,del,ins,strike,abbr,dfn,blockquote,q,cite,code,pre,ol,ul,li,dl,dt,dd,div,section,article,main,aside,nav,header,hgroup,footer,img,figure,figcaption,address,time,audio,video,canvas,iframe,details,summary,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;}html{height:-webkit-fill-available;font-size:100%;}html:focus-within{scroll-behavior:smooth;}body{min-height:100vh;min-height:-webkit-fill-available;overflow-x:hidden;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:white;}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word;}img,picture,video,canvas,svg{display:block;max-width:100%;height:auto;border-style:none;}video{max-width:100%;}article,aside,footer,header,nav,section,main,img{display:block;}table{border-collapse:collapse;border-spacing:0;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none;}input,button,textarea,select{font:inherit;}textarea{white-space:revert;}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto;}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important;}}"]));
;// CONCATENATED MODULE: ./theme/theme.ts
const theme = {
  colors: {
    darkBlue: 'hsl(200, 15%, 8%)',
    darkGrey: 'hsl(0, 0%, 52%)',
    lightGrey: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)'
  },
  screenSizes: {
    mobile: '375px',
    desktop: '1440px'
  },
  fontSizes: {
    small: '14px',
    default: '16px'
  }
};
/* harmony default export */ const theme_theme = (theme);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./theme/index.tsx






const ThemeProvider = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
  theme: theme_theme,
  children: [/*#__PURE__*/jsx_runtime_.jsx(globalStyles, {}), children]
});

/* harmony default export */ const theme_0 = (ThemeProvider);

/***/ })

};
;