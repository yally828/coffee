/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcoffee"] = self["webpackChunkcoffee"] || []).push([["src_views_Ttext_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Ttext.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Ttext.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Ttext',\n  data: function data() {\n    return {\n      active: 0,\n      tabSlideData: [\"咖啡\", \"最新推荐\", \"热卖饮品\", \"店长推荐\", \"很好喝\", \"很香\", \"很棒\", \"good\"],\n      // 获取商品数据\n      menuProductData: []\n    };\n  },\n  created: function created() {\n    // 获取商品数据\n    this.getMenuData(this.slideKey);\n  },\n  methods: {\n    // 获取商品数据\n    getMenuData: function getMenuData(index) {\n      var _this = this;\n\n      this.axios({\n        method: \"GET\",\n        url: '/typeProducts',\n        params: {\n          appkey: this.appkey,\n          key: \"type\",\n          value: \"coffee\"\n        }\n      }).then(function (result) {\n        // \n        if (result.data.code == 500) {\n          var data = result.data.result;\n\n          for (var i = 0; i < 2; i++) {\n            _this.menuProductData.push(data);\n          }\n\n          _this.menuProductData = data;\n          _this.menuProductData;\n        } else {}\n      }).catch(function (err) {});\n    }\n  }\n});\n\n//# sourceURL=webpack://coffee/./src/views/Ttext.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/views/Ttext.vue":
/*!*****************************!*\
  !*** ./src/views/Ttext.vue ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ttext_vue_vue_type_template_id_46a5f957_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ttext.vue?vue&type=template&id=46a5f957&scoped=true& */ \"./src/views/Ttext.vue?vue&type=template&id=46a5f957&scoped=true&\");\n/* harmony import */ var _Ttext_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ttext.vue?vue&type=script&lang=js& */ \"./src/views/Ttext.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _Ttext_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _Ttext_vue_vue_type_template_id_46a5f957_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Ttext_vue_vue_type_template_id_46a5f957_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"46a5f957\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Ttext.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://coffee/./src/views/Ttext.vue?");

/***/ }),

/***/ "./src/views/Ttext.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/views/Ttext.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ttext_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ttext.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Ttext.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ttext_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://coffee/./src/views/Ttext.vue?");

/***/ }),

/***/ "./src/views/Ttext.vue?vue&type=template&id=46a5f957&scoped=true&":
/*!************************************************************************!*\
  !*** ./src/views/Ttext.vue?vue&type=template&id=46a5f957&scoped=true& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ttext_vue_vue_type_template_id_46a5f957_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ttext_vue_vue_type_template_id_46a5f957_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ttext_vue_vue_type_template_id_46a5f957_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ttext.vue?vue&type=template&id=46a5f957&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Ttext.vue?vue&type=template&id=46a5f957&scoped=true&\");\n\n\n//# sourceURL=webpack://coffee/./src/views/Ttext.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Ttext.vue?vue&type=template&id=46a5f957&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Ttext.vue?vue&type=template&id=46a5f957&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"text\" },\n    [\n      _c(\n        \"van-tabs\",\n        {\n          attrs: { scrollspy: \"\", sticky: \"\" },\n          model: {\n            value: _vm.active,\n            callback: function($$v) {\n              _vm.active = $$v\n            },\n            expression: \"active\"\n          }\n        },\n        _vm._l(_vm.tabSlideData, function(item, index) {\n          return _c(\"van-tab\", { key: index, attrs: { title: item } }, [\n            _vm._v(\"\\n            \" + _vm._s(index) + \"\\n        \")\n          ])\n        }),\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://coffee/./src/views/Ttext.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);