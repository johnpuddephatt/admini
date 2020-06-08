(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{26:function(t,e,r){"use strict";r.r(e);var n=r(7);function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s={components:{AdminiFieldsets:r(6).a},data:function(){return{form:""}},computed:{tabNames:function(){return a(new Set(this.form.fields.map((function(t){return t.tab}))))}},created:function(){var t=this;axios.get("/"+this.$route.params.model+"/"+this.$route.params.id).then((function(e){var r=e.data;t.populateData(r.fields,r.entry)}))},methods:{onSubmit:function(){this.form.put("/"+this.$route.params.model+"/"+this.$route.params.id)},populateData:function(t,e){this.form=new n.a(t,e)},getFieldsByTab:function(t){return this.form.fields.filter((function(e){return e.tab===t}))}}},o=r(0),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-8-tablet is-7-desktop is-6-widescreen"},[r("h1",{staticClass:"page-title"},[t._v("Edit")]),t._v(" "),t.form.fields?r("form",{attrs:{method:"POST",action:this.$route.params.model+"/"+this.$route.params.id},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},keydown:function(e){return t.form.errors.clear(e.target.name)}}},[t.tabNames.length>1?r("b-tabs",{attrs:{animated:!1}},t._l(t.tabNames,(function(e){return r("b-tab-item",{key:e||"other",attrs:{label:e||"Other"}},[r("admini-fieldsets",{attrs:{fields:t.getFieldsByTab(e),data:t.form.data,errors:t.form.errors.errors}})],1)})),1):r("admini-fieldsets",{attrs:{fields:t.form.fields,data:t.form.data,errors:t.form.errors.errors}}),t._v(" "),r("b-button",{attrs:{tag:"input",value:"Reset"},on:{click:function(e){return t.form.reset()}}}),t._v(" "),r("b-button",{staticClass:"is-primary",attrs:{tag:"input","native-type":"submit",value:"Save"}})],1):t._e()])])])}),[],!1,null,null,null);e.default=c.exports},5:function(t,e,r){"use strict";var n={props:["filters","activeFilters","isSearching"],data:function(){return{searchString:""}},computed:{},methods:{}},a=r(0),i={components:{AdminiTableFilters:Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar__filter",attrs:{role:"navigation"}},[r("div",{staticClass:"navbar-menu"},[r("div",{staticClass:"navbar-start"},[t._l(t.filters,(function(e){return r("div",{staticClass:"navbar-filter"},[["b-checkbox-button","b-radio-button"].includes(e.control)?r("b-field",t._l(e.options,(function(n){return r(e.control,{key:n.value,tag:"component",attrs:{"native-value":n.value||!0,type:n.type},model:{value:t.activeFilters[e.name],callback:function(r){t.$set(t.activeFilters,e.name,r)},expression:"activeFilters[filter.name]"}},[n.icon?r("b-icon",{attrs:{icon:n.icon}}):t._e(),t._v(" "),r("span",[t._v(t._s(n.label))])],1)})),1):t._e(),t._v(" "),"b-dropdown"===e.control?r("b-dropdown",{attrs:{"aria-role":"list"},model:{value:t.activeFilters[e.name],callback:function(r){t.$set(t.activeFilters,e.name,r)},expression:"activeFilters[filter.name]"}},[r("button",{staticClass:"button",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[r("b-icon",{attrs:{icon:"earth"}}),t._v(" "),r("span",[t._v(t._s(t.activeFilters[e.name].length?e.options.filter((function(r){return r.value===t.activeFilters[e.name]}))[0].label:e.label))]),t._v(" "),r("b-icon",{attrs:{icon:"menu-down"}})],1),t._v(" "),t._l(e.options,(function(e){return r("b-dropdown-item",{key:e.value,attrs:{value:e.value,"aria-role":"listitem"}},[r("div",{staticClass:"media"},[e.icon?r("b-icon",{staticClass:"media-left",attrs:{icon:e.icon}}):t._e(),t._v(" "),r("div",{staticClass:"media-content"},[r("h3",[t._v(t._s(e.label))]),t._v(" "),r("small",[t._v(t._s(e.description))])])],1)])}))],2):t._e()],1)})),t._v(" "),r("b-button",{attrs:{type:"is-text"},on:{click:function(e){return t.$emit("reset-filters")}}},[t._v("Clear filters")])],2),t._v(" "),r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item"},[r("div",{staticClass:"control search-control"},[r("b-input",{attrs:{width:"40",rounded:"",placeholder:"Search",type:"text",loading:t.isSearching},on:{input:function(e){return t.$emit("update-search",e)}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)])])])])}),[],!1,null,null,null).exports},props:["model"],data:function(){return{resource:[],page:1,checkedRows:[],sortField:"id",sortOrder:"asc",searchString:"",activeFilters:{},dataLoading:!1,filtersLoaded:!1,isSearching:!1}},computed:{queryString:function(){return["?page=".concat(this.page),"order_by=".concat(this.sortField),"order=".concat(this.sortOrder),"s=".concat(this.searchString),this.filterString].join("&")},filterString:function(){var t=this,e=[];return Object.keys(this.activeFilters).map((function(r){""!=t.activeFilters[r]&&e.push("filter[".concat(r,"]=").concat(t.activeFilters[r]))})),e.join("&")}},watch:{activeFilters:{handler:function(){this.fetchData()},deep:!0},searchString:function(){this.doSearch()},model:function(){this.fetchData()}},created:function(){this.fetchData()},methods:{format:function(t,e){return e&&Vue.filter(e)?Vue.filter(e)(t):t},deleteItem:function(t){var e=this;this.$buefy.dialog.confirm({title:"Permanently deleting entry",message:"Are you sure you want to <b>delete</b> this entry?",confirmText:"Delete",type:"is-warning",hasIcon:!0,onConfirm:function(){return axios.delete("/"+e.model+"/"+t+"/delete").then((function(t){var r=t.data;return e.postDelete(r)}))}})},forceDeleteItem:function(t){var e=this;this.$buefy.dialog.confirm({title:"Deleting entry",message:"Are you sure you want to <b>permanently delete</b> this entry?",confirmText:"Permanently delete",type:"is-danger",hasIcon:!0,onConfirm:function(){return axios.delete("/"+e.model+"/"+t+"/forcedelete").then((function(t){var r=t.data;return e.postDelete(r)}))}})},postDelete:function(t){this.$buefy.snackbar.open({message:t.message,position:"is-bottom-right",type:t.type}),this.fetchData()},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.model;this.dataLoading=!0,axios.get("/".concat(e,"/index/").concat(this.queryString)).then((function(e){var r=e.data;return t.populateData(r)}))},populateData:function(t){this.resource=t,this.dataLoading=!1,this.isSearching=!1,!this.filtersLoaded&&this.resource.filters&&this.resetFilters()},updateSearch:function(t){this.searchString=t},doSearch:r(10)((function(){this.isSearching=!0,this.fetchData()}),500),resetFilters:function(){var t=this;this.resource.filters.forEach((function(e){return t.$set(t.activeFilters,e.name,e.options.length>1?[]:"")})),this.filtersLoaded=!0},onPageChange:function(t){this.page=t,this.fetchData()},onSort:function(t,e){this.sortField=t,this.sortOrder=e,this.fetchData()}}},s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.resource.filters?r("admini-table-filters",{attrs:{filters:t.resource.filters,isSearching:t.isSearching,activeFilters:t.activeFilters},on:{"reset-filters":t.resetFilters,"update-search":t.updateSearch}}):t._e(),t._v(" "),t.resource.entries?r("b-table",{key:t.resource.title,attrs:{data:t.resource.entries.data,paginated:"","backend-pagination":"","per-page":t.resource.entries.per_page,total:t.resource.entries.total,"backend-sorting":"",loading:t.dataLoading,"checked-rows":t.checkedRows,checkable:""},on:{"page-change":t.onPageChange,sort:t.onSort,"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(t.resource.columns,(function(n){return r("b-table-column",{attrs:{label:n.label,field:n.name,sortable:n.sortable,numeric:n.numeric}},[r("span",{domProps:{innerHTML:t._s(t.format(e.row[n.name],n.filter))}})])})),t._v(" "),r("b-table-column",{key:"deleted"},[e.row.deleted_at?r("b-tag",{attrs:{type:"is-danger"}},[t._v("Deleted")]):t._e()],1),t._v(" "),r("b-table-column",{key:"actions",attrs:{label:"Actions",field:"actions"}},[r("b-field",[r("p",{staticClass:"control"},[r("router-link",{staticClass:"button is-primary",attrs:{to:"/"+t.$route.params.model+"/"+e.row.id}},[t._v("\n               Edit\n            ")])],1),t._v(" "),r("p",{staticClass:"control"},[r("b-dropdown",{attrs:{position:"is-bottom-left"}},[r("button",{staticClass:"button is-primary",attrs:{slot:"trigger"},slot:"trigger"},[r("b-icon",{attrs:{icon:"menu-down"}})],1),t._v(" "),e.row.deleted_at?r("b-dropdown-item",{on:{click:function(r){return t.forceDeleteItem(e.row.id)}}},[t._v("Permanently delete")]):r("b-dropdown-item",{on:{click:function(r){return t.deleteItem(e.row.id)}}},[t._v("Delete")])],1)],1)])],1)]}}],null,!1,2308814452)},[t._v(" "),t.dataLoading?t._e():r("template",{slot:"empty"},[r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-grey has-text-centered"},[r("p",[r("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),r("p",[t._v("No results found.")])])])]),t._v(" "),r("template",{slot:"bottom-left"},[t.checkedRows.length?r("p",[t._v(t._s(t.checkedRows.length)+" entries selected")]):t.resource.entries.total?r("p",[t._v("Showing "+t._s(t.resource.entries.from)+" to "+t._s(t.resource.entries.to)+" of "+t._s(t.resource.entries.total)+" entries")]):t._e()])],2):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},6:function(t,e,r){"use strict";var n=r(11),a=r(5),i={props:["fields","data","errors"],components:{VueEditor:n.a,AdminiTable:a.a},methods:{convertStringToDate:function(t){return new Date(t)}},data:function(){return{}}},s=r(0);function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l={props:["fields","data","errors"],components:{AdminiFields:Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.fields,(function(e){return r("b-field",t._b({key:e.name,attrs:{label:e.label,message:t.errors[e.name]||(e.fieldProps?e.fieldProps.message:"")||null,type:t.errors[e.name]?"is-danger":null}},"b-field",e.fieldProps,!1),["b-autocomplete"==e.control?r("div",[r("b-autocomplete",t._b({on:{select:function(r){return t.data[t.name=e.name]=r[e.inputProps.dataKey]}}},"b-autocomplete",e.inputProps,!1)),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.data[t.name=e.name],expression:"data[name=field.name]"}],attrs:{type:"hidden"},domProps:{value:t.data[t.name=e.name]},on:{input:function(r){r.target.composing||t.$set(t.data,t.name=e.name,r.target.value)}}})],1):["b-select"].includes(e.control)?r(e.control||"b-input",t._b({tag:"component",model:{value:t.data[t.name=e.name],callback:function(r){t.$set(t.data,t.name=e.name,r)},expression:"data[name=field.name]"}},"component",e.inputProps,!1),t._l(e.dataProps.data,(function(n){return r("option",{domProps:{value:e.dataProps.store_as?n[e.dataProps.store_as]:n}},[t._v(t._s(e.dataProps.display_as?n[e.dataProps.display_as]:n)+" ")])})),0):"b-table"==e.control?r("admini-table",{attrs:{model:"posts"}}):r(e.control||"b-input",t._b({tag:"component",model:{value:t.data[t.name=e.name],callback:function(r){t.$set(t.data,t.name=e.name,r)},expression:"data[name=field.name]"}},"component",e.inputProps,!1))],1)})),1)}),[],!1,null,null,null).exports},computed:{fieldsetNames:function(){return o(new Set(this.fields.map((function(t){return t.fieldset}))))}},methods:{getFieldsByFieldset:function(t){return this.fields.filter((function(e){return e.fieldset===t}))}}},u=Object(s.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.fieldsetNames,(function(e){return r("fieldset",{staticClass:"card"},[e?r("div",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[t._v("\n        "+t._s(e)+"\n      ")])]):t._e(),t._v(" "),r("div",{staticClass:"card-content"},[r("admini-fields",{attrs:{fields:t.getFieldsByFieldset(e),data:t.data,errors:t.errors}})],1)])})),0)}),[],!1,null,null,null);e.a=u.exports},7:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,r,a;return e=t,(r=[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}])&&n(e.prototype,r),a&&n(e,a),t}(),i=r(52),s=r(8);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(o(this,t),this.fields=e,r){var n=e.filter((function(t){return"b-datetimepicker"==t.control})).map((function(t){return t.name}));n.forEach((function(t){return r[t]=new Date(r[t])})),this.data=r,this.originalData=JSON.parse(JSON.stringify(r))}this.errors=new a}var e,r,n;return e=t,(r=[{key:"reset",value:function(){this.data=this.originalData,this.errors.clear(),i.a.open({message:"Changes have been reset",position:"is-bottom-right",type:"is-success"})}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var r=this;return new Promise((function(n,a){axios[t](e,r.data).then((function(t){r.onSuccess(t.data),r.response=t,n(t.data)})).catch((function(t){r.onFail(t.response.data)}))}))}},{key:"onSuccess",value:function(t){i.a.open({message:t.message.errorInfo?"<b>Database error:</b> ".concat(t.message.errorInfo[2]):t.message,position:"is-bottom-right",type:t.type}),t.entry_id&&s.a.push("./".concat(t.entry_id))}},{key:"onFail",value:function(t){var e;this.errors.message=t.message,this.errors.record(t.errors),i.a.open({message:null!==(e=t.message)&&void 0!==e?e:"An error has occured",position:"is-bottom-right",type:"is-danger"})}}])&&c(e.prototype,r),n&&c(e,n),t}();e.a=l}}]);