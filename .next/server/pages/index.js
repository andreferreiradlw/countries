"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,66,440];
exports.modules = {

/***/ 5254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/index.ts + 2 modules
var utils = __webpack_require__(7614);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./pages/Homepage.styles.ts
var Homepage_styles = __webpack_require__(2483);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/CountryCard/CountryCard.styles.ts

const Container = external_styled_components_default().a.withConfig({
  displayName: "CountryCardstyles__Container",
  componentId: "sc-122lf9-0"
})(["border-radius:1em;box-shadow:rgba(0,0,0,0.15) 1.95px 1.95px 2.6px;color:black;display:flex;flex-direction:column;gap:1em;overflow:hidden;position:relative;text-decoration:none;transition:all 0.2s ease-in-out;width:20em;&:hover{transform:translateY(-0.2em);}"]);
const FlagContainer = external_styled_components_default().div.withConfig({
  displayName: "CountryCardstyles__FlagContainer",
  componentId: "sc-122lf9-1"
})(["height:12em;position:relative;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "CountryCardstyles__Content",
  componentId: "sc-122lf9-2"
})(["display:flex;flex-direction:column;gap:0.5em;padding:1em;"]);
const CountryName = external_styled_components_default().h2.withConfig({
  displayName: "CountryCardstyles__CountryName",
  componentId: "sc-122lf9-3"
})(["font-size:1.5em;font-weight:600;"]);
const CountryDetail = external_styled_components_default().p.withConfig({
  displayName: "CountryCardstyles__CountryDetail",
  componentId: "sc-122lf9-4"
})(["font-size:", ";& span{font-weight:600;}"], ({
  theme
}) => theme.fontSizes.small);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CountryCard/index.tsx
// styles
 // components






const CountryCard = ({
  name,
  cca2,
  flags,
  population,
  region,
  capital
}) => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
  href: `/country/${cca2.toLowerCase()}`,
  passHref: true,
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    "data-testid": "countryCardContainer",
    children: [/*#__PURE__*/jsx_runtime_.jsx(FlagContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: flags.svg,
        layout: "fill",
        objectFit: "cover",
        alt: `${name.common} flag`,
        "data-testid": "countryCardFlag"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CountryName, {
        "data-testid": "countryCardName",
        children: name.common
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CountryDetail, {
        "data-testid": "countryCardPopulation",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Population:"
        }), " ", population.toLocaleString()]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CountryDetail, {
        "data-testid": "countryCardRegion",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Region:"
        }), " ", region]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CountryDetail, {
        "data-testid": "countryCardCapital",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Capital:"
        }), " ", capital?.join(', ') || 'None']
      })]
    })]
  })
});

/* harmony default export */ const components_CountryCard = (CountryCard);
;// CONCATENATED MODULE: ./public/search.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 30.239 30.239"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M20.194 3.46c-4.613-4.613-12.121-4.613-16.734 0-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34.097.459.319.897.676 1.254l6.718 6.718a2.498 2.498 0 0 0 3.535 0 2.496 2.496 0 0 0 0-3.535l-6.718-6.72a2.5 2.5 0 0 0-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0-3.442-3.444-3.442-9.048 0-12.492 3.443-3.443 9.048-3.443 12.492 0 3.444 3.444 3.444 9.048 0 12.492z"
  })));
};

/* harmony default export */ const public_search = (SvgSearch);
;// CONCATENATED MODULE: ./components/Select/Select.styles.ts

const Select_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "Selectstyles__Container",
  componentId: "sc-1tmg6tr-0"
})(["background:", ";border-radius:0.3em;box-shadow:rgba(0,0,0,0.24) 0px 3px 8px;cursor:pointer;height:3.5em;min-width:12em;position:relative;"], ({
  theme
}) => theme.colors.lightGrey);
const OptionContainer = external_styled_components_default().div.withConfig({
  displayName: "Selectstyles__OptionContainer",
  componentId: "sc-1tmg6tr-1"
})(["align-items:center;display:flex;gap:1.5em;justify-content:space-between;padding:1em 1.5em;& svg{fill:", ";height:20px;width:20px;}"], ({
  theme
}) => theme.colors.darkBlue);
const Placeholder = external_styled_components_default().div.withConfig({
  displayName: "Selectstyles__Placeholder",
  componentId: "sc-1tmg6tr-2"
})([""]);
const List = external_styled_components_default().ul.withConfig({
  displayName: "Selectstyles__List",
  componentId: "sc-1tmg6tr-3"
})(["background:", ";border-radius:0.3em;box-shadow:rgba(0,0,0,0.24) 0px 3px 8px;left:0;margin-top:3.5em;position:absolute;right:0;top:0;width:100%;z-index:2;"], ({
  theme
}) => theme.colors.lightGrey);
const ListItem = external_styled_components_default().li.withConfig({
  displayName: "Selectstyles__ListItem",
  componentId: "sc-1tmg6tr-4"
})(["list-style:none;padding:1em 1.5em;&:hover{background:", ";color:", ";}"], ({
  theme
}) => theme.colors.darkGrey, ({
  theme
}) => theme.colors.white);

;// CONCATENATED MODULE: ./public/arrow-down.svg
var arrow_down_path, _path2;

function arrow_down_extends() { arrow_down_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_extends.apply(this, arguments); }



var SvgArrowDown = function SvgArrowDown(props) {
  return /*#__PURE__*/external_react_.createElement("svg", arrow_down_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, props), arrow_down_path || (arrow_down_path = /*#__PURE__*/external_react_.createElement("path", {
    fillOpacity: 0.01,
    d: "M0 0h48v48H0z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M37 18 25 30 13 18"
  })));
};

/* harmony default export */ const arrow_down = (SvgArrowDown);
;// CONCATENATED MODULE: ./components/Select/index.tsx
 // styles

 // components





const Select = ({
  placeholder,
  options,
  onChange
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: selectedOption,
    1: setSelectedOption
  } = (0,external_react_.useState)(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    // fallback
    onChange(value); // update states

    setSelectedOption(value);
    setIsOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Select_styles_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OptionContainer, {
      onClick: toggleOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Placeholder, {
        children: selectedOption || placeholder
      }), /*#__PURE__*/jsx_runtime_.jsx(arrow_down, {})]
    }), isOpen && /*#__PURE__*/jsx_runtime_.jsx(List, {
      children: options.map((option, i) => /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
        onClick: onOptionClicked(option),
        children: option
      }, `select-option-${i}-${option}`))
    })]
  });
};

/* harmony default export */ const components_Select = (Select);
;// CONCATENATED MODULE: ./pages/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// helpers

 // styles

 // components








const Home = ({
  countryList
}) => {
  const {
    0: displayCountries,
    1: setDisplayCountries
  } = (0,external_react_.useState)(countryList);
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)();
  const {
    0: selectedRegion,
    1: setSelectedRegion
  } = (0,external_react_.useState)('');
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  (0,external_react_.useEffect)(() => {
    const filteredCountries = countryList.filter(({
      name,
      region
    }) => (search ? name.common.toLowerCase().includes(search.toLowerCase()) : true) && (selectedRegion !== '' ? region === selectedRegion : true)); // update state

    setDisplayCountries(filteredCountries);
  }, [search, selectedRegion, countryList]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Pick a Country!"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Created by Andre Ferreira"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Homepage_styles.Content, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Homepage_styles.FiltersContainer, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Homepage_styles.InputContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(public_search, {}), /*#__PURE__*/jsx_runtime_.jsx(Homepage_styles.Input, {
            onChange: e => setSearch(e.target.value),
            placeholder: "Search for a country..."
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(components_Select, {
          options: regions,
          placeholder: "Filter by Region",
          onChange: value => setSelectedRegion(value)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Homepage_styles.CardsContainer, {
        children: displayCountries?.length ? displayCountries.map((country, i) => /*#__PURE__*/jsx_runtime_.jsx(components_CountryCard, _objectSpread({}, country), `CountryCard-${i}-${country.name.common}`)) : 'No countries match the applied filters.'
      })]
    })]
  });
};

const getStaticProps = async () => {
  // fetch all countries
  const countryList = await (0,utils.getAllCountries)();
  return {
    props: {
      countryList: countryList
    }
  };
};
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 7432:
/***/ ((module) => {

module.exports = require("@testing-library/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,997,614,483], () => (__webpack_exec__(5254)));
module.exports = __webpack_exports__;

})();