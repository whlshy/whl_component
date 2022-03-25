"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.ThumbUpDown=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_reactCssModules=_interopRequireDefault(require("react-css-modules")),_ThumbUpDown=_interopRequireDefault(require("../style/ThumbUpDown.styl"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var ThumbUpDown=function(a){function b(){return _classCallCheck(this,b),c.apply(this,arguments)}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"render",value:function render(){var a=this.props,b=a.userlike,c=a.likect,d=a.unlikect,e=a.liketitle,f=a.unliketitle,g=a.clickLike,h=a.clickUnLike;return _react["default"].createElement("div",{className:"whl_thumbupdown"},_react["default"].createElement("div",{className:"like_unlike right16",title:e,onClick:g},1==b?_react["default"].createElement("span",{className:"material-icons"},"thumb_up"):_react["default"].createElement("span",{className:"material-icons-outlined"},"thumb_up"),c?c:0),_react["default"].createElement("div",{className:"like_unlike",title:f,onClick:h},0==b?_react["default"].createElement("span",{className:"material-icons"},"thumb_down"):_react["default"].createElement("span",{className:"material-icons-outlined"},"thumb_down"),d?d:0))}}]),b}(_react.Component);exports.ThumbUpDown=ThumbUpDown,_defineProperty(ThumbUpDown,"propTypes",{userlike:_propTypes["default"].number,likect:_propTypes["default"].number,unlikect:_propTypes["default"].number,liketitle:_propTypes["default"].string,unliketitle:_propTypes["default"].string,clickLike:_propTypes["default"].func,clickUnLike:_propTypes["default"].func}),_defineProperty(ThumbUpDown,"defaultProps",{userlike:2,likect:0,unlikect:0,liketitle:"\u89BA\u5F97\u5BE6\u7528",unliketitle:"\u89BA\u5F97\u4E0D\u5BE6\u7528",clickLike:function clickLike(){},clickUnLike:function clickUnLike(){}});var _default=(0,_reactCssModules["default"])(ThumbUpDown,_ThumbUpDown["default"]);exports["default"]=_default;