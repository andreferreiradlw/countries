"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,66,440];
exports.modules = {

/***/ 7338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Header/Header.styles.ts

const Container = external_styled_components_default().header.withConfig({
  displayName: "Headerstyles__Container",
  componentId: "sc-ya7bs-0"
})(["box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;padding:1.5em 0;position:relative;width:100%;z-index:100;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "Headerstyles__Content",
  componentId: "sc-ya7bs-1"
})(["margin:auto;max-width:", ";padding:0 2em;width:100%;"], ({
  theme
}) => theme.screenSizes.desktop);
const Title = external_styled_components_default().a.withConfig({
  displayName: "Headerstyles__Title",
  componentId: "sc-ya7bs-2"
})(["color:", ";font-size:2.5em;font-weight:800;text-decoration:none;"], ({
  theme
}) => theme.colors.darkBlue);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Header/index.tsx
// styles
 // components




const Header = () => /*#__PURE__*/jsx_runtime_.jsx(Container, {
  children: /*#__PURE__*/jsx_runtime_.jsx(Content, {
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "Where in the world?"
      })
    })
  })
});

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/Layout/Layout.styles.ts

const LayoutContainer = external_styled_components_default().div.withConfig({
  displayName: "Layoutstyles__LayoutContainer",
  componentId: "sc-13i7kdr-0"
})(["display:flex;flex-direction:column;min-height:100vh;"]);
const MainContainer = external_styled_components_default().main.withConfig({
  displayName: "Layoutstyles__MainContainer",
  componentId: "sc-13i7kdr-1"
})(["background-color:", ";flex-grow:1;width:100%;"], ({
  theme
}) => theme.colors.lightGrey);

;// CONCATENATED MODULE: ./components/Layout/index.tsx
 // styles





const Layout = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(LayoutContainer, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(MainContainer, {
    children: children
  })]
});

/* harmony default export */ const components_Layout = (Layout);
// EXTERNAL MODULE: ./theme/index.tsx + 2 modules
var theme = __webpack_require__(8997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// components




const App = ({
  Component,
  pageProps
}) => /*#__PURE__*/jsx_runtime_.jsx(theme/* default */.Z, {
  children: /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  })
});

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,997], () => (__webpack_exec__(7338)));
module.exports = __webpack_exports__;

})();