"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/CardsSlider/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/CardsSlider/styles.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Flex\": function() { return /* binding */ Flex; },\n/* harmony export */   \"Arrow\": function() { return /* binding */ Arrow; },\n/* harmony export */   \"Box\": function() { return /* binding */ Box; },\n/* harmony export */   \"Circle\": function() { return /* binding */ Circle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  height: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  top: 50%;\\n  left: \",\n        \";\\n  transform: translateY(-50%);\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 7rem;\\n\\n  width: 1200px;\\n  height: 1200px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 10rem;\\n  height: 10rem;\\n\\n  transform: \",\n        \";\\n  background-color: \",\n        \";\\n\\n  border-radius: 50%;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Flex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject2(), function(param) {\n    var isLeft = param.isLeft;\n    return isLeft ? '0' : '95%';\n});\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar Circle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4(), function(param) {\n    var current = param.current;\n    return current ? 'scale(1.2)' : 'unset';\n}, function(param) {\n    var color = param.color;\n    return color;\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkc1NsaWRlci9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7OztRQUVGLENBR3BDOzs7Ozs7Ozs7UUFFK0IsQ0FRL0I7Ozs7Ozs7OztRQUV5RCxDQUdqRDtRQUF1QyxDQUUvQzs7Ozs7Ozs7O1FBRThCLENBUTlCOzs7Ozs7Ozs7UUFFdUUsQ0FJMUQ7UUFBb0QsQ0FDN0M7UUFBdUIsQ0FHM0M7Ozs7Ozs7QUF4Q08sR0FBSyxDQUFDQyxTQUFTLEdBQUdELDZEQUFVO0FBSzVCLEdBQUssQ0FBQ0csSUFBSSxHQUFHSCw2REFBVTtBQVV2QixHQUFLLENBQUNJLEtBQUssR0FBR0osZ0VBQWEscUJBR3hCLFFBQVE7UUFBTE0sTUFBTSxTQUFOQSxNQUFNO0lBQU9BLE1BQU0sQ0FBTkEsTUFBTSxHQUFHLENBQUcsS0FBRyxDQUFLOztBQUl2QyxHQUFLLENBQUNDLEdBQUcsR0FBR1AsNkRBQVU7QUFVdEIsR0FBSyxDQUFDUSxNQUFNLEdBQUdSLDZEQUFVLHFCQUlqQixRQUFRO1FBQUxTLE9BQU8sU0FBUEEsT0FBTztJQUFPQSxNQUFNLENBQU5BLE9BQU8sR0FBRyxDQUFZLGNBQUcsQ0FBTztHQUMxQyxRQUFRO1FBQUxDLEtBQUssU0FBTEEsS0FBSztJQUFPQSxNQUFNLENBQU5BLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZHNTbGlkZXIvc3R5bGVzLnRzPzg4ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgRmxleCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZC5idXR0b248eyBpc0xlZnQ/OiBib29sZWFuIH0+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAkeyh7IGlzTGVmdCB9KSA9PiBpc0xlZnQgPyAnMCcgOiAnOTUlJ307XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA3cmVtO1xuXG4gIHdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTIwMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENpcmNsZSA9IHN0eWxlZC5kaXY8eyBjdXJyZW50PzogYm9vbGVhbjsgY29sb3I6IHN0cmluZyB9PmBcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuXG4gIHRyYW5zZm9ybTogJHsoeyBjdXJyZW50IH0pID0+IGN1cnJlbnQgPyAnc2NhbGUoMS4yKScgOiAndW5zZXQnfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvcn07XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJGbGV4IiwiQXJyb3ciLCJidXR0b24iLCJpc0xlZnQiLCJCb3giLCJDaXJjbGUiLCJjdXJyZW50IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CardsSlider/styles.ts\n");

/***/ })

});