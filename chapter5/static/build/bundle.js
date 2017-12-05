/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./static/main.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Tweet = __webpack_require__(/*! ./components/Tweet */ 1);
	
	var _Tweet2 = _interopRequireDefault(_Tweet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
	
	    _this.state = { userId: cookie.load('session') };
	    _this.state = { tweets: [{ 'id': 1, 'name': 'guest', 'body': '"Listen to your heart. It knows all things." - Paulo Coelho #Motivation' }] };
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(TweetList, { tweets: this.state.tweets })
	      );
	    }
	  }]);
	
	  return Main;
	}(React.Component);
	
	var documentReady = function documentReady() {
	  ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));
	};
	
	$(documentReady);

/***/ },
/* 1 */
/*!************************************!*\
  !*** ./static/components/Tweet.js ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);
	
	  function Tweet() {
	    _classCallCheck(this, Tweet);
	
	    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));
	  }
	
	  _createClass(Tweet, [{
	    key: "sendTweet",
	    value: function sendTweet(event) {
	      event.preventDefault();
	      this.props.sendTweet(this.refs.tweetTextArea.value);
	      this.refs.tweetTextArea.value = '';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "nav",
	          null,
	          React.createElement(
	            "div",
	            { className: "nav-wrapper" },
	            React.createElement(
	              "a",
	              { href: "#", className: "brand-logo" },
	              "APP"
	            ),
	            React.createElement(
	              "ul",
	              { id: "nav-mobile", className: "right hide-on-med-and-down" },
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "/profile" },
	                  "Profile"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "/logout" },
	                  "Logout"
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "form",
	          { onSubmit: this.sendTweet.bind(this) },
	          React.createElement(
	            "div",
	            { className: "input-field" },
	            React.createElement("textarea", { ref: "tweetTextArea", className: "materialize-textarea" }),
	            React.createElement(
	              "label",
	              null,
	              "How you doing?"
	            ),
	            React.createElement(
	              "button",
	              { className: "btn waves-effect waves-light right" },
	              "Tweet now ",
	              React.createElement(
	                "i",
	                { className: "material-icons right" },
	                "send"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Tweet;
	}(React.Component);
	
	exports.default = Tweet;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map