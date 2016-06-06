'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var page = {
    event: function event(evt) {
        var ev = evt || window.event;
        return ev;
    },
    pageX: function pageX(evt) {
        var e = this.event(evt);
        return e.pageX || e.clientX + document.body.scrollLeft - document.body.clientLeft;
    },
    pageY: function pageY(evt) {
        var e = this.event(evt);
        return e.pageY || e.clientY + document.body.scrollTop - document.body.clientTop;
    },
    layerX: function layerX(evt) {
        var e = this.event(evt);
        return e.layerX || e.offsetX;
    },
    layerY: function layerY(evt) {
        var e = this.event(evt);
        return e.layerY || e.offsetY;
    }
};

function Drag(id, current) {

    var needMove = current ? current : id;

    _jquery2['default'](id).css({
        cursor: 'move'
    });
    _jquery2['default'](id).on('mousedown', function (e) {
        var d = document;
        var that = needMove;
        var x = page.layerX(e);
        var y = page.layerY(e);
        if (that.setCapture) {
            that.setCapture();
        } else if (window.captureEvents) {
            window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
        }
        _jquery2['default'](d).on('mousemove.drag-move', function (e) {
            var tx = page.pageX(e) - x;
            var ty = page.pageY(e) - y;
            that.css({
                top: ty,
                left: tx
            });
        });
        _jquery2['default'](d).on('mouseup.drag-up', function () {
            if (that.releaseCapture) {
                that.releaseCapture();
            } else if (window.releaseEvents) {
                window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            }
            _jquery2['default'](d).off('mousemove.drag-move').off('mouseup.drag-up');
        });
    });
}

exports['default'] = Drag;
module.exports = exports['default'];