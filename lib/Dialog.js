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

var _templateDialogHtml = require('../template/dialog.html');

var _templateDialogHtml2 = _interopRequireDefault(_templateDialogHtml);

var Dialog = (function () {
    function Dialog() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Dialog);

        options = _jquery2['default'].extend({}, _Options2['default'], options);
        //确认模板
        //debugger;
        options.template = options.template ? options.template(options) : _templateDialogHtml2['default'](options);
        this.modal = new _Modal2['default'](options);
    }

    Dialog.prototype.getModal = function getModal() {
        return this.modal;
    };

    return Dialog;
})();

exports['default'] = function (id, options) {
    options = _jquery2['default'].extend({
        modal: typeof id != 'string' ? _jquery2['default'](id) : null,
        content: typeof id == 'string' ? id : null
    }, options || {});

    var d = new Dialog(options).getModal();
    d.show();
    return d;
};

module.exports = exports['default'];