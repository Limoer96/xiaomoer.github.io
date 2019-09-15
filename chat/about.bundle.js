webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _card = __webpack_require__(101);

var _card2 = _interopRequireDefault(_card);

var _select = __webpack_require__(154);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(202);

__webpack_require__(204);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(208);

var _style2 = _interopRequireDefault(_style);

var _header = __webpack_require__(209);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var questions = [{ key: 1, message: 'Hello~', answer: 'Hello stranger, I\'m limoer, A front-end developer.', next: [2, 4, 5, 6] }, { key: 2, message: 'What\'s your profession?', answer: 'I\'m focuing on browser side developing, except using React stack.', next: [3, 4, 5, 6] }, { key: 3, message: 'More infomation~', answer: 'I\'m 23 years old now. I am working in Chongqing now. I worked in Shanghai a year ago.', next: [4, 5, 6] }, { key: 4, message: 'Show me your project!', answer: 'You can see almost all my projects at https://github.com/xiaomoer', next: [5, 6] }, { key: 5, message: 'How can I concat with you ?', answer: 'I am so happy about that, send email to me: myt19960503@outlook.com', next: [6, 7] }, { key: 6, message: 'Boring', answer: 'Blame me slightly! so Bye~', next: [1, 7] }, { key: 7, message: 'Bye~', answer: 'Bye~', next: [1] }];

var AboutAuthorPage = function (_Component) {
	_inherits(AboutAuthorPage, _Component);

	function AboutAuthorPage() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, AboutAuthorPage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AboutAuthorPage.__proto__ || Object.getPrototypeOf(AboutAuthorPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			nextQuestions: [1],
			isTyping: false,
			messages: []
		}, _this.handleChange = function (value) {
			var messages = [].concat(_toConsumableArray(_this.state.messages), [value]);
			_this.setState({ messages: messages, isTyping: true }); // 立马设置问题

			var _loop = function _loop(question) {
				if (question.message === value) {
					var offset = Math.ceil(Math.random() * 3);
					setTimeout(function () {
						_this.setState({
							messages: [].concat(_toConsumableArray(_this.state.messages), [question.answer]),
							nextQuestions: question.next,
							isTyping: false
						});
					}, offset * 1000);
					return 'break';
				}
			};

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = questions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var question = _step.value;

					var _ret2 = _loop(question);

					if (_ret2 === 'break') break;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}, _this.filter = function (keys) {
			var result = [];
			for (var i = 0; i < keys.length; i += 1) {
				result.push(questions[keys[i] - 1]);
			}
			return result;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(AboutAuthorPage, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var scrollHeight = this.messageContainer.scrollHeight;
			if (scrollHeight > 630) {
				this.messageContainer.scrollTop = scrollHeight - 620;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    nextQuestions = _state.nextQuestions,
			    messages = _state.messages,
			    isTyping = _state.isTyping;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_card2.default,
					{ className: _style2.default.card, hoverable: false },
					_react2.default.createElement(
						'div',
						{ className: _style2.default.headerWrapper },
						_react2.default.createElement('img', { src: _header2.default, alt: 'header' }),
						_react2.default.createElement(
							'p',
							null,
							'Limoer ',
							isTyping && 'is typing...'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: _style2.default.messages, ref: function ref(_ref2) {
								return _this2.messageContainer = _ref2;
							} },
						messages.map(function (message, index) {
							return _react2.default.createElement(
								'p',
								{ className: index % 2 === 0 ? _style2.default.question : _style2.default.answer },
								_react2.default.createElement(
									'span',
									null,
									message
								)
							);
						})
					),
					_react2.default.createElement(
						'div',
						{ className: _style2.default.selectQuestion },
						_react2.default.createElement(
							_select2.default,
							{
								onChange: this.handleChange,
								size: 'large',
								showSearch: true,
								style: { width: 375 },
								placeholder: 'Choose a question',
								optionFilterProp: 'children',
								filterOption: function filterOption(input, option) {
									return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
								}
							},
							this.filter(nextQuestions).map(function (question, index) {
								return _react2.default.createElement(
									Option,
									{ key: Math.random(index) * 10, value: question.message },
									question.message
								);
							})
						)
					)
				)
			);
		}
	}]);

	return AboutAuthorPage;
}(_react.Component);

exports.default = AboutAuthorPage;

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card":"MMM1aPW-j24DR1zQAwIE7","selectQuestion":"_1yBycfNnRNKWIckbrdpRul","messages":"_1V69c_scxdMDBIa8ioVpZA","question":"_3yH8CaoqFURIMTXeuj0NCR","answer":"q9AYx75FpYt8tuYfNpX5v","headerWrapper":"_1OLjPf6Pj0PyhBcK9IRs5p"};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea115d2310fb7190bf2117450396a026.png";

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _AboutAuthorPage = __webpack_require__(100);

var _AboutAuthorPage2 = _interopRequireDefault(_AboutAuthorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import setTokenHeader from './src/util/setTokenHeader';
// import App from './src/App';
// import './src/setRem';
// 设置token在请求头上
// if(localStorage.token) {
// 	setTokenHeader(localStorage.token);
// }

var dom = document.getElementById('app');
(0, _reactDom.render)(_react2.default.createElement(_AboutAuthorPage2.default, null), dom);

/***/ })

},[89]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BYm91dEF1dGhvclBhZ2UvQWJvdXRBdXRob3JQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL0Fib3V0QXV0aG9yUGFnZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbWFnZXMvaGVhZGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9hYm91dC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJxdWVzdGlvbnMiLCJrZXkiLCJtZXNzYWdlIiwiYW5zd2VyIiwibmV4dCIsIkFib3V0QXV0aG9yUGFnZSIsInN0YXRlIiwibmV4dFF1ZXN0aW9ucyIsImlzVHlwaW5nIiwibWVzc2FnZXMiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsInNldFN0YXRlIiwicXVlc3Rpb24iLCJvZmZzZXQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJmaWx0ZXIiLCJrZXlzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJzY3JvbGxIZWlnaHQiLCJtZXNzYWdlQ29udGFpbmVyIiwic2Nyb2xsVG9wIiwic3R5bGUiLCJjYXJkIiwiaGVhZGVyV3JhcHBlciIsImhlYWRlciIsInJlZiIsIm1hcCIsImluZGV4Iiwic2VsZWN0UXVlc3Rpb24iLCJ3aWR0aCIsImlucHV0Iiwib3B0aW9uIiwicHJvcHMiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJDb21wb25lbnQiLCJkb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLGlCQUFPQSxNQUF0QjtBQUNBLElBQU1DLFlBQVksQ0FDakIsRUFBQ0MsS0FBSyxDQUFOLEVBQVNDLFNBQVMsUUFBbEIsRUFBNEJDLFFBQVEscURBQXBDLEVBQTJGQyxNQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFqRyxFQURpQixFQUVqQixFQUFDSCxLQUFLLENBQU4sRUFBU0MsU0FBUywwQkFBbEIsRUFBOENDLFFBQVEsb0VBQXRELEVBQTRIQyxNQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFsSSxFQUZpQixFQUdqQixFQUFDSCxLQUFLLENBQU4sRUFBU0MsU0FBUyxrQkFBbEIsRUFBc0NDLFFBQVEsd0ZBQTlDLEVBQXdJQyxNQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTlJLEVBSGlCLEVBSWpCLEVBQUNILEtBQUssQ0FBTixFQUFTQyxTQUFTLHVCQUFsQixFQUEyQ0MsUUFBUSxtRUFBbkQsRUFBd0hDLE1BQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE5SCxFQUppQixFQUtqQixFQUFDSCxLQUFLLENBQU4sRUFBU0MsU0FBUyw2QkFBbEIsRUFBaURDLFFBQVEscUVBQXpELEVBQWdJQyxNQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBdEksRUFMaUIsRUFNakIsRUFBQ0gsS0FBSyxDQUFOLEVBQVNDLFNBQVMsUUFBbEIsRUFBNEJDLFFBQVEsNEJBQXBDLEVBQWtFQyxNQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBeEUsRUFOaUIsRUFPakIsRUFBQ0gsS0FBSyxDQUFOLEVBQVNDLFNBQVMsTUFBbEIsRUFBMEJDLFFBQVEsTUFBbEMsRUFBMENDLE1BQU0sQ0FBQyxDQUFELENBQWhELEVBUGlCLENBQWxCOztJQVVxQkMsZTs7Ozs7Ozs7Ozs7Ozs7c01BQ3BCQyxLLEdBQVE7QUFDUEMsa0JBQWUsQ0FBQyxDQUFELENBRFI7QUFFUEMsYUFBVSxLQUZIO0FBR1BDLGFBQVU7QUFISCxHLFFBS1JDLFksR0FBZSxVQUFDQyxLQUFELEVBQVc7QUFDekIsT0FBSUYsd0NBQWUsTUFBS0gsS0FBTCxDQUFXRyxRQUExQixJQUFvQ0UsS0FBcEMsRUFBSjtBQUNBLFNBQUtDLFFBQUwsQ0FBYyxFQUFFSCxrQkFBRixFQUFZRCxVQUFVLElBQXRCLEVBQWQsRUFGeUIsQ0FFb0I7O0FBRnBCLDhCQUdqQkssUUFIaUI7QUFJeEIsUUFBR0EsU0FBU1gsT0FBVCxLQUFxQlMsS0FBeEIsRUFBK0I7QUFDOUIsU0FBSUcsU0FBU0MsS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWdCLENBQTFCLENBQWI7QUFDQUMsZ0JBQVcsWUFBTTtBQUNoQixZQUFLTixRQUFMLENBQWM7QUFDYkgsOENBQWMsTUFBS0gsS0FBTCxDQUFXRyxRQUF6QixJQUFtQ0ksU0FBU1YsTUFBNUMsRUFEYTtBQUViSSxzQkFBZU0sU0FBU1QsSUFGWDtBQUdiSSxpQkFBVTtBQUhHLE9BQWQ7QUFLQSxNQU5ELEVBTUdNLFNBQVMsSUFOWjtBQU9BO0FBQ0E7QUFkdUI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR3pCLHlCQUFvQmQsU0FBcEIsOEhBQStCO0FBQUEsU0FBdkJhLFFBQXVCOztBQUFBLHVCQUF2QkEsUUFBdUI7O0FBQUEsNEJBVTdCO0FBRUQ7QUFmd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCekIsRyxRQU9ETSxNLEdBQVMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xCLE9BQU1DLFNBQVMsRUFBZjtBQUNBLFFBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUlGLEtBQUtHLE1BQXhCLEVBQWdDRCxLQUFHLENBQW5DLEVBQXNDO0FBQ3JDRCxXQUFPRyxJQUFQLENBQVl4QixVQUFVb0IsS0FBS0UsQ0FBTCxJQUFRLENBQWxCLENBQVo7QUFDQTtBQUNELFVBQU9ELE1BQVA7QUFDQSxHOzs7Ozt1Q0Fab0I7QUFDcEIsT0FBTUksZUFBZSxLQUFLQyxnQkFBTCxDQUFzQkQsWUFBM0M7QUFDQSxPQUFHQSxlQUFlLEdBQWxCLEVBQXVCO0FBQ3RCLFNBQUtDLGdCQUFMLENBQXNCQyxTQUF0QixHQUFrQ0YsZUFBZSxHQUFqRDtBQUNBO0FBQ0Q7OzsyQkFRUTtBQUFBOztBQUFBLGdCQUNzQyxLQUFLbkIsS0FEM0M7QUFBQSxPQUNBQyxhQURBLFVBQ0FBLGFBREE7QUFBQSxPQUNlRSxRQURmLFVBQ2VBLFFBRGY7QUFBQSxPQUN5QkQsUUFEekIsVUFDeUJBLFFBRHpCOztBQUVSLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLE9BQU0sV0FBV29CLGdCQUFNQyxJQUF2QixFQUE2QixXQUFXLEtBQXhDO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBV0QsZ0JBQU1FLGFBQXRCO0FBQ0MsNkNBQUssS0FBS0MsZ0JBQVYsRUFBa0IsS0FBSSxRQUF0QixHQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBV3ZCLG1CQUFZO0FBQXZCO0FBRkQsTUFERDtBQUtDO0FBQUE7QUFBQSxRQUFLLFdBQVdvQixnQkFBTW5CLFFBQXRCLEVBQWdDLEtBQUssYUFBQ3VCLEtBQUQ7QUFBQSxlQUFTLE9BQUtOLGdCQUFMLEdBQXdCTSxLQUFqQztBQUFBLFFBQXJDO0FBRUV2QixlQUFTd0IsR0FBVCxDQUFhLFVBQUMvQixPQUFELEVBQVVnQyxLQUFWO0FBQUEsY0FDWjtBQUFBO0FBQUEsVUFBRyxXQUFXQSxRQUFRLENBQVIsS0FBYyxDQUFkLEdBQWtCTixnQkFBTWYsUUFBeEIsR0FBbUNlLGdCQUFNekIsTUFBdkQ7QUFDQztBQUFBO0FBQUE7QUFBUUQ7QUFBUjtBQURELFFBRFk7QUFBQSxPQUFiO0FBRkYsTUFMRDtBQWNDO0FBQUE7QUFBQSxRQUFLLFdBQVcwQixnQkFBTU8sY0FBdEI7QUFDQztBQUFBO0FBQUE7QUFDQyxrQkFBVSxLQUFLekIsWUFEaEI7QUFFQyxjQUFLLE9BRk47QUFHQyx3QkFIRDtBQUlDLGVBQU8sRUFBQzBCLE9BQU8sR0FBUixFQUpSO0FBS0MscUJBQVksbUJBTGI7QUFNQywwQkFBaUIsVUFObEI7QUFPQyxzQkFBYyxzQkFBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsZ0JBQW1CQSxPQUFPQyxLQUFQLENBQWE1QixLQUFiLENBQW1CNkIsV0FBbkIsR0FBaUNDLE9BQWpDLENBQXlDSixNQUFNRyxXQUFOLEVBQXpDLEtBQWlFLENBQXBGO0FBQUE7QUFQZjtBQVVFLFlBQUtyQixNQUFMLENBQVlaLGFBQVosRUFBMkIwQixHQUEzQixDQUErQixVQUFDcEIsUUFBRCxFQUFXcUIsS0FBWDtBQUFBLGVBQXFCO0FBQUMsZUFBRDtBQUFBLFdBQVEsS0FBS25CLEtBQUtFLE1BQUwsQ0FBWWlCLEtBQVosSUFBcUIsRUFBbEMsRUFBc0MsT0FBT3JCLFNBQVNYLE9BQXREO0FBQWdFVyxrQkFBU1g7QUFBekUsU0FBckI7QUFBQSxRQUEvQjtBQVZGO0FBREQ7QUFkRDtBQURELElBREQ7QUFrQ0E7Ozs7RUF4RTJDd0MsZ0I7O2tCQUF4QnJDLGU7Ozs7Ozs7QUNoQnJCO0FBQ0Esa0JBQWtCLGdPOzs7Ozs7O0FDRGxCLGdGOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXNDLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBLHNCQUFPLDhCQUFDLHlCQUFELE9BQVAsRUFBNEJGLEdBQTVCLEUiLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vc3RhdGljL2ltYWdlcy9oZWFkZXIucG5nJztcclxuXHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcbmNvbnN0IHF1ZXN0aW9ucyA9IFtcclxuXHR7a2V5OiAxLCBtZXNzYWdlOiAnSGVsbG9+JywgYW5zd2VyOiAnSGVsbG8gc3RyYW5nZXIsIElcXCdtIGxpbW9lciwgQSBmcm9udC1lbmQgZGV2ZWxvcGVyLicsIG5leHQ6IFsyLCA0LCA1LCA2XX0sIFxyXG5cdHtrZXk6IDIsIG1lc3NhZ2U6ICdXaGF0XFwncyB5b3VyIHByb2Zlc3Npb24/JywgYW5zd2VyOiAnSVxcJ20gZm9jdWluZyBvbiBicm93c2VyIHNpZGUgZGV2ZWxvcGluZywgZXhjZXB0IHVzaW5nIFJlYWN0IHN0YWNrLicsIG5leHQ6IFszLCA0LCA1LCA2XX0sIFxyXG5cdHtrZXk6IDMsIG1lc3NhZ2U6ICdNb3JlIGluZm9tYXRpb25+JywgYW5zd2VyOiAnSVxcJ20gMjMgeWVhcnMgb2xkIG5vdy4gSSBhbSB3b3JraW5nIGluIENob25ncWluZyBub3cuIEkgd29ya2VkIGluIFNoYW5naGFpIGEgeWVhciBhZ28uJywgbmV4dDogWzQsIDUsIDZdfSxcclxuXHR7a2V5OiA0LCBtZXNzYWdlOiAnU2hvdyBtZSB5b3VyIHByb2plY3QhJywgYW5zd2VyOiAnWW91IGNhbiBzZWUgYWxtb3N0IGFsbCBteSBwcm9qZWN0cyBhdCBodHRwczovL2dpdGh1Yi5jb20veGlhb21vZXInLCBuZXh0OiBbNSwgNl19LFxyXG5cdHtrZXk6IDUsIG1lc3NhZ2U6ICdIb3cgY2FuIEkgY29uY2F0IHdpdGggeW91ID8nLCBhbnN3ZXI6ICdJIGFtIHNvIGhhcHB5IGFib3V0IHRoYXQsIHNlbmQgZW1haWwgdG8gbWU6IG15dDE5OTYwNTAzQG91dGxvb2suY29tJywgbmV4dDogWzYsIDddfSxcclxuXHR7a2V5OiA2LCBtZXNzYWdlOiAnQm9yaW5nJywgYW5zd2VyOiAnQmxhbWUgbWUgc2xpZ2h0bHkhIHNvIEJ5ZX4nLCBuZXh0OiBbMSwgN119LFxyXG5cdHtrZXk6IDcsIG1lc3NhZ2U6ICdCeWV+JywgYW5zd2VyOiAnQnllficsIG5leHQ6IFsxXX1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRBdXRob3JQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0ZSA9IHtcclxuXHRcdG5leHRRdWVzdGlvbnM6IFsxXSxcclxuXHRcdGlzVHlwaW5nOiBmYWxzZSxcclxuXHRcdG1lc3NhZ2VzOiBbXSxcclxuXHR9XHJcblx0aGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcblx0XHRsZXQgbWVzc2FnZXMgPSBbLi4udGhpcy5zdGF0ZS5tZXNzYWdlcywgdmFsdWVdO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzLCBpc1R5cGluZzogdHJ1ZSB9KTsgLy8g56uL6ams6K6+572u6Zeu6aKYXHJcblx0XHRmb3IobGV0IHF1ZXN0aW9uIG9mIHF1ZXN0aW9ucykge1xyXG5cdFx0XHRpZihxdWVzdGlvbi5tZXNzYWdlID09PSB2YWx1ZSkge1xyXG5cdFx0XHRcdGxldCBvZmZzZXQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2VzOiBbLi4udGhpcy5zdGF0ZS5tZXNzYWdlcywgcXVlc3Rpb24uYW5zd2VyXSxcclxuXHRcdFx0XHRcdFx0bmV4dFF1ZXN0aW9uczogcXVlc3Rpb24ubmV4dCxcclxuXHRcdFx0XHRcdFx0aXNUeXBpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9LCBvZmZzZXQgKiAxMDAwKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMubWVzc2FnZUNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcblx0XHRpZihzY3JvbGxIZWlnaHQgPiA2MzApIHtcclxuXHRcdFx0dGhpcy5tZXNzYWdlQ29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodCAtIDYyMDtcclxuXHRcdH1cclxuXHR9XHJcblx0ZmlsdGVyID0gKGtleXMpID0+IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKz0xKSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHF1ZXN0aW9uc1trZXlzW2ldLTFdKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBuZXh0UXVlc3Rpb25zLCBtZXNzYWdlcywgaXNUeXBpbmcgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17c3R5bGUuY2FyZH0gaG92ZXJhYmxlPXtmYWxzZX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyV3JhcHBlcn0+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtoZWFkZXJ9IGFsdD0naGVhZGVyJy8+XHJcblx0XHRcdFx0XHRcdDxwPkxpbW9lciB7aXNUeXBpbmcgJiYgJ2lzIHR5cGluZy4uLid9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWVzc2FnZXN9IHJlZj17KHJlZikgPT4gdGhpcy5tZXNzYWdlQ29udGFpbmVyID0gcmVmfT5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17aW5kZXggJSAyID09PSAwID8gc3R5bGUucXVlc3Rpb24gOiBzdHlsZS5hbnN3ZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57IG1lc3NhZ2UgfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWxlY3RRdWVzdGlvbn0+XHJcblx0XHRcdFx0XHRcdDxTZWxlY3QgXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdHNpemU9J2xhcmdlJ1xyXG5cdFx0XHRcdFx0XHRcdHNob3dTZWFyY2hcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e3dpZHRoOiAzNzV9fVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDaG9vc2UgYSBxdWVzdGlvbidcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25GaWx0ZXJQcm9wPSdjaGlsZHJlbidcclxuXHRcdFx0XHRcdFx0XHRmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PiBvcHRpb24ucHJvcHMudmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZpbHRlcihuZXh0UXVlc3Rpb25zKS5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4gPE9wdGlvbiBrZXk9e01hdGgucmFuZG9tKGluZGV4KSAqIDEwfSB2YWx1ZT17cXVlc3Rpb24ubWVzc2FnZX0+e3F1ZXN0aW9uLm1lc3NhZ2V9PC9PcHRpb24+KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXRBdXRob3JQYWdlL0Fib3V0QXV0aG9yUGFnZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNhcmRcIjpcIk1NTTFhUFctajI0RFIxelFBd0lFN1wiLFwic2VsZWN0UXVlc3Rpb25cIjpcIl8xeUJ5Y2ZOblJOS1dJY2ticmRwUnVsXCIsXCJtZXNzYWdlc1wiOlwiXzFWNjljX3NjeGRNREJJYThpb1ZwWkFcIixcInF1ZXN0aW9uXCI6XCJfM3lIOENhb3FGVVJJTVRYZXVqME5DUlwiLFwiYW5zd2VyXCI6XCJxOUFZeDc1RnBZdDh0dVlmTnBYNXZcIixcImhlYWRlcldyYXBwZXJcIjpcIl8xT0xqUGY2UGowUHloQmNLOUlSczVwXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXRBdXRob3JQYWdlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMjA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhMTE1ZDIzMTBmYjcxOTBiZjIxMTc0NTAzOTZhMDI2LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0YXRpYy9pbWFnZXMvaGVhZGVyLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9ICBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQWJvdXRBdXRob3JQYWdlIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXRBdXRob3JQYWdlL0Fib3V0QXV0aG9yUGFnZSc7XHJcbi8vIGltcG9ydCBzZXRUb2tlbkhlYWRlciBmcm9tICcuL3NyYy91dGlsL3NldFRva2VuSGVhZGVyJztcclxuLy8gaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9BcHAnO1xyXG4vLyBpbXBvcnQgJy4vc3JjL3NldFJlbSc7XHJcbi8vIOiuvue9rnRva2Vu5Zyo6K+35rGC5aS05LiKXHJcbi8vIGlmKGxvY2FsU3RvcmFnZS50b2tlbikge1xyXG4vLyBcdHNldFRva2VuSGVhZGVyKGxvY2FsU3RvcmFnZS50b2tlbik7XHJcbi8vIH1cclxuXHJcbmNvbnN0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxucmVuZGVyKDxBYm91dEF1dGhvclBhZ2UgLz4sIGRvbSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWJvdXQuanMiXSwic291cmNlUm9vdCI6IiJ9