/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Navigation 
var TOGGLE_SIDE_MENU = exports.TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
var TOGGLE_HEADER_SETTING = exports.TOGGLE_HEADER_SETTING = 'TOGGLE_HEADER_SETTING';
var CHANGE_HEADER_USERNAME = exports.CHANGE_HEADER_USERNAME = 'CHANGE_HEADER_USERNAME';

// Authentication 
var CHANGE_USERNAME = exports.CHANGE_USERNAME = 'CHANGE_USERNAME';
var CHANGE_PASSWORD = exports.CHANGE_PASSWORD = 'CHANGE_PASSWORD';
var LOGIN = exports.LOGIN = 'LOGIN';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// User 
var FETCH_MY_INFO = exports.FETCH_MY_INFO = 'FETCH_MY_INFO';

// Type 
var CREATE_TYPE = exports.CREATE_TYPE = 'CREATE_TYPE';
var FETCH_TYPES = exports.FETCH_TYPES = 'FETCH_TYPES';
var DELETE_TYPE = exports.DELETE_TYPE = 'DELETE_TYPE';

// Blog 
var CHANGE_TYPE_NAME = exports.CHANGE_TYPE_NAME = 'CHANGE_TYPE_NAME';
var CREATE_BLOG_TYPE_SUCCESS = exports.CREATE_BLOG_TYPE_SUCCESS = 'CREATE_BLOG_TYPE_SUCCESS';
var FETCH_BLOG_TYPES_SUCCESS = exports.FETCH_BLOG_TYPES_SUCCESS = 'FETCH_BLOG_TYPES_SUCCESS';
var FETCH_BLOGS_SUCCESS = exports.FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
var DELETE_BLOG_SUCCESS = exports.DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS';

// Vocab 
var SELECT_PARENT_CATEGORY = exports.SELECT_PARENT_CATEGORY = 'SELECT_PARENT_CATEGORY';
var CHANGE_CATEGORY_NAME = exports.CHANGE_CATEGORY_NAME = 'CHANGE_CATEGORY_NAME';
var TOGGLE_READY = exports.TOGGLE_READY = 'TOGGLE_READY';
var TOGGLE_SHOW_MODAL = exports.TOGGLE_SHOW_MODAL = 'TOGGLE_SHOW_MODAL';
var CHANGE_VOCAB_WORD = exports.CHANGE_VOCAB_WORD = 'CHANGE_VOCAB_WORD';
var CHANGE_VOCAB_DESC = exports.CHANGE_VOCAB_DESC = 'CHANGE_VOCAB_DESC';
var FETCH_VOCAB = exports.FETCH_VOCAB = 'FETCH_VOCAB';
var CREATE_VOCAB = exports.CREATE_VOCAB = 'CREATE_VOCAB';

// Error 
var API_FAILED = exports.API_FAILED = 'API_FAILED';
var CLEAR_ERRORS = exports.CLEAR_ERRORS = 'CLEAR_ERRORS';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _Setting = __webpack_require__(10);

var _Setting2 = _interopRequireDefault(_Setting);

var _Login = __webpack_require__(11);

var _Login2 = _interopRequireDefault(_Login);

var _NotFound = __webpack_require__(12);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _Home2.default, {
    path: "/",
    exact: true,
    name: "首頁"
  }), _extends({}, _Setting2.default, {
    path: "/setting",
    name: "設定"
  }), _extends({}, _Login2.default, {
    path: "/login",
    name: "登入"
  }), _extends({}, _NotFound2.default)]
})];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(13);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(19);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 6001;
var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  // 利用react router config來判斷匹配的路徑跟元件
  // 這會產生一個回傳該元件的取資料方法(loadData)
  // promises是一個裝promise的陣列
  // 元件裡的方法會使用store來dispatch我們自訂的actions
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    // 這裡的功能就是在元件渲染前先把redux的資料撈出來(包含打API)
    // 使用這個方法就不需要connect在前端渲染後再顯示資料
    // 這樣的方法可以達到Server Side Render的目的
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    // 所有資料都先撈好後在這裡把html渲染出來
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, function () {
  console.log('Listening on prot ' + PORT);
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var location = _ref.location,
      route = _ref.route;
  return _react2.default.createElement(
    "div",
    { className: "d-flex" },
    _react2.default.createElement(
      "main",
      {
        className: "position-relative" + (location.pathname !== "/login" ? " outer-container" : " login-bg")
      },
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    )
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "div",
    { className: "position-relative main-content" },
    _react2.default.createElement(
      "h3",
      null,
      "Welcome"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Check out these awesome features"
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Setting = function Setting() {
  return _react2.default.createElement(
    "div",
    null,
    "\u8A2D\u5B9A"
  );
};

exports.default = {
  component: Setting
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  var submit = function submit(ev) {
    ev.preventDefault();
  };
  return _react2.default.createElement(
    "form",
    { onSubmit: submit },
    _react2.default.createElement("input", null),
    _react2.default.createElement("input", { type: "password" }),
    _react2.default.createElement("input", { type: "submit", value: "\u9001\u51FA" })
  );
};

exports.default = {
  component: Login
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    null,
    'Ooops, route not found.'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(15);

var _reactRedux = __webpack_require__(16);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(17);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(18);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  var helmet = _reactHelmet.Helmet.renderStatic();
  return "\n    <html>\n      <head>\n        <meta charset='utf-8'/>\n        <meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=no'/>\n        <meta http-equiv='X-UA-Compatible' content='ie=edge'/>\n        <link rel='shortcut icon' href='/images/favicon.ico'/>\n        " + helmet.title.toString() + "\n        " + helmet.meta.toString() + "\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script>\n          window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reducers = __webpack_require__(20);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {});
  return store;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reducer = __webpack_require__(21);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(22);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(23);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(24);

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(25);

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(26);

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = __webpack_require__(27);

var _reducer14 = _interopRequireDefault(_reducer13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    Authentication: _reducer2.default,
    Navigation: _reducer4.default,
    Type: _reducer6.default,
    User: _reducer8.default,
    Blog: _reducer10.default,
    Vocab: _reducer12.default,
    Error: _reducer14.default
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var INIT_STATE = {
    form: {
        username: '',
        password: ''
    },
    isLoading: false
};

var Authentication = function Authentication() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _constants.CHANGE_USERNAME:
            return _extends({}, state, {
                form: _extends({}, state.form, {
                    username: action.payload.username
                })
            });
        case _constants.CHANGE_PASSWORD:
            return _extends({}, state, {
                form: _extends({}, state.form, {
                    password: action.payload.password
                })
            });
        case _constants.LOGIN:
            return _extends({}, state, {
                isLoading: true
            });
        case _constants.LOGIN_SUCCESS:
        case _constants.API_FAILED:
            return _extends({}, state, {
                isLoading: false
            });
        default:
            return state;
    }
};

exports.default = Authentication;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var INITIAL_STATE = {
    sides: [{ name: '首頁', path: '/', icon: 'fa-home' }, { name: '部落格', path: '/blog', icon: 'fa-blog' }, { name: '單字庫', path: '/vocab', icon: 'fa-file-word' }, { name: '進階設定', path: '/setting', icon: 'fa-cog' }],
    isShrink: false,
    isCollapse: false,
    headerName: ''
};

var Navigation = function Navigation() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _constants.CHANGE_HEADER_USERNAME:
            return _extends({}, state, {
                headerName: action.payload.name
            });
        case _constants.TOGGLE_HEADER_SETTING:
            return _extends({}, state, {
                isCollapse: !state.isCollapse
            });
        case _constants.TOGGLE_SIDE_MENU:
            return _extends({}, state, {
                isShrink: !state.isShrink
            });
        default:
            return state;
    }
};

exports.default = Navigation;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(1);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Type = function Type() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    var types = state;
    switch (action.type) {
        case _constants.FETCH_TYPES:
            return action.payload.types;
        case _constants.CREATE_TYPE:
            if (!types) {
                types = _defineProperty({}, action.payload.key, action.payload.content);
            } else {
                types[action.payload.key] = action.payload.content;
            }
            return types;
        case _constants.DELETE_TYPE:
            delete types[action.payload.key];
            return types;
        default:
            return state;
    }
};

exports.default = Type;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var INITIAL_STATE = {
    myInfo: null
};

var User = function User() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _constants.FETCH_MY_INFO:
            return _extends({}, state, {
                myInfo: action.payload.user
            });
        default:
            return state;
    }
};

exports.default = User;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var INITIAL_STATE = {
    list: null,
    form: {
        title: '',
        type: '',
        ops: [],
        isPrivate: false
    },
    typeForm: {
        name: ''
    }
};

var Blog = function Blog() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _constants.CREATE_TYPE:
        case _constants.DELETE_TYPE:
            return _extends({}, state, {
                typeForm: {
                    name: ''
                }
            });
        case _constants.CHANGE_TYPE_NAME:
            return _extends({}, state, {
                typeForm: {
                    name: action.payload.name
                }
            });
        default:
            return state;
    }
};

exports.default = Blog;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
    form: {
        word: '',
        desc: ''
    },
    category: null,
    childList: [],
    vocabList: [],
    isReady: false,
    isModalOn: false,
    categoryName: ''
};

var Vocab = function Vocab() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _constants.CREATE_TYPE:
            return _extends({}, state, {
                childList: [].concat(_toConsumableArray(state.childList), [action.payload.content])
            });
        case _constants.TOGGLE_READY:
            return _extends({}, state, {
                isReady: !state.isReady
            });
        case _constants.TOGGLE_SHOW_MODAL:
            return _extends({}, state, {
                isModalOn: action.payload.isModalOn
            });
        case _constants.CHANGE_CATEGORY_NAME:
            return _extends({}, state, {
                categoryName: action.payload.categoryName
            });
        case _constants.CHANGE_VOCAB_WORD:
            return _extends({}, state, {
                form: _extends({}, state.form, {
                    word: action.payload.word
                })
            });
        case _constants.CHANGE_VOCAB_DESC:
            return _extends({}, state, {
                form: _extends({}, state.form, {
                    desc: action.payload.desc
                })
            });
        case _constants.SELECT_PARENT_CATEGORY:
            return _extends({}, state, {
                category: action.payload.category,
                childList: action.payload.childList
            });
        case _constants.FETCH_VOCAB:
            return _extends({}, state, {
                vocabList: action.payload.vocabList
            });
        case _constants.CREATE_VOCAB:
            state.vocabList.push(_extends({}, action.payload.content, {
                id: action.payload.key
            }));
            return _extends({}, state, {
                form: {
                    word: '',
                    desc: ''
                },
                vocabList: state.vocabList
            });
        default:
            return state;
    }
};

exports.default = Vocab;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Error = function Error() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _constants.API_FAILED:
            state.push(action.payload);
            return [].concat(_toConsumableArray(state));
        case _constants.CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

exports.default = Error;

/***/ })
/******/ ]);