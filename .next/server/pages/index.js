"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 410:
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
    (0,react_.useEffect)(()=>{
        const loader = document.querySelector(".loader");
        const body = document.querySelector("body");
        var element = document.getElementById("loader");
        window.addEventListener("load", ()=>{
            setTimeout(()=>{
                body.classList.add("e");
                loader.classList.add("move");
            }, 500);
        });
        element.addEventListener("transitionend", function() {
            element.parentNode.removeChild(element);
        });
    });
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

;// CONCATENATED MODULE: ./components/header.jsx

function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "loader",
        className: "loader",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            id: "calque1",
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
    });
}

;// CONCATENATED MODULE: ./app/layout.jsx



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                id: "smooth-wrapper",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "smooth-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "me",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "txt t1",
                                        children: [
                                            "– MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WORDPRESS DEVELOPER & UX/UI DESIGNER",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "txt t2",
                                        children: [
                                            "– MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WORDPRESS DEVELOPER & UX/UI DESIGNER",
                                            " "
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "btnFilter",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                width: "30",
                                height: "30",
                                viewBox: "0 0 202 176",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M198.524 27.1429H64.4286M40.0476 27.1429H3.4762M198.524 149.048H64.4286M40.0476 149.048H3.4762M137.571 88.0952H3.4762M198.524 88.0952H161.952M52.2381 2.7619C55.4712 2.7619 58.5719 4.04625 60.8581 6.33241C63.1442 8.61857 64.4286 11.7193 64.4286 14.9524V39.3333C64.4286 42.5664 63.1442 45.6671 60.8581 47.9533C58.5719 50.2395 55.4712 51.5238 52.2381 51.5238C49.005 51.5238 45.9043 50.2395 43.6181 47.9533C41.332 45.6671 40.0476 42.5664 40.0476 39.3333V14.9524C40.0476 11.7193 41.332 8.61857 43.6181 6.33241C45.9043 4.04625 49.005 2.7619 52.2381 2.7619ZM52.2381 124.667C55.4712 124.667 58.5719 125.951 60.8581 128.237C63.1442 130.523 64.4286 133.624 64.4286 136.857V161.238C64.4286 164.471 63.1442 167.572 60.8581 169.858C58.5719 172.144 55.4712 173.429 52.2381 173.429C49.005 173.429 45.9043 172.144 43.6181 169.858C41.332 167.572 40.0476 164.471 40.0476 161.238V136.857C40.0476 133.624 41.332 130.523 43.6181 128.237C45.9043 125.951 49.005 124.667 52.2381 124.667ZM149.762 63.7143C152.995 63.7143 156.096 64.9986 158.382 67.2848C160.668 69.571 161.952 72.6716 161.952 75.9048V100.286C161.952 103.519 160.668 106.62 158.382 108.906C156.096 111.192 152.995 112.476 149.762 112.476C146.529 112.476 143.428 111.192 141.142 108.906C138.856 106.62 137.571 103.519 137.571 100.286V75.9048C137.571 72.6716 138.856 69.571 141.142 67.2848C143.428 64.9986 146.529 63.7143 149.762 63.7143Z",
                                    stroke: "white",
                                    strokeWidth: "7",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
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
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: flt.image,
                                            alt: flt.filtre
                                        })
                                    }, flt.image))),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "close",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "50",
                                    height: "50",
                                    viewBox: "0 0 257 256",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "0.0618286",
                                            width: "256",
                                            height: "256",
                                            rx: "60",
                                            fill: "black"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "92.7098",
                                            y: "89.3166",
                                            width: "107.021",
                                            height: "7.03",
                                            transform: "rotate(45 92.7098 89.3166)",
                                            fill: "white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "87.7388",
                                            y: "164.992",
                                            width: "107.021",
                                            height: "7.03",
                                            transform: "rotate(-45 87.7388 164.992)",
                                            fill: "white"
                                        })
                                    ]
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
                                target: "_blank",
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
                                                            blocImage.filtre
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: blocImage.lien,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        width: "21",
                                                        height: "21",
                                                        viewBox: "0 0 19 19",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M7.85107 3.30249V5.30249H2.85107V16.3025H13.8511V11.3025H15.8511V17.3025C15.8511 17.5677 15.7457 17.8221 15.5582 18.0096C15.3706 18.1971 15.1163 18.3025 14.8511 18.3025H1.85107C1.58586 18.3025 1.3315 18.1971 1.14397 18.0096C0.956431 17.8221 0.851074 17.5677 0.851074 17.3025V4.30249C0.851074 4.03727 0.956431 3.78292 1.14397 3.59538C1.3315 3.40785 1.58586 3.30249 1.85107 3.30249H7.85107ZM18.8511 0.30249V8.30249H16.8511V3.71549L9.05807 11.5095L7.64407 10.0955L15.4361 2.30249H10.8511V0.30249H18.8511Z",
                                                            fill: "white"
                                                        })
                                                    })
                                                })
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

/***/ 38:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

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
var __webpack_exports__ = (__webpack_exec__(410));
module.exports = __webpack_exports__;

})();