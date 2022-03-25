"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.AddComment=void 0;var _react=_interopRequireWildcard(require("react")),_reactRouterDom=require("react-router-dom"),_propTypes=_interopRequireDefault(require("prop-types")),_Avatar=_interopRequireDefault(require("../Avatar/Avatar")),_reactCssModules=_interopRequireDefault(require("react-css-modules")),_AddComment=_interopRequireDefault(require("../style/AddComment.styl")),_htmlReactParser=_interopRequireWildcard(require("html-react-parser"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var AddComment=function(a){function b(a){var d;return _classCallCheck(this,b),d=c.call(this,a),_defineProperty(_assertThisInitialized(d),"autoGrow",function(){var a=d.commentdes.current;if(a){var b=a.value.split("\n").length;a.style.height=1*b+"px";var c=0;c=Math.max(a.scrollHeight,c),c=Math.max(a.scrollHeight,c),c>a.clientHeight&&(a.style.height=c+"px")}}),_defineProperty(_assertThisInitialized(d),"setComment",function(a){d.setState({htmlcomment:a.target.innerHTML})}),_defineProperty(_assertThisInitialized(d),"setOpenButton",function(a){var b=d.state.htmlcomment;a||(b="",d.commentdes.current.innerHTML=""),d.setState({openbutton:a,htmlcomment:b})}),_defineProperty(_assertThisInitialized(d),"keyUp",function(a){"\n"===a.target.innerText&&(a.target.innerHTML="")}),_defineProperty(_assertThisInitialized(d),"placeCaretAtEnd",function(a){if(a=a.target,a.focus(),"undefined"!=typeof window.getSelection&&"undefined"!=typeof document.createRange){var b=document.createRange();b.selectNodeContents(a),b.collapse(!1);var c=window.getSelection();c.removeAllRanges(),c.addRange(b)}else if("undefined"!=typeof document.body.createTextRange){var d=document.body.createTextRange();d.moveToElementText(a),d.collapse(!1),d.select()}}),d.state={openbutton:!1,replymode:!1,editmode:!1,htmlcomment:""},d.commentdes=_react["default"].createRef(),d}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"componentDidMount",value:function componentDidMount(){var a=this.props.mode;"reply"==a&&(this.commentdes.current.focus(),this.setState({replymode:!0})),"edit"==a&&(this.commentdes.current.focus(),this.setState({comment:this.props.defaultcomment,editmode:!0}))}},{key:"render",value:function render(){var a=this,b=this.props,c=b.userinfo,d=b.getComment,f=b.onFocus,g=b.onBlur,h=b.clickCancel,i=b.checkdata,j=b.showavatar,k=b.defaultcomment,l=this.state,m=l.openbutton,n=l.replymode,o=l.editmode,p=l.htmlcomment,q=p.replace(/<a[^]+\/a>/ig,"").replace(/(<([^>]+)>)/ig,"").replace(/^\s+|\s+$/g,"").replace("&nbsp;","").length,r={replace:function replace(a){var b=a.attribs,c=a.children;return b?"tag_name"===b["class"]?_react["default"].createElement(_reactRouterDom.Link,{to:b.href,className:b["class"],suppressContentEditableWarning:"true",contentEditable:"false"},(0,_htmlReactParser.domToReact)(c,r)):void 0:void 0}};return _react["default"].createElement("div",{className:"whl_addcomment"},!!j&&_react["default"].createElement(_Avatar["default"],{alt:c.name,src:c.src}),_react["default"].createElement("div",{className:"comment_wrapper ".concat(j?"show_avatar":"")},_react["default"].createElement("div",{className:"addcomment",contentEditable:"true",suppressContentEditableWarning:!0,"aria-label":"\u4F7F\u7528\u4EE5\u4E0B\u8EAB\u5206\u516C\u5E03\u958B\u653E\u7559\u8A00\uFF1A".concat(c.name),onKeyUp:function onKeyUp(b){a.setComment(b),a.keyUp(b)},onInput:this.setComment,ref:this.commentdes,onClick:function onClick(){return a.setOpenButton(!0)},spellCheck:!1,onFocus:function onFocus(b){f(b),a.placeCaretAtEnd(b)},onBlur:g},"string"==typeof k?(0,_htmlReactParser["default"])(k,r):k),(m||n||o)&&_react["default"].createElement("div",{className:"addcommentbtn"},_react["default"].createElement("div",null),_react["default"].createElement("div",null,_react["default"].createElement("div",{className:"ctcancel pointer",onClick:function onClick(){a.setOpenButton(!1),h(!1,i)}},_react["default"].createElement("span",null,"\u53D6\u6D88")),_react["default"].createElement("div",{className:"ctsubmit ".concat(0<q?"yessubmit pointer":"nosubmit"),onClick:function onClick(){0<q&&(d(a.commentdes.current.innerHTML,i),a.setOpenButton(!1))}},_react["default"].createElement("span",null,o?"\u5132\u5B58":"\u7559\u8A00"))))))}}]),b}(_react.Component);exports.AddComment=AddComment,_defineProperty(AddComment,"propTypes",{defaultcomment:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].object]),userinfo:_propTypes["default"].object,checkdata:_propTypes["default"].object,mode:_propTypes["default"].string,showavatar:_propTypes["default"].bool,onFocus:_propTypes["default"].func,onBlur:_propTypes["default"].func,clickCancel:_propTypes["default"].func,getComment:_propTypes["default"].func}),_defineProperty(AddComment,"defaultProps",{defaultcomment:"",userinfo:{mid:0,name:"None",src:""},checkdata:{},mode:"default",showavatar:!0,onFocus:function onFocus(){},onBlur:function onBlur(){},clickCancel:function clickCancel(){},getComment:function getComment(a){console.log("get",a)}});var _default=(0,_reactCssModules["default"])(AddComment,_AddComment["default"]);exports["default"]=_default;