webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/Users/yiyang2/Learning/react-complete-guide/nextjs-meetup-app-demo/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar DUMMY_MEETUPS = [{\n  id: \"m1\",\n  title: \"First Meetup\",\n  image: \"https://img.freepik.com/free-photo/lake-with-autumn-foliage-mountains-with-reflection-new-england-stowe_649448-5418.jpg?w=1380&t=st=1682599573~exp=1682600173~hmac=673ec999ab978b170452864313a7de0f1af911e254185bdbc4969b9f1277bde0\",\n  address: \"dummy address, dummy city\",\n  description: \"First meetup here.\"\n}, {\n  id: \"m2\",\n  title: \"Second Meetup\",\n  image: \"https://img.freepik.com/free-photo/lake-with-autumn-foliage-mountains-with-reflection-new-england-stowe_649448-5418.jpg?w=1380&t=st=1682599573~exp=1682600173~hmac=673ec999ab978b170452864313a7de0f1af911e254185bdbc4969b9f1277bde0\",\n  address: \"dummy address, dummy city\",\n  description: \"Second meetup here.\"\n}];\n\nvar HomePage = function HomePage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      loadedMeetups = _useState[0],\n      setLoadedMeetups = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setLoadedMeetups(DUMMY_MEETUPS);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: loadedMeetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 10\n  }, _this);\n}; // getStaticProps will only work in pages.\n// this is a special key function that nextJS will look/execute before rendering a page\n// it will provide props that is needed for this page.\n// this function can be set as async as well.\n// it will always return an object in this format { props: {} }.\n\n\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n\n_c = HomePage;\n// this will be executed for every incoming view request\n// server to pre-render props for the page, so it will always be updated data\n// no revalidate will be needed for this.\n// export const getServerSideProps = async (context) => {\n//   const req = context.req;\n//   const res = context.res;\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// };\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkTWVldHVwcyIsInNldExvYWRlZE1lZXR1cHMiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLE9BQUssRUFDSCxxT0FKSjtBQUtFQyxTQUFPLEVBQUUsMkJBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGVBRlQ7QUFHRUMsT0FBSyxFQUNILHFPQUpKO0FBS0VDLFNBQU8sRUFBRSwyQkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVRvQixDQUF0Qjs7QUFtQkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLEVBQUQsQ0FEeEI7QUFBQSxNQUNuQkMsYUFEbUI7QUFBQSxNQUNKQyxnQkFESTs7QUFHMUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxvQkFBZ0IsQ0FBQ1YsYUFBRCxDQUFoQjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRVM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FQRCxDLENBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBYk1ILFE7O0tBQUFBLFE7QUF3Qk47QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gIHtcbiAgICBpZDogXCJtMVwiLFxuICAgIHRpdGxlOiBcIkZpcnN0IE1lZXR1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL2xha2Utd2l0aC1hdXR1bW4tZm9saWFnZS1tb3VudGFpbnMtd2l0aC1yZWZsZWN0aW9uLW5ldy1lbmdsYW5kLXN0b3dlXzY0OTQ0OC01NDE4LmpwZz93PTEzODAmdD1zdD0xNjgyNTk5NTczfmV4cD0xNjgyNjAwMTczfmhtYWM9NjczZWM5OTlhYjk3OGIxNzA0NTI4NjQzMTNhN2RlMGYxYWY5MTFlMjU0MTg1YmRiYzQ5NjliOWYxMjc3YmRlMFwiLFxuICAgIGFkZHJlc3M6IFwiZHVtbXkgYWRkcmVzcywgZHVtbXkgY2l0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpcnN0IG1lZXR1cCBoZXJlLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibTJcIixcbiAgICB0aXRsZTogXCJTZWNvbmQgTWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vbGFrZS13aXRoLWF1dHVtbi1mb2xpYWdlLW1vdW50YWlucy13aXRoLXJlZmxlY3Rpb24tbmV3LWVuZ2xhbmQtc3Rvd2VfNjQ5NDQ4LTU0MTguanBnP3c9MTM4MCZ0PXN0PTE2ODI1OTk1NzN+ZXhwPTE2ODI2MDAxNzN+aG1hYz02NzNlYzk5OWFiOTc4YjE3MDQ1Mjg2NDMxM2E3ZGUwZjFhZjkxMWUyNTQxODViZGJjNDk2OWI5ZjEyNzdiZGUwXCIsXG4gICAgYWRkcmVzczogXCJkdW1teSBhZGRyZXNzLCBkdW1teSBjaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2Vjb25kIG1lZXR1cCBoZXJlLlwiLFxuICB9LFxuXTtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz47XG59O1xuXG4vLyBnZXRTdGF0aWNQcm9wcyB3aWxsIG9ubHkgd29yayBpbiBwYWdlcy5cbi8vIHRoaXMgaXMgYSBzcGVjaWFsIGtleSBmdW5jdGlvbiB0aGF0IG5leHRKUyB3aWxsIGxvb2svZXhlY3V0ZSBiZWZvcmUgcmVuZGVyaW5nIGEgcGFnZVxuLy8gaXQgd2lsbCBwcm92aWRlIHByb3BzIHRoYXQgaXMgbmVlZGVkIGZvciB0aGlzIHBhZ2UuXG4vLyB0aGlzIGZ1bmN0aW9uIGNhbiBiZSBzZXQgYXMgYXN5bmMgYXMgd2VsbC5cbi8vIGl0IHdpbGwgYWx3YXlzIHJldHVybiBhbiBvYmplY3QgaW4gdGhpcyBmb3JtYXQgeyBwcm9wczoge30gfS5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSwgLy8gdGhpcyBhbGxvd3MgdGhlIHBhZ2UgdG8gcmVnZW5lcmF0ZSBldmVyeSAxMCBzZWNvbmRzIG9uIHNlcnZlciB0byBmZXRjaCB0aGUgbGF0ZXN0IGRhdGEuXG4gIH07XG59O1xuXG4vLyB0aGlzIHdpbGwgYmUgZXhlY3V0ZWQgZm9yIGV2ZXJ5IGluY29taW5nIHZpZXcgcmVxdWVzdFxuLy8gc2VydmVyIHRvIHByZS1yZW5kZXIgcHJvcHMgZm9yIHRoZSBwYWdlLCBzbyBpdCB3aWxsIGFsd2F5cyBiZSB1cGRhdGVkIGRhdGFcbi8vIG5vIHJldmFsaWRhdGUgd2lsbCBiZSBuZWVkZWQgZm9yIHRoaXMuXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})