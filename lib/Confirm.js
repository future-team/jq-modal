'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Options = require('./Options');

var _Options2 = _interopRequireDefault(_Options);

var _templateConfirmHtml = require('../template/confirm.html');

var _templateConfirmHtml2 = _interopRequireDefault(_templateConfirmHtml);

var Confirm = function Confirm() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Confirm);

    options = _jquery2['default'].extend({}, _Options2['default'], options);
    //确认模板
    //debugger;
    options.template = options.template ? options.template(options) : _templateConfirmHtml2['default'](options);
    return new _Modal2['default'](options);
};

exports['default'] = function (message, options) {
    options = _jquery2['default'].extend({
        message: message
    }, options || {});

    var d = new Confirm(options);
    d.show();
    return d;
};

module.exports = exports['default'];