"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function TextArea(a){var b=(0,_react.useRef)(null),c=a.value,d=a.onChange,e=a.style,f=a.className,g=a.autoFocus,h=a.placeholder,i=(0,_react.useState)(""),j=_slicedToArray(i,2),k=j[0],l=j[1],m=function(a){if(a){var b=a.value.split("\n").length;a.style.height=1*b+"px";var c=a.clientHeight;if(c=Math.max(a.scrollHeight,c),c=Math.max(a.scrollHeight,c),c>a.clientHeight){var d=0;"border-box"==window.getComputedStyle(a).getPropertyValue("box-sizing")&&(d=parseInt(window.getComputedStyle(a).getPropertyValue("padding-top").replace("px",""))+parseInt(window.getComputedStyle(a).getPropertyValue("padding-bottom").replace("px",""))),a.style.height=c+d/2+"px"}}};return(0,_react.useEffect)(function(){m(b.current),c!=k&&d(k)},[k]),(0,_react.useEffect)(function(){l(c)},[c]),_react["default"].createElement("textarea",{ref:b,onChange:function(a){return l(a.target.value)},defaultValue:k,style:e,className:f,autoFocus:g,placeholder:h})}TextArea.propTypes={value:_propTypes["default"].string,onChange:_propTypes["default"].func,style:_propTypes["default"].object,className:_propTypes["default"].string,placeholder:_propTypes["default"].string},TextArea.defaultProps={value:"",onChange:function onChange(a){console.log(a)},style:{},className:"whl_textarea",placeholder:"placeholder"};var _default=TextArea;exports["default"]=_default;