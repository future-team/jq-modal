import $ from 'jquery';


var page = {
    event: function (evt) {
        var ev = evt || window.event;
        return ev;
    },
    pageX: function (evt) {
        var e = this.event(evt);
        return e.pageX || (e.clientX + document.body.scrollLeft - document.body.clientLeft);
    },
    pageY: function (evt) {
        var e = this.event(evt);
        return e.pageY || (e.clientY + document.body.scrollTop - document.body.clientTop);

    },
    layerX: function (evt) {
        var e = this.event(evt);
        return e.layerX || e.offsetX;
    },
    layerY: function (evt) {
        var e = this.event(evt);
        return e.layerY || e.offsetY;
    }
};

function Drag(id,current) {

    let needMove = current ? current: id;

    $(id).css({
        cursor:'move'
    });
    $(id).on('mousedown',function (e) {
        var d = document;
        var  that=needMove;
        var x = page.layerX(e);
        var y = page.layerY(e);
        if (that.setCapture) {
            that.setCapture();
        }
        else if (window.captureEvents) {
            window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
        }
        $(d).on('mousemove.drag-move', function (e) {
            var tx = page.pageX(e) - x;
            var ty = page.pageY(e) - y;
            that.css({
                top:ty,
                left:tx
            });
        });
        $(d).on('mouseup.drag-up', function () {
            if (that.releaseCapture) {
                that.releaseCapture();
            } else if (window.releaseEvents) {
                window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            }
            $(d).off('mousemove.drag-move').off('mouseup.drag-up');
        });
    });
}


export default Drag;