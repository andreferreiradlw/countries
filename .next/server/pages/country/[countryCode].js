"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748,66,440];
exports.modules = {

/***/ 1363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _countryCode_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./utils/index.ts + 2 modules
var utils = __webpack_require__(7614);
// EXTERNAL MODULE: ./pages/country/Country.styles.ts
var Country_styles = __webpack_require__(569);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/arrow-left.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrowLeft = function SvgArrowLeft(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 1 1 1.06 1.06L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06z"
  })));
};

/* harmony default export */ const arrow_left = (SvgArrowLeft);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/country/[countryCode].tsx
// helpers

 // styles

 // components









const CountryPage = ({
  country,
  borders
}) => {
  const {
    flag,
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages
  } = country;
  const {
    common: commonName,
    nativeName
  } = name;
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [commonName, "!"]
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${flag}</text></svg>`
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Content, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Button, {
        onClick: () => router.back(),
        children: [/*#__PURE__*/jsx_runtime_.jsx(arrow_left, {}), "Go Back"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.CountryContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Country_styles.FlagContainer, {
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            src: flags.svg,
            layout: "responsive",
            priority: true,
            width: 700,
            height: 475,
            alt: `${commonName} flag`
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.RightContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Country_styles.Name, {
            children: commonName
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.DetailsContainer, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.DetailsList, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Native Name:"
                }), " ", nativeName[Object.keys(nativeName)[0]]?.common]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Population:"
                }), " ", population.toLocaleString()]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Region:"
                }), " ", region]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Sub Region:"
                }), " ", subregion]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Capital:"
                }), " ", capital?.join(', ') || 'None']
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.DetailsList, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Top Level Domain:"
                }), " ", tld?.join(', ') || 'None']
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Currencies:"
                }), ' ', Object.values(currencies).map(currency => currency.name).join(', ')]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.Detail, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Languages:"
                }), " ", Object.values(languages).join(', ')]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Country_styles.BordersContainer, {
            children: ["Border Countries:", ' ', borders?.length ? borders?.map((border, i) => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: `/country/${border.cca2.toLowerCase()}`,
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(Country_styles.Button, {
                as: "a",
                children: border.name.common
              })
            }, `border-country-${i}`)) : 'None']
          })]
        })]
      })]
    })]
  });
};

const getStaticPaths = async () => {
  const countries = await (0,utils.getAllCountries)();
  const paths = countries.map(country => ({
    params: {
      countryCode: country.cca2.toLowerCase()
    }
  })); // fallback: false means pages that don’t have the
  // correct cca2 will 404.

  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const {
    countryCode
  } = context.params;
  const countryData = await (0,utils.getCountriesByCode)([countryCode.toString()]);
  return {
    props: {
      country: countryData[0],
      borders: countryData[0].borders ? await (0,utils.getCountriesByCode)(countryData[0].borders) : null
    }
  };
};
/* harmony default export */ const _countryCode_ = (CountryPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,675,997,569,614], () => (__webpack_exec__(1363)));
module.exports = __webpack_exports__;

})();