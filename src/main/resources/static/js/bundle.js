"use strict";function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(t,e,r){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}jQuery(function(){window.vm={},vm.items=ko.observableArray(),vm.checkItem=function(t){console.log("id:",t)};function e(t,e,r,n,o){var a=this;a.id=ko.observable(t),a.name=ko.observable(e),a.qty=ko.observable(r),a.createdAt=ko.observable(n),a.done=ko.observable(o)}var t=[{id:"1",name:"Sorvete vegano",qty:3,createdAt:new Date,done:!1},{id:"2",name:"Paçoquita",qty:7,createdAt:new Date,done:!1},{id:"3",name:"Ades",qty:1,createdAt:new Date,done:new Date},{id:"4",name:"Arroz integral",qty:1,createdAt:new Date,done:!1}];vm.items(t.map(function(t){return _construct(e,_toConsumableArray(Object.values(t)))})),ko.applyBindings(vm)});