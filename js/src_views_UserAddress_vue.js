/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcoffee"] = self["webpackChunkcoffee"] || []).push([["src_views_UserAddress_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'BgBox'\n});\n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BgBox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BgBox.vue */ \"./src/components/BgBox.vue\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namr: 'UserAddress',\n  data: function data() {\n    return {\n      // 默认选择\n      chosenAddressId: '1',\n      list: []\n    };\n  },\n  components: {\n    BgBox: _components_BgBox_vue__WEBPACK_IMPORTED_MODULE_2__.default\n  },\n  created: function created() {\n    // 获取地址列表数据\n    this.getAddressData();\n  },\n  methods: {\n    back: function back() {\n      this.$router.go(-1);\n    },\n    // 获取地址列表数据\n    getAddressData: function getAddressData() {\n      var _this = this;\n\n      var tokenString = localStorage.getItem(\"__tk\");\n\n      if (!tokenString) {\n        //跳回登录页面\n        this.$toast('请先登录');\n        return this.$router.push({\n          name: 'Login'\n        });\n      }\n\n      this.$toast.loading({\n        message: \"加载中...\",\n        forbidClick: true,\n        duration: 0\n      });\n      this.axios({\n        method: 'GET',\n        url: '/findAddress',\n        params: {\n          appkey: this.appkey,\n          tokenString: tokenString\n        }\n      }).then(function (result) {\n        _this.$toast.clear();\n\n        if (result.data.code == 700) {\n          // token检验无效，则跳转到登陆页面\n          _this.$router.push({\n            name: 'Login'\n          });\n        } else if (result.data.code == 20000) {\n          result.data.result.map(function (v) {\n            v.isDefault = Boolean(v.isDefault);\n\n            if (v.isDefault) {\n              _this.chosenAddressId = v.aid;\n            }\n\n            v.id = v.aid;\n            v.address = \"\".concat(v.province).concat(v.city).concat(v.county).concat(v.addressDetail);\n          });\n          _this.list = result.data.result;\n        }\n      }).catch(function (err) {\n        _this.$toast.clear();\n      });\n    },\n    add: function add() {\n      this.$router.push({\n        name: 'NewAddress'\n      });\n    },\n    edit: function edit(item) {\n      this.$router.push({\n        name: 'NewAddress',\n        query: {\n          aid: item.aid\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").map;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');\n\n// `Array.prototype.map` method\n// https://tc39.es/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://coffee/./node_modules/core-js/modules/es.array.map.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".bg-box .bg[data-v-37cc9f74] {\\n  height: 100px;\\n  background-color: #333;\\n}\\n.bg-box .bg-content[data-v-37cc9f74] {\\n  width: 100%;\\n  margin-top: -30px;\\n  padding: 10px;\\n  box-sizing: border-box;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* 主色 */\\n.user-address section[data-v-2ebc98df] {\\n  width: 100%;\\n  margin-top: -30px;\\n}\\n.user-address[data-v-2ebc98df] .van-button--danger {\\n  background-color: #333;\\n  border: 1px solid #333;\\n}\\n.user-address[data-v-2ebc98df] .van-nav-bar__text {\\n  color: #333;\\n}\\n.user-address[data-v-2ebc98df] .van-nav-bar .van-icon {\\n  color: #333;\\n}\\n.user-address[data-v-2ebc98df] .van-address-item .van-radio__icon--checked .van-icon {\\n  background-color: #D43737;\\n  border: 1px solid #D43737;\\n}\\n.user-address[data-v-2ebc98df] .van-tag--danger {\\n  background-color: #D43737;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_style_index_0_id_37cc9f74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true&\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_style_index_0_id_37cc9f74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_style_index_0_id_37cc9f74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_style_index_0_id_2ebc98df_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true&\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_style_index_0_id_2ebc98df_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_style_index_0_id_2ebc98df_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/BgBox.vue":
/*!**********************************!*\
  !*** ./src/components/BgBox.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BgBox_vue_vue_type_template_id_37cc9f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BgBox.vue?vue&type=template&id=37cc9f74&scoped=true& */ \"./src/components/BgBox.vue?vue&type=template&id=37cc9f74&scoped=true&\");\n/* harmony import */ var _BgBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BgBox.vue?vue&type=script&lang=js& */ \"./src/components/BgBox.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _BgBox_vue_vue_type_style_index_0_id_37cc9f74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true& */ \"./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _BgBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _BgBox_vue_vue_type_template_id_37cc9f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _BgBox_vue_vue_type_template_id_37cc9f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"37cc9f74\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BgBox.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?");

/***/ }),

/***/ "./src/views/UserAddress.vue":
/*!***********************************!*\
  !*** ./src/views/UserAddress.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserAddress_vue_vue_type_template_id_2ebc98df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true& */ \"./src/views/UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true&\");\n/* harmony import */ var _UserAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAddress.vue?vue&type=script&lang=js& */ \"./src/views/UserAddress.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _UserAddress_vue_vue_type_style_index_0_id_2ebc98df_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true& */ \"./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _UserAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _UserAddress_vue_vue_type_template_id_2ebc98df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _UserAddress_vue_vue_type_template_id_2ebc98df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"2ebc98df\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/UserAddress.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?");

/***/ }),

/***/ "./src/components/BgBox.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/BgBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BgBox.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?");

/***/ }),

/***/ "./src/views/UserAddress.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/views/UserAddress.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAddress.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?");

/***/ }),

/***/ "./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_style_index_0_id_37cc9f74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=style&index=0&id=37cc9f74&lang=less&scoped=true&\");\n\n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?");

/***/ }),

/***/ "./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_style_index_0_id_2ebc98df_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=style&index=0&id=2ebc98df&lang=less&scoped=true&\");\n\n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?");

/***/ }),

/***/ "./src/components/BgBox.vue?vue&type=template&id=37cc9f74&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/components/BgBox.vue?vue&type=template&id=37cc9f74&scoped=true& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_template_id_37cc9f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_template_id_37cc9f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BgBox_vue_vue_type_template_id_37cc9f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BgBox.vue?vue&type=template&id=37cc9f74&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=template&id=37cc9f74&scoped=true&\");\n\n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?");

/***/ }),

/***/ "./src/views/UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/views/UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_template_id_2ebc98df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_template_id_2ebc98df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAddress_vue_vue_type_template_id_2ebc98df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true&\");\n\n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=template&id=37cc9f74&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BgBox.vue?vue&type=template&id=37cc9f74&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"bg-box\" }, [\n    _c(\"div\", { staticClass: \"bg\" }),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"bg-content\" }, [_vm._t(\"default\")], 2)\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://coffee/./src/components/BgBox.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/UserAddress.vue?vue&type=template&id=2ebc98df&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"user-address\" },\n    [\n      _c(\"van-nav-bar\", {\n        attrs: { title: \"地址管理\", \"left-text\": \"返回\", \"left-arrow\": \"\" },\n        on: { \"click-left\": _vm.back }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"BgBox\",\n        [\n          _c(\"van-address-list\", {\n            attrs: {\n              list: _vm.list,\n              \"default-tag-text\": \"默认\",\n              switchable: false\n            },\n            on: { add: _vm.add, edit: _vm.edit }\n          })\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://coffee/./src/views/UserAddress.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);