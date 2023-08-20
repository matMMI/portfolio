(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 58:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(603);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(38);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    const [isLoading, setIsLoading] = (0,react_.useState)({
        visible: true,
        translateY: "0%"
    });
    (0,react_.useEffect)(()=>{
        const handleLoad = ()=>{
            setTimeout(()=>{
                setIsLoading({
                    visible: true,
                    translateY: "-100%"
                });
            }, 500);
            setTimeout(()=>{
                setIsLoading({
                    visible: false
                });
            }, 2510);
        };
        if (false) {}
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "→ MATHIS TOGNI – WEB DEVELOPER & UX/UI DESIGNER"
                })
            }),
            isLoading.visible ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                    transform: `translateY(${isLoading.translateY})`,
                    transition: "2s cubic-bezier(.42,0,0,.98)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "loader",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        enableBackground: "new 0 0 512 512",
                        viewBox: "0 0 512 512",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "m0 0h512v512h-512z"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                fill: "#fff",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "m457.3 200.1v257.2h-337.2v-335.5h33.6l100.6 100.7 100.7-100.7h33.5v13.9l-33.5 33.5-77 77-23.7 23.7-23.7-23.7-76.9-77v254.5h270v-190.1z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "m457.3 54.7v100.7l-68.8 68.7v166.1h-33.5v-132.5l-31.9 31.8h-47.4l148-148v-53.2h-335.4v369h-33.6v-402.6z"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 603:
/***/ (() => {



/***/ }),

/***/ 38:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(58));
module.exports = __webpack_exports__;

})();