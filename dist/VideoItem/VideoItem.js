"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.VideoItem=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_reactCssModules=_interopRequireDefault(require("react-css-modules")),_VideoItem=_interopRequireDefault(require("../style/VideoItem.styl"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var VideoItem=function(a){function b(){var a;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),_defineProperty(_assertThisInitialized(a),"linkToVideo",function(){var b=a.props.uri;console.log(a.props),a.props.history.push(b)}),a}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"render",value:function render(){var a=this,b=this.props,c=b.oid,d=b.videoid,e=b.title,f=b.channeltitle,g=b.nclick,h=b.since,i=b.mode,j=b.linkToVideo,k=b.linkToChannel;return!e&&(e=""),"history"!=i&&"small"!=i&&(i="default"),_react["default"].createElement("div",{className:"videoitem"},_react["default"].createElement("div",{className:"".concat("small"==i?"edu-ytimg":"history"==i?"":"edu-ytbigimg"," pointer relative")},"small"!=i&&_react["default"].createElement("div",{className:"edu-cover",onClick:function onClick(){return j(c)}}),_react["default"].createElement("div",{className:"history"==i?"edu-historyvideo":""},_react["default"].createElement("div",{onClick:function onClick(){return j(c)},className:"".concat("small"==i?"edu-ytimg pointer":"relative")},_react["default"].createElement("img",{width:"small"==i?"210px":"300px",className:"".concat("history"==i?"edu-historyimg":""),src:"https://i.ytimg.com/vi/".concat(d,"/mqdefault.jpg")}),"history"!=i&&_react["default"].createElement("span",{className:"twoline yttitle",title:e},e),"small"==i&&_react["default"].createElement("span",{className:"oneline ytviewct yttitle"},"\u89C0\u770B\u6B21\u6578\uFF1A",g)),"small"!=i&&_react["default"].createElement("div",null,"history"==i&&_react["default"].createElement("div",null,_react["default"].createElement("span",{className:"twoline edu-historytitle",title:e},e)),_react["default"].createElement("div",{className:"channellink"},_react["default"].createElement("div",{onClick:function onClick(){return k(c)},className:"relative"},_react["default"].createElement("span",{className:"oneline ytviewct yttitle",style:{fontSize:"14px"},title:f},f)),_react["default"].createElement("div",{onClick:function onClick(){return a.linkToVideo()}})),"history"==i?_react["default"].createElement("div",null,_react["default"].createElement("span",null,"\u4E0A\u6B21\u89C0\u770B\u6642\u9593\uFF1A",h.substr(2,14).replaceAll("-","/").replaceAll("T","-"))):_react["default"].createElement("div",{className:"inline-block ytviewbottom"},_react["default"].createElement("span",{className:"oneline ytviewct",style:{fontSize:"14px"}},"\u89C0\u770B\u6B21\u6578\uFF1A",g))))))}}]),b}(_react.Component);exports.VideoItem=VideoItem,_defineProperty(VideoItem,"propTypes",{oid:_propTypes["default"].number,videoid:_propTypes["default"].string,title:_propTypes["default"].string,channeltitle:_propTypes["default"].string,mode:_propTypes["default"].string,nclick:_propTypes["default"].number,since:_propTypes["default"].string,linkToVideo:_propTypes["default"].func,linkToChannel:_propTypes["default"].func}),_defineProperty(VideoItem,"defaultProps",{oid:4282,videoid:"m3jtcV9yMDk",title:"\u3010Python \u8207 C \u7684 LeetCode \u516D\u6708\u6311\u6230\u3011\u7B2C\u516B\u5929 (Power of Two)",channeltitle:"Feis Studio",mode:"default",nclick:0,since:"2021-06-08T12:01:26.850Z",linkToVideo:function linkToVideo(){console.log("linkToVideo")},linkToChannel:function linkToChannel(){console.log("linkToChannel")}});var _default=(0,_reactCssModules["default"])(VideoItem,_VideoItem["default"]);exports["default"]=_default;