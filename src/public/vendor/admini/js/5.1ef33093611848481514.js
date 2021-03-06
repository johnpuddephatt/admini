(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/views/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/views/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Form */ "./src/resources/js/core/Form.js");
/* harmony import */ var _components_AdminiFieldsets_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AdminiFieldsets.vue */ "./src/resources/js/components/AdminiFieldsets.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //
// import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css';

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AdminiFieldsets: _components_AdminiFieldsets_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      form: ''
    };
  },
  computed: {
    tabNames: function tabNames() {
      return _toConsumableArray(new Set(this.form.fields.map(function (field) {
        return field.tab;
      })));
    } // fieldsets: function() {
    //   return [...new Set(this.form.fields.map(field => field.tab))]
    // }

  },
  created: function created() {
    var _this = this;

    axios.get('/' + this.$route.params.model + '/' + this.$route.params.id).then(function (_ref) {
      var data = _ref.data;

      _this.populateData(data.fields, data.entry);
    });
  },
  methods: {
    onSubmit: function onSubmit() {
      this.form.put('/' + this.$route.params.model + '/' + this.$route.params.id);
    },
    populateData: function populateData(fields, entry) {
      this.form = new _core_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, entry); // hljs.initHighlightingOnLoad();
    },
    getFieldsByTab: function getFieldsByTab(tabName) {
      return this.form.fields.filter(function (field) {
        return field.tab === tabName;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/views/Edit.vue?vue&type=template&id=787b1dfe&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/resources/js/views/Edit.vue?vue&type=template&id=787b1dfe& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h1", { staticClass: "page-title" }, [_vm._v("Edit")]),
    _vm._v(" "),
    _vm.form.fields
      ? _c(
          "form",
          {
            attrs: {
              method: "POST",
              action: this.$route.params.model + "/" + this.$route.params.id
            },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "b-tabs",
              { attrs: { animated: false } },
              _vm._l(_vm.tabNames, function(tabName) {
                return _c(
                  "b-tab-item",
                  {
                    key: tabName || "other",
                    attrs: { label: tabName || "Other" }
                  },
                  [
                    _c("admini-fieldsets", {
                      attrs: {
                        fields: _vm.getFieldsByTab(tabName),
                        data: _vm.form.data,
                        errors: _vm.form.errors.errors
                      }
                    })
                  ],
                  1
                )
              }),
              1
            ),
            _vm._v(" "),
            _c("b-button", {
              attrs: { tag: "input", value: "Reset" },
              on: {
                click: function($event) {
                  return _vm.form.reset()
                }
              }
            }),
            _vm._v(" "),
            _c("b-button", {
              staticClass: "is-primary",
              attrs: { tag: "input", "native-type": "submit", value: "Save" }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/resources/js/views/Edit.vue":
/*!*****************************************!*\
  !*** ./src/resources/js/views/Edit.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_787b1dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=787b1dfe& */ "./src/resources/js/views/Edit.vue?vue&type=template&id=787b1dfe&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./src/resources/js/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_787b1dfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_787b1dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/resources/js/views/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/resources/js/views/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/resources/js/views/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/resources/js/views/Edit.vue?vue&type=template&id=787b1dfe&":
/*!************************************************************************!*\
  !*** ./src/resources/js/views/Edit.vue?vue&type=template&id=787b1dfe& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_787b1dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=787b1dfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/resources/js/views/Edit.vue?vue&type=template&id=787b1dfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_787b1dfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_787b1dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);