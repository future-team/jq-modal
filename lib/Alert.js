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

var _templateAlertHtml = require('../template/alert.html');

var _templateAlertHtml2 = _interopRequireDefault(_templateAlertHtml);

var Alert = (function () {
    function Alert() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Alert);

        options = _jquery2['default'].extend({}, _Options2['default'], options);
        //确认模板
        options.template = options.template ? options.template(options) : _templateAlertHtml2['default'](options);
        this.modal = new _Modal2['default'](options);
    }

    Alert.prototype.getModal = function getModal() {
        return this.modal;
    };

    return Alert;
})();

exports['default'] = function (message, options) {
    options = _jquery2['default'].extend({
        message: message,
        title: '警告'
    }, options || {});

    var d = new Alert(options).getModal();
    d.show();
    return d;
};

module.exports = exports['default'];