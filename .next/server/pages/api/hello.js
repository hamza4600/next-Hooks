"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
    res.status(200).json({
        // creates a fake data base for Practice
        "products": [
            {
                "id": 1,
                "title": "Product 1",
                "price": 700,
                "description": "Description 1"
            },
            {
                "id": 2,
                "title": "Product 2",
                "price": 1050,
                "description": "Description 2"
            },
            {
                "id": 3,
                "title": "Product 3",
                "price": 2600,
                "description": "Description 3"
            }
        ],
        "news": [
            {
                "id": 1,
                "title": "News Article 1",
                "description": "Description 1",
                "category": "sports"
            },
            {
                "id": 2,
                "title": "News Article 2",
                "description": "Description 2",
                "category": "politics"
            },
            {
                "id": 3,
                "title": "News Article 3",
                "description": "Description 3",
                "category": "sports"
            }
        ],
        "dashboard": {
            "posts": 5,
            "likes": 100,
            "followers": 20,
            "following": 50
        },
        "events": [
            {
                "id": 1,
                "title": "Event Hamza",
                "description": "Description 1",
                "category": "sports",
                "date": "April 25"
            },
            {
                "id": 2,
                "title": "Event 2",
                "description": "Description 2",
                "category": "technology",
                "date": "May 25"
            },
            {
                "id": 3,
                "title": "Event 3",
                "description": "Description 3",
                "category": "food",
                "date": "October 25"
            },
            {
                "id": 4,
                "title": "Event 4",
                "description": "Description 4",
                "category": "food",
                "date": "April 25"
            },
            {
                "id": 5,
                "title": "Event 5",
                "description": "Description 5",
                "category": "sports",
                "date": "January 15"
            },
            {
                "id": 6,
                "title": "Event 6",
                "description": "Description 6",
                "category": "art",
                "date": "April 25"
            },
            {
                "id": 7,
                "title": "Event 7",
                "description": "Description 7",
                "category": "technology",
                "date": "June 25"
            },
            {
                "id": 8,
                "title": "Event 8",
                "description": "Description 8",
                "category": "sports",
                "date": "February 28"
            },
            {
                "id": 9,
                "title": "Event 9",
                "description": "Description 9",
                "category": "food",
                "date": "April 25"
            },
            {
                "id": 10,
                "title": "Event 10",
                "description": "Description 10",
                "category": "sports",
                "date": "August 5"
            }
        ]
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2677));
module.exports = __webpack_exports__;

})();