"use strict";
(() => {
var exports = {};
exports.id = 670;
exports.ids = [670];
exports.modules = {

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comments": () => (/* binding */ comments),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// import  {comments }from "./data"
const comments = [
    {
        id: 1,
        text: 'This is the first comment '
    },
    {
        id: 2,
        text: 'This is the Second comment '
    },
    {
        id: 3,
        text: 'This is the Thired comment '
    }, 
];
function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(comments);
    } else if (req.method === "POST") {
        const lkl = req.body.Data;
        const newFi = {
            id: 3 + 1,
            text: lkl
        };
        comments.push(newFi);
        res.status(201).json(newFi);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(218));
module.exports = __webpack_exports__;

})();