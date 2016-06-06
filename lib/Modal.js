'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Drag = require('./Drag');

var _Drag2 = _interopRequireDefault(_Drag);

//let modalMap = {};

var Modal = (function () {
    function Modal(options) {
        _classCallCheck(this, Modal);

        this.options = options;

        //定义容器唯一标识
        this.id = 'future-modal-' + +new Date();

        this.iframe = null;

        this.display = 'hide';

        //检查是否存在，否则创建modal容器
        this.modal = _jquery2['default']('#' + this.id);

        this.body = _jquery2['default'](document.body);
        this.create();

        //this.bindEvent();
    }

    Modal.prototype.createModal = function createModal() {
        if (this.modal.size() <= 0 && (!this.options.modal || this.options.modal.size() <= 0)) {
            var modal = document.createElement('div');
            modal.id = this.id;
            //modal.className = 'f-modal';
            this.body.append(modal);
            this.modal = _jquery2['default'](modal);

            this.bindEvent();
        }
    };

    //创建一个mask背景层

    Modal.prototype.createMask = function createMask() {
        var id = 'future-modal-iframe';
        var iframe = _jquery2['default']('#' + id);

        if (iframe.size() <= 0) {
            iframe = document.createElement('div');
            iframe.id = id;
            iframe.className = 'f-modal-background';
            this.body.append(iframe);
        }

        this.iframe = _jquery2['default'](iframe);
    };

    //显示

    Modal.prototype.show = function show() {
        this.iframe.fadeIn(this.options.duration);
        this.modal.fadeIn(this.options.duration);
        this.display = 'hide';
    };

    //隐藏

    Modal.prototype.hide = function hide() {
        var _this = this;
        this.iframe.fadeOut(this.options.duration);
        this.modal.fadeOut(this.options.duration, function () {
            _this.dispose();
        });
        this.display = 'show';
    };

    Modal.prototype.toggle = function toggle() {
        this[this.display]();
    };

    Modal.prototype.dispose = function dispose() {
        if (!this.options.modal) {
            this.modal.remove();
        }
    };

    Modal.prototype.resizeHandler = function resizeHandler(_this) {
        _this.setCenter();
        _this.options.resizeCallback();
    };

    //拖拽

    Modal.prototype.setCenter = function setCenter() {

        var o = {
            left: Math.max(0, (document.documentElement.clientWidth - this.modal.width() * 1) / 2),
            top: Math.max(0, (document.documentElement.clientHeight - this.modal.height() * 1) / 2)
        },
            m = {
            width: Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth, document.body.clientWidth, document.body.scrollWidth),
            height: Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.clientHeight, document.body.scrollHeight)
        };
        if (this.options.isMask) {
            this.iframe.css({
                width: m.width,
                height: m.height
            });
        }
        this.modal.css({
            position: 'fixed',
            left: o.left,
            top: o.top
        });
    };

    Modal.prototype.create = function create() {
        var element = arguments.length <= 0 || arguments[0] === undefined ? this.options.modal : arguments[0];

        var c = {};

        if (this.options.isMask) {
            this.createMask();
        }

        if (element && element.size() > 0) {
            c.width = element.width();
            c.height = element.height();
            element.addClass('f-modal');
            this.modal = element;

            //debugger;
            if (this.modal.data('bindEvent') != 1) {
                if (this.options.isClose) {
                    element.append(_jquery2['default']('<div class="close modal-close"></div>'));
                }
                this.bindEvent();
            }
            this.modal.data('bindEvent', 1);
            this.drag(element.find('.header'));
            //this.container.append(this.element.clone(true) );
        } else {
                this.createModal();
                this.modal.html(this.options.template);
            }

        this.modal.css(_jquery2['default'].extend({
            position: 'fixed',
            display: 'none',
            zIndex: '7001'
        }, c));

        this.setCenter();
    };

    Modal.prototype.drag = function drag(id) {
        if (this.options.isDrag) {
            _Drag2['default'](id, this.modal);
        }
    };

    Modal.prototype.bindEvent = function bindEvent() {
        var _this2 = this;

        var _this = this,
            options = this.options,
            _click = this.options.isDrag ? 'mousedown' : 'click';

        this.modal.on(_click, '.modal-close', function () {
            _this2.hide();
            options.closeCallback(_this2);
        });
        this.modal.on(_click, '.modal-success', function () {
            _this2.hide();
            options.successCallback(_this2);
        });
        this.modal.on(_click, '.modal-cancel', function () {
            _this2.hide();
            options.cancelCallback(_this2);
        });
        _jquery2['default'](window).off('resize scroll').on('resize scroll', function () {
            _this.resizeHandler(_this);
        });
    };

    return Modal;
})();

exports['default'] = Modal;
module.exports = exports['default'];