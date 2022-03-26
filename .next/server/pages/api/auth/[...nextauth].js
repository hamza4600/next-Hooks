"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
var next_default = /*#__PURE__*/__webpack_require__.n(next_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/github"
const github_namespaceObject = require("next-auth/providers/github");
var github_default = /*#__PURE__*/__webpack_require__.n(github_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



/* harmony default export */ const _nextauth_ = (next_default()({
    providers: [
        google_default()({
            clienId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        github_default()({
            clienId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }), 
    ],
    jwt: {
        encryption: true
    },
    secret: process.env.SECRET,
    callbacks: {
        async jwt (token, user) {
            if (user) {
                token.id = user.id;
                console.log(token.id = user.id);
            }
            return token;
        },
        async session (session, token) {
            session.user.id = token.id;
            return session;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(154));
module.exports = __webpack_exports__;

})();