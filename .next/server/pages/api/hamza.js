"use strict";
(() => {
var exports = {};
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 6897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handeler)
/* harmony export */ });
function handeler(req, res) {
    res.status(200).json([
        "data",
        "Hamza"
    ]);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6897));
module.exports = __webpack_exports__;

})();