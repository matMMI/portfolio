"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(786);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(38);
;// CONCATENATED MODULE: ./components/footer.jsx


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Conception et d\xe9veloppement par Mathis Togni"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.linkedin.com/in/mathis-togni-9baa831a3",
                className: "linkedin",
                target: "_blank",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: " http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "data-supported-dps": "24x24",
                    fill: "#fff",
                    className: "mercado-match",
                    width: "24",
                    height: "24",
                    focusable: "false",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/layout.jsx



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                id: "smooth-wrapper",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "me",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "txt t1",
                                        children: "– MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WEB DEVELOPER & UX/UI DESIGNER\xa0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "txt t2",
                                        children: "– MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WEB DEVELOPER & UX/UI DESIGNER\xa0"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "btnFilter",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/filter.svg",
                                alt: "close",
                                width: 30,
                                height: 30
                            })
                        }),
                        props.children
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/index.jsx




const HomePage = ({ pages  })=>{
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "item-menu filter",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            pages.map((page)=>page.acf.filtre.map((flt)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "icon",
                                        "data-filter": `.${flt.filtre}`,
                                        onClick: scrollToTop,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 100,
                                            height: 100,
                                            src: flt.image,
                                            alt: flt.filtre
                                        })
                                    }, flt.image))),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "close",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/close.svg",
                                    alt: "close",
                                    width: 100,
                                    height: 100
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "item-detail text-center",
                children: pages.map((page)=>page.acf.bloc_image.map((blocImage)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `item ${blocImage.filtre}`,
                            onClick: ()=>{},
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "square",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            style: {
                                                backgroundImage: `url(${blocImage.image})`
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "title_item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                        children: [
                                                            " ",
                                                            blocImage.titre
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            " ",
                                                            blocImage.dropdown
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                href: blocImage.lien,
                                                target: "_blank",
                                                children: "VOIR PLUS"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, blocImage.image)))
            })
        ]
    });
};
async function getServerSideProps() {
    const response = await external_axios_default().get("https://apiportfolio.mathistogni.fr/wp-json/acf/v3/pages");
    const data = await response.data;
    return {
        props: {
            pages: data
        }
    };
}
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 38:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,322,675], () => (__webpack_exec__(387)));
module.exports = __webpack_exports__;

})();