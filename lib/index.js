'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../css/modal.less');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

//cmd导出

var _Dialog3 = _interopRequireDefault(_Dialog);

exports.mask = _Dialog3['default'];

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

exports.confirm = _Confirm2['default'];

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

exports.alert = _Alert2['default'];

//全局导出
if (typeof Modal == 'undefined') {
    window.Modal = {};

    for (var item in exports) {
        Modal[item] = exports[item];
    }
}

//jquery插件导出
_jquery2['default'].fn.extend({
    mask: function mask(opt) {
        _Dialog2['default'](this, opt);

        return this;
    }
});