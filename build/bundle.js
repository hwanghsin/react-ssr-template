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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginWrap = exports.AuthWrap = exports.NavWrap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(8);

var _firebase = __webpack_require__(9);

var _actions = __webpack_require__(19);

var _actions2 = __webpack_require__(20);

var _actions3 = __webpack_require__(4);

var _actions4 = __webpack_require__(21);

var _actions5 = __webpack_require__(22);

var _actions6 = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Actions 


var NavWrap = function NavWrap(WrappedComponent) {
    var HOC = function HOC(props) {
        return _react2.default.createElement(WrappedComponent, props);
    };
    var mapStateToProps = function mapStateToProps(state) {
        return {
            navigation: state.Navigation,
            user: state.User
        };
    };
    var actions = {
        logout: _actions2.logout,
        // Navigation
        toggleSideMenu: _actions.toggleSideMenu,
        toggleHeaderSetting: _actions.toggleHeaderSetting,
        changeHeaderUsername: _actions.changeHeaderUsername
    };
    return (0, _reactRedux.connect)(mapStateToProps, actions)((0, _reactRouterDom.withRouter)(HOC));
};

var AuthWrap = function AuthWrap(WrappedComponent) {
    var HOC = function (_Component) {
        _inherits(HOC, _Component);

        function HOC() {
            _classCallCheck(this, HOC);

            return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
        }

        _createClass(HOC, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                switch (this.props.history.location.pathname) {
                    case '/vocab':
                        this.props.fetchTypes();
                        this.props.fetchVocabs();
                        break;
                    case '/setting':
                        this.props.fetchTypes();
                        break;
                    default:
                }
                setTimeout(function () {
                    _this2.props.toggleReady();
                }, 1000);
            }
        }, {
            key: 'render',
            value: function render() {
                var _this3 = this;

                _firebase.firebaseApp.auth().onAuthStateChanged(function (user) {
                    if (!user) {
                        _this3.props.history.replace('/login');
                        return;
                    }
                    if (user && !_this3.props.user.myInfo) {
                        _this3.props.fetchMyInfo(user);
                    }
                });
                return _react2.default.createElement(WrappedComponent, this.props);
            }
        }]);

        return HOC;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: state.Error,
            user: state.User,
            types: state.Type,
            blog: state.Blog,
            vocab: state.Vocab
        };
    };
    var actions = {
        fetchMyInfo: _actions4.fetchMyInfo,
        // Type 
        createType: _actions3.createType,
        fetchTypes: _actions3.fetchTypes,
        deleteType: _actions3.deleteType,
        // Blogs 
        changeTypeName: _actions5.changeTypeName,
        // Vocab 
        changeVocabWord: _actions6.changeVocabWord,
        changeVocabDesc: _actions6.changeVocabDesc,
        selectParentCategory: _actions6.selectParentCategory,
        changeCategoryName: _actions6.changeCategoryName,
        toggleShowModal: _actions6.toggleShowModal,
        toggleReady: _actions6.toggleReady,
        fetchVocabs: _actions6.fetchVocabs,
        createVocab: _actions6.createVocab
    };
    return (0, _reactRedux.connect)(mapStateToProps, actions)((0, _reactRouterDom.withRouter)(HOC));
};

var LoginWrap = function LoginWrap(WrappedComponent) {
    var HOC = function HOC(props) {
        _firebase.firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                undefined.props.location.replace('/');
                return;
            }
        });
        return _react2.default.createElement(WrappedComponent, props);
    };
    var mapStateToProps = function mapStateToProps(state) {
        return {
            authentication: state.Authentication,
            errors: state.Error
        };
    };
    var actions = {
        changeUsername: _actions2.changeUsername,
        changePassword: _actions2.changePassword,
        login: _actions2.login
    };
    return (0, _reactRedux.connect)(mapStateToProps, actions)(HOC);
};

exports.NavWrap = NavWrap;
exports.AuthWrap = AuthWrap;
exports.LoginWrap = LoginWrap;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteType = exports.fetchTypes = exports.createType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createType = exports.createType = function createType(_ref) {
    var name = _ref.name,
        updatedBy = _ref.updatedBy,
        category = _ref.category,
        _ref$parent = _ref.parent,
        parent = _ref$parent === undefined ? '' : _ref$parent;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var key, content;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return api.database().ref('categories').push().key;

                        case 3:
                            key = _context.sent;
                            content = {
                                category: category,
                                fullKeyRoute: parent ? parent + '.' + key : key,
                                updatedTime: Date.now(),
                                updatedBy: updatedBy,
                                name: name
                            };
                            _context.next = 7;
                            return api.database().ref('categories/' + key).set(content);

                        case 7:
                            dispatch({
                                type: _constants.CREATE_TYPE,
                                payload: { key: key, content: content }
                            });
                            _context.next = 13;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](0);

                            dispatch({
                                type: _constants.API_FAILED,
                                payload: _extends({}, _context.t0, { message_zh: '新增分類失敗' })
                            });

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 10]]);
        }));

        return function (_x, _x2, _x3) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var fetchTypes = exports.fetchTypes = function fetchTypes() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res, categories, childList;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return api.database().ref('categories').once('value');

                        case 3:
                            res = _context2.sent;
                            categories = res.val();
                            childList = [];

                            categories && Object.values(categories).forEach(function (type) {
                                if (type.category === 'VOCAB' && type.fullKeyRoute && type.fullKeyRoute.indexOf('.') === -1) {
                                    childList.push(type);
                                }
                            });
                            _context2.next = 9;
                            return Promise.all([dispatch({
                                type: _constants.FETCH_TYPES,
                                payload: { types: categories }
                            }), dispatch({
                                type: _constants.SELECT_PARENT_CATEGORY,
                                payload: { category: null, childList: childList }
                            })]);

                        case 9:
                            _context2.next = 14;
                            break;

                        case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2['catch'](0);

                            dispatch({
                                type: _constants.API_FAILED,
                                payload: _extends({}, _context2.t0, { message_zh: '取得分類列表失敗' })
                            });

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 11]]);
        }));

        return function (_x4, _x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();
};

var deleteType = exports.deleteType = function deleteType(key) {
    return function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return api.database().ref('categories/' + key).remove();

                        case 3:
                            dispatch({
                                type: _constants.DELETE_TYPE,
                                payload: { key: key }
                            });
                            _context3.next = 9;
                            break;

                        case 6:
                            _context3.prev = 6;
                            _context3.t0 = _context3['catch'](0);

                            dispatch({
                                type: _constants.API_FAILED,
                                payload: _extends({}, _context3.t0, { message_zh: '刪除分類失敗' })
                            });

                        case 9:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 6]]);
        }));

        return function (_x7, _x8, _x9) {
            return _ref4.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var isOn = _ref.isOn,
      isDelete = _ref.isDelete,
      title = _ref.title,
      children = _ref.children,
      toggleModal = _ref.toggleModal,
      submit = _ref.submit;

  return _react2.default.createElement(
    'div',
    { className: 'modal fade' + (isOn ? ' show' : ''), style: { display: isOn ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.3)' } },
    _react2.default.createElement(
      'div',
      { className: 'modal-dialog' },
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-header' },
          _react2.default.createElement(
            'h5',
            { className: 'modal-title' },
            title
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'close', onClick: function onClick() {
                return toggleModal();
              } },
            _react2.default.createElement(
              'span',
              null,
              '\xD7'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-body' },
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-' + (isDelete ? 'danger' : 'primary'), onClick: function onClick() {
                return submit();
              } },
            isDelete ? '刪除' : '送出'
          )
        )
      )
    )
  );
};

exports.default = Modal;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(26);

var _Home2 = _interopRequireDefault(_Home);

var _Blog = __webpack_require__(27);

var _Blog2 = _interopRequireDefault(_Blog);

var _Vocab = __webpack_require__(28);

var _Vocab2 = _interopRequireDefault(_Vocab);

var _Setting = __webpack_require__(31);

var _Setting2 = _interopRequireDefault(_Setting);

var _Login = __webpack_require__(36);

var _Login2 = _interopRequireDefault(_Login);

var _NotFound = __webpack_require__(37);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _Home2.default, {
    path: '/',
    exact: true,
    name: '首頁'
  }), _extends({}, _Blog2.default, {
    path: '/blog',
    name: '部落格'
  }), _extends({}, _Vocab2.default, {
    path: '/vocab',
    name: '單字庫'
  }), _extends({}, _Setting2.default, {
    path: '/setting',
    name: '進階設定'
  }), _extends({}, _Login2.default, {
    path: '/login',
    name: '登入'
  }), _extends({}, _NotFound2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.firebaseApp = undefined;

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(17);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firebaseApp = exports.firebaseApp = _app2.default.initializeApp({
    apiKey: "AIzaSyAo7kL5ZjsFAR4iH5g0VLLqx-dHKRJHbmc",
    authDomain: "admin-panel-2e6f9.firebaseapp.com",
    databaseURL: "https://admin-panel-2e6f9.firebaseio.com",
    projectId: "admin-panel-2e6f9",
    storageBucket: "admin-panel-2e6f9.appspot.com",
    messagingSenderId: "734020905657"
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(38);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(42);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _Side = __webpack_require__(24);

var _Side2 = _interopRequireDefault(_Side);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var location = _ref.location,
      route = _ref.route;

  return _react2.default.createElement(
    'div',
    { className: 'd-flex' },
    location.pathname !== '/login' && _react2.default.createElement(_Side2.default, null),
    _react2.default.createElement(
      'main',
      { className: 'position-relative' + (location.pathname !== '/login' ? ' outer-container' : ' login-bg') },
      location.pathname !== '/login' && _react2.default.createElement(_Header2.default, null),
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    )
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoc = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (0, _hoc.NavWrap)(function (props) {
    var navigation = props.navigation,
        user = props.user,
        toggleSideMenu = props.toggleSideMenu,
        toggleHeaderSetting = props.toggleHeaderSetting,
        logout = props.logout;

    return _react2.default.createElement(
        'nav',
        { className: 'd-flex pl-3 bg-dark header' },
        _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-secondary bg-dark toggle-btn', onClick: function onClick() {
                    return toggleSideMenu();
                } },
            _react2.default.createElement('i', { className: 'fas fa-bars' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'position-relatice config' },
            _react2.default.createElement(
                'div',
                { className: 'd-flex mx-3 setting pointer', onClick: function onClick() {
                        return toggleHeaderSetting();
                    } },
                _react2.default.createElement(
                    'span',
                    null,
                    '\u6B61\u8FCE ' + (user.myInfo ? user.myInfo.displayName : '')
                ),
                _react2.default.createElement('i', { className: navigation.isCollapse ? 'fas fa-sort-up' : 'fas fa-sort-down' })
            ),
            _react2.default.createElement(
                'ul',
                { className: 'position-absolute bg-dark m-0 px-3 ext-area' + (navigation.isCollapse ? ' show' : '') },
                _react2.default.createElement(
                    'li',
                    { className: 'd-flex pointer', onClick: function onClick() {
                            return logout();
                        } },
                    _react2.default.createElement('i', { className: 'fas fa-sign-out-alt' }),
                    _react2.default.createElement(
                        'span',
                        { className: 'ml-2' },
                        '\u767B\u51FA'
                    )
                )
            )
        )
    );
});

exports.default = Header;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeHeaderUsername = exports.toggleHeaderSetting = exports.toggleSideMenu = undefined;

var _constants = __webpack_require__(1);

var toggleSideMenu = exports.toggleSideMenu = function toggleSideMenu() {
    return { type: _constants.TOGGLE_SIDE_MENU };
};
var toggleHeaderSetting = exports.toggleHeaderSetting = function toggleHeaderSetting() {
    return { type: _constants.TOGGLE_HEADER_SETTING };
};
var changeHeaderUsername = exports.changeHeaderUsername = function changeHeaderUsername(name) {
    return {
        type: _constants.CHANGE_HEADER_USERNAME,
        payload: { name: name }
    };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logout = exports.login = exports.changePassword = exports.changeUsername = undefined;

var _constants = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var changeUsername = exports.changeUsername = function changeUsername(username) {
    return {
        type: _constants.CHANGE_USERNAME,
        payload: { username: username }
    };
};
var changePassword = exports.changePassword = function changePassword(password) {
    return {
        type: _constants.CHANGE_PASSWORD,
        payload: { password: password }
    };
};
var login = exports.login = function login(_ref) {
    var username = _ref.username,
        password = _ref.password;
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res, message_zh;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            dispatch({ type: _constants.LOGIN });
                            _context.prev = 1;
                            _context.next = 4;
                            return api.auth().signInWithEmailAndPassword(username, password);

                        case 4:
                            res = _context.sent;

                            dispatch({ type: _constants.LOGIN_SUCCESS });
                            window.location.replace('/');
                            _context.next = 24;
                            break;

                        case 9:
                            _context.prev = 9;
                            _context.t0 = _context['catch'](1);
                            message_zh = '';
                            _context.t1 = _context.t0.code;
                            _context.next = _context.t1 === 'auth/invalid-email' ? 15 : _context.t1 === 'auth/user-not-found' ? 15 : _context.t1 === 'auth/user-disabled' ? 17 : _context.t1 === 'auth/wrong-password' ? 19 : 21;
                            break;

                        case 15:
                            message_zh = '帳號錯誤';
                            return _context.abrupt('break', 22);

                        case 17:
                            message_zh = '使用者無法登入，請洽相關人員';
                            return _context.abrupt('break', 22);

                        case 19:
                            message_zh = '密碼錯誤';
                            return _context.abrupt('break', 22);

                        case 21:
                            message_zh = '未定義問題';

                        case 22:
                            dispatch({
                                type: _constants.API_FAILED,
                                payload: { message_zh: message_zh }
                            });
                            setTimeout(function () {
                                dispatch({ type: _constants.CLEAR_ERRORS });
                            }, 4000);

                        case 24:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 9]]);
        }));

        return function (_x, _x2, _x3) {
            return _ref2.apply(this, arguments);
        };
    }();
};
var logout = exports.logout = function logout() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.auth().signOut();

                        case 2:
                            window.location = '/login';

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchMyInfo = undefined;

var _constants = __webpack_require__(1);

var fetchMyInfo = exports.fetchMyInfo = function fetchMyInfo(user) {
    return {
        type: _constants.FETCH_MY_INFO,
        payload: { user: user }
    };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeTypeName = undefined;

var _constants = __webpack_require__(1);

var changeTypeName = exports.changeTypeName = function changeTypeName(name) {
    return {
        type: _constants.CHANGE_TYPE_NAME,
        payload: { name: name }
    };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createVocab = exports.fetchVocabs = exports.toggleShowModal = exports.toggleReady = exports.changeVocabDesc = exports.changeVocabWord = exports.changeCategoryName = exports.selectParentCategory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var selectParentCategory = exports.selectParentCategory = function selectParentCategory(category, childList) {
    return {
        type: _constants.SELECT_PARENT_CATEGORY,
        payload: { category: category, childList: childList }
    };
};
var changeCategoryName = exports.changeCategoryName = function changeCategoryName(categoryName) {
    return {
        type: _constants.CHANGE_CATEGORY_NAME,
        payload: { categoryName: categoryName }
    };
};
var changeVocabWord = exports.changeVocabWord = function changeVocabWord(word) {
    return {
        type: _constants.CHANGE_VOCAB_WORD,
        payload: { word: word }
    };
};
var changeVocabDesc = exports.changeVocabDesc = function changeVocabDesc(desc) {
    return {
        type: _constants.CHANGE_VOCAB_DESC,
        payload: { desc: desc }
    };
};
var toggleReady = exports.toggleReady = function toggleReady() {
    return { type: _constants.TOGGLE_READY };
};
var toggleShowModal = exports.toggleShowModal = function toggleShowModal(isModalOn) {
    return {
        type: _constants.TOGGLE_SHOW_MODAL,
        payload: { isModalOn: isModalOn }
    };
};
var fetchVocabs = exports.fetchVocabs = function fetchVocabs() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res, vocabs, vocabList;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return api.database().ref('vocabularies').once('value');

                        case 3:
                            res = _context.sent;
                            vocabs = res.val();
                            vocabList = vocabs ? Object.keys(vocabs).map(function (key) {
                                return _extends({}, vocabs[key], {
                                    id: key
                                });
                            }) : [];

                            dispatch({
                                type: _constants.FETCH_VOCAB,
                                payload: { vocabList: vocabList }
                            });
                            _context.next = 12;
                            break;

                        case 9:
                            _context.prev = 9;
                            _context.t0 = _context['catch'](0);

                            dispatch({
                                type: _constants.API_FAILED,
                                payload: _extends({}, _context.t0, { message_zh: '取得單字列表失敗' })
                            });

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 9]]);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};
var createVocab = exports.createVocab = function createVocab(_ref2) {
    var word = _ref2.word,
        desc = _ref2.desc,
        updatedBy = _ref2.updatedBy,
        category = _ref2.category;
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var key, content;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return api.database().ref('vocabularies').push().key;

                        case 3:
                            key = _context2.sent;
                            content = {
                                category: category,
                                updatedTime: Date.now(),
                                updatedBy: updatedBy,
                                word: word,
                                desc: desc
                            };
                            _context2.next = 7;
                            return api.database().ref('vocabularies/' + key).set(content);

                        case 7:
                            dispatch({
                                type: _constants.CREATE_VOCAB,
                                payload: { key: key, content: content }
                            });
                            _context2.next = 13;
                            break;

                        case 10:
                            _context2.prev = 10;
                            _context2.t0 = _context2['catch'](0);

                            dispatch({
                                type: _constants.API_FAILED,
                                payload: _extends({}, _context2.t0, { message_zh: '新增單字失敗' })
                            });

                        case 13:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 10]]);
        }));

        return function (_x4, _x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// Components 


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoc = __webpack_require__(2);

var _MenuItem = __webpack_require__(25);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Side = (0, _hoc.NavWrap)(function (props) {
    var navigation = props.navigation,
        history = props.history;

    return _react2.default.createElement(
        'aside',
        { className: 'position-relative bg-dark side-menu' + (navigation.isShrink ? ' shrink' : '') },
        _react2.default.createElement(
            'section',
            { className: 'position-absolute d-flex top' },
            navigation.isShrink ? _react2.default.createElement('img', { alt: 'logo', src: '/images/favicon.ico' }) : _react2.default.createElement(
                'span',
                { className: 'side-logo' },
                'HWANG'
            )
        ),
        _react2.default.createElement(
            'section',
            { className: 'position-absolute menu-list' },
            _react2.default.createElement(
                'ul',
                { className: 'pt-3 px-0 d-flex' },
                navigation.sides.map(function (side) {
                    return _react2.default.createElement(_MenuItem2.default, _extends({ key: side.path, isShrink: navigation.isShrink, side: side }, history));
                })
            )
        )
    );
});

exports.default = Side;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
    var isShrink = _ref.isShrink,
        side = _ref.side,
        replace = _ref.replace;

    return _react2.default.createElement(
        'li',
        { className: 'px-3 d-flex pointer menu-item', onClick: function onClick() {
                return replace(side.path);
            }, title: side.name },
        _react2.default.createElement('i', { className: 'fas ' + (side.icon || 'fa-question-circle') }),
        isShrink || _react2.default.createElement(
            'span',
            { className: 'ml-2' },
            side.name
        )
    );
};

exports.default = MenuItem;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoc = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (0, _hoc.AuthWrap)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'position-relative main-content' },
    _react2.default.createElement(
      'h3',
      null,
      'Welcome'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Check out these awesome features'
    )
  );
});

exports.default = {
  component: Home
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoc = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = (0, _hoc.AuthWrap)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'position-relative main-content' },
    _react2.default.createElement(
      'section',
      { className: 'px-3 pt-4 blog-form' },
      _react2.default.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
            e.preventDefault();
          } },
        _react2.default.createElement(
          'div',
          { className: 'form-row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'title' },
              '\u4E3B\u984C'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'title' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-6' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'blog-type' },
              '\u985E\u5225'
            ),
            _react2.default.createElement(
              'select',
              { className: 'form-control', id: 'blog-type' },
              _react2.default.createElement(
                'option',
                null,
                '-- \u8ACB\u9078\u64C7\u985E\u5225 --'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-row pl-1' },
          _react2.default.createElement(
            'div',
            { className: 'form-check form-check-inline' },
            _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'privacy', id: 'public', value: '0' }),
            _react2.default.createElement(
              'label',
              { className: 'form-check-label', htmlFor: 'public' },
              '\u516C\u958B'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-check form-check-inline' },
            _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'privacy', id: 'private', value: '1' }),
            _react2.default.createElement(
              'label',
              { className: 'form-check-label', htmlFor: 'private' },
              '\u4E0D\u516C\u958B'
            )
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'React Quill \u76EE\u524D\u4E0D\u652F\u63F4SSR\uFF0C\u56E0\u70BA\u5957\u4EF6\u4F9D\u8CF4DOM\u3002'
        ),
        _react2.default.createElement(
          'button',
          { type: 'submit', className: 'btn btn-info' },
          '\u9001\u51FA'
        )
      )
    ),
    _react2.default.createElement(
      'aside',
      { className: 'position-absolute pt-4 custom-side-list' },
      'List'
    )
  );
});

exports.default = {
  component: Blog
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoc = __webpack_require__(2);

var _wordInput = __webpack_require__(29);

var _wordInput2 = _interopRequireDefault(_wordInput);

var _cardItem = __webpack_require__(30);

var _cardItem2 = _interopRequireDefault(_cardItem);

var _actions = __webpack_require__(4);

var _actions2 = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Actions
var Vocab = (0, _hoc.AuthWrap)(function (props) {
  var types = props.types,
      vocab = props.vocab,
      selectParentCategory = props.selectParentCategory,
      toggleShowModal = props.toggleShowModal;

  return _react2.default.createElement(
    'div',
    { className: 'position-relative main-content' },
    _react2.default.createElement(
      'div',
      { className: 'vocab-area px-3 pt-4' },
      _react2.default.createElement(_wordInput2.default, props),
      vocab.category || vocab.childList.length > 0 ? _react2.default.createElement(
        'div',
        { className: 'vocab-list-area mx-2' },
        vocab.vocabList.map(function (item, index) {
          return _react2.default.createElement(_cardItem2.default, { key: index, word: item.word, desc: item.desc, clickEvent: function clickEvent() {
              return toggleShowModal(true);
            } });
        })
      ) : _react2.default.createElement(
        'div',
        { className: 'd-flex align-items-center jutify-content-center mx-2' },
        vocab.isReady ? '尚未新增單字分類' : '載入中...'
      )
    ),
    _react2.default.createElement(
      'aside',
      { className: 'position-absolute pt-4 custom-side-list' },
      _react2.default.createElement(
        'div',
        { className: 'd-flex header' },
        vocab.category ? _react2.default.createElement('i', { className: 'fas fa-chevron-left pl-1 mr-3 pt-1 pointer back-btn d-flex', onClick: function onClick() {
            var parent = vocab.category && vocab.category.parent;
            var childList = parent && types ? [] : Object.values(types).filter(function (t) {
              return t.category === 'VOCAB' && t.fullKeyRoute && t.fullKeyRoute.indexOf('.') === -1;
            });
            if (parent) {
              Object.values(types).forEach(function (type) {
                if (parent && type.category === 'VOCAB' && type.parent === parent) {
                  childList.push(type);
                }
              });
            }
            selectParentCategory(parent ? parent : null, childList);
          } }) : _react2.default.createElement('div', { className: 'back-btn d-flex' }),
        _react2.default.createElement(
          'h6',
          { className: 'vocab-title d-flex m-0' },
          vocab.category ? vocab.category.name : '單字庫分類列表'
        ),
        _react2.default.createElement('i', { className: 'add-btn' })
      ),
      _react2.default.createElement(
        'ul',
        { className: 'p-0' },
        vocab.childList.length > 0 ? vocab.childList.map(function (child) {
          var offspring = types && Object.values(types).filter(function (t) {
            return t.fullKeyRoute && t.fullKeyRoute.substr(0, t.fullKeyRoute.length - child.fullKeyRoute.length - 1) === child.fullKeyRoute;
          });
          return _react2.default.createElement(
            'li',
            { key: child.name, className: 'px-3 py-2 pointer',
              onClick: function onClick() {
                return selectParentCategory(child, offspring);
              } },
            child ? child.name : ''
          );
        }) : _react2.default.createElement(
          'li',
          { className: 'px-3 py-2' },
          '\u672A\u8A2D\u5B9A\u55AE\u5B57\u5206\u985E'
        )
      )
    )
  );
});

var loadData = function loadData(store) {
  return Promise.all([store.dispatch((0, _actions.fetchTypes)()), store.dispatch((0, _actions2.fetchVocabs)())]);
};

exports.default = {
  loadData: loadData,
  component: Vocab
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(5);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VocabWordInput = function VocabWordInput(_ref) {
    var user = _ref.user,
        vocab = _ref.vocab,
        createVocab = _ref.createVocab,
        changeVocabWord = _ref.changeVocabWord,
        changeVocabDesc = _ref.changeVocabDesc,
        toggleShowModal = _ref.toggleShowModal;

    var turnModalOn = function turnModalOn() {
        return toggleShowModal(true);
    };
    var changeWord = function changeWord(e) {
        return changeVocabWord(e.target.value);
    };
    var changeDesc = function changeDesc(e) {
        return changeVocabDesc(e.target.value);
    };
    var modalProps = {
        isOn: vocab.isModalOn,
        title: '新增單字',
        toggleModal: function toggleModal() {
            return toggleShowModal(false);
        },
        submit: function submit() {
            if (!vocab.form.word || !vocab.form.desc) return;
            createVocab(_extends({}, vocab.form, {
                updatedBy: user.myInfo.displayName,
                category: vocab.category
            }));
            toggleShowModal(false);
        }
    };
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'form',
            { className: 'form-group px-3 mx-2' },
            _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-success', onClick: turnModalOn },
                '\u65B0\u589E\u55AE\u5B57'
            )
        ),
        _react2.default.createElement(
            _Modal2.default,
            modalProps,
            _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement('input', { type: 'text', placeholder: '\u8F38\u5165\u55AE\u5B57\u540D\u7A31', className: 'form-control mb-3', value: vocab.form.word, onChange: changeWord }),
                _react2.default.createElement('textarea', { className: 'form-control', placeholder: '\u55AE\u5B57\u8A3B\u89E3', defaultValue: vocab.form.desc, onChange: changeDesc })
            )
        )
    );
};

exports.default = VocabWordInput;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VocabCardItem = function VocabCardItem(_ref) {
    var word = _ref.word,
        desc = _ref.desc,
        clickEvent = _ref.clickEvent;

    return _react2.default.createElement(
        'div',
        { className: 'card vocab-card m-3' },
        _react2.default.createElement(
            'div',
            { className: 'card-body' },
            _react2.default.createElement(
                'h5',
                { className: 'card-title' },
                word
            ),
            _react2.default.createElement(
                'p',
                { className: 'card-text' },
                desc
            ),
            _react2.default.createElement(
                'a',
                { href: '#', className: 'card-link', onClick: clickEvent },
                '\u8A73\u89E3'
            )
        )
    );
};

exports.default = VocabCardItem;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// Actions


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoc = __webpack_require__(2);

var _typeForm = __webpack_require__(32);

var _typeForm2 = _interopRequireDefault(_typeForm);

var _typeList = __webpack_require__(33);

var _typeList2 = _interopRequireDefault(_typeList);

var _categoryList = __webpack_require__(35);

var _categoryList2 = _interopRequireDefault(_categoryList);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Setting = (0, _hoc.AuthWrap)(function (props) {
  var _useState = (0, _react.useState)('blog'),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return _react2.default.createElement(
    'div',
    { className: 'position-relative main-content' },
    _react2.default.createElement(
      'div',
      { className: 'p-5' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-9' },
          _react2.default.createElement(
            'div',
            { className: 'tab-content', id: 'v-pills-tabContent' },
            _react2.default.createElement(
              'div',
              { className: 'tab-pane fade' + (active === 'blog' ? ' show active' : ''), id: 'blog-type', role: 'tabpanel', 'aria-labelledby': 'blog-type-tab' },
              _react2.default.createElement(_typeForm2.default, props),
              _react2.default.createElement(_typeList2.default, props)
            ),
            _react2.default.createElement(
              'div',
              { className: 'tab-pane fade' + (active === 'vocab' ? ' show active' : ''), id: 'vocab-type', role: 'tabpanel', 'aria-labelledby': 'vocab-type-tab' },
              _react2.default.createElement(_categoryList2.default, props)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-3' },
          _react2.default.createElement(
            'div',
            { className: 'nav flex-column nav-pills', id: 'v-pills-tab', role: 'tablist', 'aria-orientation': 'vertical' },
            _react2.default.createElement(
              'a',
              { onClick: function onClick() {
                  return setActive('blog');
                }, className: 'nav-link' + (active === 'blog' ? ' active bg-dark' : ''), id: 'blog-type-tab', 'data-toggle': 'pill', href: '#blog-type', role: 'tab', 'aria-controls': 'blog-type', 'aria-selected': 'true' },
              '\u90E8\u843D\u683C'
            ),
            _react2.default.createElement(
              'a',
              { onClick: function onClick() {
                  return setActive('vocab');
                }, className: 'nav-link' + (active === 'vocab' ? ' active bg-dark' : ''), id: 'vocab-type-tab', 'data-toggle': 'pill', href: '#vocab-type', role: 'tab', 'aria-controls': 'vocab-type', 'aria-selected': 'false' },
              '\u55AE\u5B57\u5EAB'
            )
          )
        )
      )
    )
  );
});

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchTypes)());
};

exports.default = {
  loadData: loadData,
  component: Setting
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeForm = function TypeForm(_ref) {
  var user = _ref.user,
      blog = _ref.blog,
      changeTypeName = _ref.changeTypeName,
      createType = _ref.createType;
  return _react2.default.createElement(
    'section',
    { className: 'form-group px-2' },
    _react2.default.createElement(
      'label',
      { htmlFor: 'type' },
      '\u90E8\u843D\u683C\u985E\u5225:'
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-group' },
      _react2.default.createElement('input', {
        type: 'text',
        className: 'form-control',
        id: 'type',
        placeholder: '\u8ACB\u8F38\u5165\u985E\u5225\uFF0C\u9EDE\u9078\u53F3\u5074\u6309\u9215\u65B0\u589E',
        value: blog.typeForm.name,
        onChange: function onChange(e) {
          return changeTypeName(e.target.value);
        }
      }),
      _react2.default.createElement(
        'div',
        { className: 'input-group-append', onClick: function onClick() {
            return createType({ name: blog.typeForm.name, updatedBy: user.myInfo.displayName, category: 'BLOG' });
          } },
        _react2.default.createElement(
          'span',
          { className: 'input-group-text pointer' },
          '\u65B0\u589E'
        )
      )
    )
  );
};

exports.default = TypeForm;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _typeItem = __webpack_require__(34);

var _typeItem2 = _interopRequireDefault(_typeItem);

var _Modal = __webpack_require__(5);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeList = function TypeList(_ref) {
  var types = _ref.types,
      vocab = _ref.vocab,
      deleteType = _ref.deleteType,
      toggleShowModal = _ref.toggleShowModal;
  return _react2.default.createElement(
    'section',
    { className: 'type-list mb-5' },
    Object.keys(types || {}).map(function (key) {
      if (types[key].category && types[key].category !== 'BLOG') return;
      var modalProps = {
        isOn: vocab.isModalOn,
        isDelete: true,
        title: '刪除類別',
        toggleModal: function toggleModal() {
          return toggleShowModal(false);
        },
        submit: function submit() {
          deleteType(key);
          toggleShowModal(false);
        }
      };
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_typeItem2.default, {
          key: key,
          name: types[key].name,
          deleteType: function deleteType() {
            return toggleShowModal(true);
          }
        }),
        _react2.default.createElement(
          _Modal2.default,
          modalProps,
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'label',
              null,
              '\u78BA\u5B9A\u8981\u522A\u9664 ' + types[key].name + '\uFF1F'
            )
          )
        )
      );
    })
  );
};

exports.default = TypeList;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogTypeItem = function BlogTypeItem(_ref) {
    var name = _ref.name,
        deleteType = _ref.deleteType;
    return _react2.default.createElement(
        'h3',
        { className: 'm-2 d-inline-block', onClick: function onClick() {
                return deleteType();
            } },
        _react2.default.createElement(
            'span',
            { className: 'badge badge-secondary position-relative' },
            _react2.default.createElement('i', { className: 'fas fa-times fa-lg position-absolute pointer category-icon-delete' }),
            name
        )
    );
};

exports.default = BlogTypeItem;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(5);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryList = function CategoryList(_ref) {
    var types = _ref.types,
        vocab = _ref.vocab,
        user = _ref.user,
        createType = _ref.createType,
        selectParentCategory = _ref.selectParentCategory,
        changeCategoryName = _ref.changeCategoryName,
        toggleShowModal = _ref.toggleShowModal;

    var modalProps = {
        isOn: vocab.isModalOn,
        title: '新增單字分類',
        toggleModal: function toggleModal() {
            return toggleShowModal(false);
        },
        submit: function submit() {
            var vocabCategory = {
                name: vocab.categoryName,
                updatedBy: user.myInfo.displayName,
                category: 'VOCAB',
                parent: vocab.category ? vocab.category.fullKeyRoute : null
            };
            createType(vocabCategory);
            toggleShowModal(false);
        }
    };
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
                'div',
                { className: 'd-flex row mx-0 mb-3 p-0' },
                vocab.category ? _react2.default.createElement('i', { className: 'fas fa-chevron-left mr-3 pt-1 pointer back-btn d-flex', onClick: function onClick() {
                        var parent = vocab.category && vocab.category.parent;
                        var childList = parent && types ? [] : Object.values(types).filter(function (t) {
                            return t.category === 'VOCAB' && t.fullKeyRoute && t.fullKeyRoute.indexOf('.') === -1;
                        });
                        if (parent) {
                            Object.values(types).forEach(function (type) {
                                if (parent && type.category === 'VOCAB' && type.parent === parent) {
                                    childList.push(type);
                                }
                            });
                        }
                        selectParentCategory(parent ? parent : null, childList);
                    } }) : _react2.default.createElement('div', { className: 'back-btn d-flex' }),
                _react2.default.createElement(
                    'h5',
                    { className: 'vocab-title d-flex m-0' },
                    vocab.category ? vocab.category.name : '單字庫分類列表'
                ),
                _react2.default.createElement('i', { className: 'fas fa-plus mr-3 pt-1 pointer add-btn d-flex', onClick: function onClick() {
                        return toggleShowModal(true);
                    } })
            ),
            _react2.default.createElement(
                'ul',
                { className: 'list-group' },
                vocab.childList.length > 0 ? vocab.childList.map(function (child) {
                    var offspring = types && Object.values(types).filter(function (t) {
                        return t.fullKeyRoute && t.fullKeyRoute.substr(0, t.fullKeyRoute.length - child.fullKeyRoute.length - 1) === child.fullKeyRoute;
                    });
                    return _react2.default.createElement(
                        'li',
                        { key: child.name, className: 'list-group-item d-flex justify-content-between align-items-center pointer',
                            onClick: function onClick() {
                                return selectParentCategory(child, offspring);
                            } },
                        child ? child.name : '',
                        _react2.default.createElement(
                            'span',
                            { className: 'badge badge-primary badge-pill' },
                            offspring && offspring.length > 0 ? offspring.length : ''
                        )
                    );
                }) : _react2.default.createElement(
                    'span',
                    null,
                    '\u672A\u8A2D\u5B9A\u55AE\u5B57\u5206\u985E'
                )
            )
        ),
        _react2.default.createElement(
            _Modal2.default,
            modalProps,
            _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement('input', { type: 'text', placeholder: '\u8F38\u5165\u540D\u7A31', className: 'form-control', onChange: function onChange(e) {
                        return changeCategoryName(e.target.value);
                    } })
            )
        )
    );
};

exports.default = CategoryList;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoc = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Login = (0, _hoc.LoginWrap)(function (props) {
    var authentication = props.authentication,
        errors = props.errors,
        changeUsername = props.changeUsername,
        changePassword = props.changePassword,
        login = props.login;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { id: 'login-container' },
            _react2.default.createElement(
                'h3',
                null,
                '\u5E33\u865F\u767B\u5165'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'form',
                            { onSubmit: function () {
                                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        event.preventDefault();
                                                        login({ username: authentication.form.username, password: authentication.form.password });

                                                    case 2:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, undefined);
                                    }));

                                    return function (_x) {
                                        return _ref.apply(this, arguments);
                                    };
                                }() },
                            _react2.default.createElement(
                                'div',
                                { className: 'input-group mb-3' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'input-group-prepend' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'input-group-text', id: 'email-label' },
                                        _react2.default.createElement('i', { className: 'fas fa-user-circle' })
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'email', className: 'form-control', placeholder: '\u5E33\u865F',
                                    value: authentication.form.username, required: true,
                                    onChange: function onChange(event) {
                                        return changeUsername(event.target.value);
                                    } })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'input-group mb-3' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'input-group-prepend' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'input-group-text', id: 'password-label' },
                                        _react2.default.createElement('i', { className: 'fas fa-key' })
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'password', className: 'form-control', placeholder: '\u5BC6\u78BC',
                                    value: authentication.form.password, required: true,
                                    onChange: function onChange(event) {
                                        return changePassword(event.target.value);
                                    } })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'submit', className: 'btn btn-customized',
                                        disabled: authentication.isLoading },
                                    authentication.isLoading ? '載入中...' : '登入'
                                )
                            )
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'position-fixed error-corner' },
            errors.map(function (e) {
                return _react2.default.createElement(
                    'div',
                    { key: e.message_zh, className: 'toast showing', role: 'alert', 'aria-live': 'assertive', 'aria-atomic': 'true' },
                    _react2.default.createElement(
                        'div',
                        { className: 'toast-header' },
                        _react2.default.createElement('img', { src: '/images/favicon.ico', className: 'rounded mr-2', alt: 'toast-logo' }),
                        _react2.default.createElement(
                            'strong',
                            { className: 'mr-auto' },
                            '錯誤訊息'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'toast-body' },
                        e.message_zh || '登入出現錯誤'
                    )
                );
            })
        )
    );
});

exports.default = {
    component: Login
};

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(39);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(7);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(40);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(41);

var _Routes = __webpack_require__(6);

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
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  var helmet = _reactHelmet.Helmet.renderStatic();
  return '\n    <html>\n      <head>\n        <meta charset=\'utf-8\'/>\n        <meta name=\'viewport\' content=\'width=device-width,initial-scale=1,user-scalable=no\'/>\n        <meta http-equiv=\'X-UA-Compatible\' content=\'ie=edge\'/>\n        <link rel=\'shortcut icon\' href=\'/images/favicon.ico\'/>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link rel="preconnect" href="https://fonts.gstatic.com" />\n        <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&display=swap" rel="stylesheet" />\n        <link rel="stylesheet" href="/css/all.min.css" />\n        <link rel="stylesheet" href="/css/bootstrap.min.css" />\n        <link rel="stylesheet" href="/css/quill.snow.css" />\n        <link rel="stylesheet" href="/css/style.css" />\n        <script src="/js/quill.min.js"></script>\n        <script src="/js/image-resize.min.js"></script>\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewares = undefined;

var _redux = __webpack_require__(10);

var _reduxThunk = __webpack_require__(43);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(44);

var _reducers2 = _interopRequireDefault(_reducers);

var _firebase = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = exports.middlewares = [_reduxThunk2.default.withExtraArgument(_firebase.firebaseApp)];

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, _redux.applyMiddleware.apply(undefined, middlewares));
  return store;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(10);

var _reducer = __webpack_require__(45);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(46);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(47);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(48);

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(49);

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(50);

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = __webpack_require__(51);

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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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