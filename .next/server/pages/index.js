"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(786);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./components/footer.tsx

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

;// CONCATENATED MODULE: ./components/header.tsx

function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: "mon header"
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/index.tsx




const HomePage = ({ pages  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: pages.map((page)=>page.acf.bloc_image.map((blocImage)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Card, {
                    sx: {
                        maxWidth: 345
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.CardMedia, {
                            sx: {
                                height: 140,
                                width: 400
                            },
                            image: blocImage.image
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.CardContent, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                gutterBottom: true,
                                variant: "h5",
                                component: "div",
                                children: blocImage.titre
                            })
                        })
                    ]
                }, blocImage.image)))
    });
};
async function getStaticProps() {
    const response = await external_axios_default().get("https://mathistogni.fr/wp-json/acf/v3/pages");
    const data = await response.data;
    return {
        props: {
            pages: data
        }
    };
}
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(146));
module.exports = __webpack_exports__;

})();