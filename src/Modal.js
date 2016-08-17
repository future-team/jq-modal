import $ from 'jquery';
import Drag from './Drag';

//let modalMap = {};

let index = 0;

class Modal{

    constructor(options){

        this.options = options;

        //定义容器唯一标识
        this.id = `future-modal-${+new Date()}`;

        this.iframe = null;

        this.display = 'hide';

        //检查是否存在，否则创建modal容器
        this.modal = $(`#${this.id}`);

        this.body = $(document.body);
        this.create();

        //this.bindEvent();
    }

    createModal(){
        if(this.modal.size() <=0 && (!this.options.modal||this.options.modal.size()<=0 ) ){
            let modal = document.createElement('div');
            modal.id = this.id;
            //modal.className = 'f-modal';
            this.body.append(modal);
            this.modal = $(modal);

            this.bindEvent();
        }
    }

    //创建一个mask背景层
    createMask(){
        let id = 'future-modal-iframe';
        let iframe = $(`#${id}`);

        if(iframe.size()<=0 ){
            iframe = document.createElement('div');
            iframe.id = id;
            iframe.className = 'f-modal-background';
            this.body.append(iframe);
        }

        this.iframe = $(iframe);
    }

    //显示
    show(){
        this.iframe.fadeIn(this.options.duration);
        this.modal.fadeIn(this.options.duration);
        this.display = 'hide';
        index+=1;
    }
    //隐藏
    hide(){
        index-=1;
        if(index<=0){
            this.iframe.fadeOut(this.options.duration);
        }
        var _this = this;
        this.modal.fadeOut(this.options.duration,function(){
            _this.dispose();
        });
        this.display = 'show';
    }

    toggle(){
        this[this.display]();
    }

    dispose(){
        if(!this.options.modal){
            this.modal.remove();
        }
    }

    resizeHandler(_this){
        _this.setCenter();
        _this.options.resizeCallback();
    }
    //拖拽

    setCenter(){

        var o = {
                left:Math.max(0,(document.documentElement.clientWidth-this.modal.width()*1)/2) ,
                top: Math.max(0,(document.documentElement.clientHeight-this.modal.height()*1)/2)
            },
            m = {
                width: Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth, document.body.clientWidth, document.body.scrollWidth),
                height: Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.clientHeight, document.body.scrollHeight)
            };
        if(this.options.isMask){
            this.iframe.css({
                width:m.width,
                height:m.height
            });
        }
        this.modal.css({
            position:'fixed',
            left:o.left,
            top:o.top
        });
    }

    create(element=this.options.modal){
        let c = {};

        if(this.options.isMask){
            this.createMask();
        }

        if(element && element.size() > 0 ){
            c.width = element.width();
            c.height = element.height();
            element.addClass('f-modal');
            this.modal = element;

            //debugger;
            if(this.modal.data('bindEvent')!=1){
                if(this.options.isClose){
                    element.append($('<div class="close modal-close"></div>'));
                }
                this.bindEvent();
            }
            this.modal.data('bindEvent',1);
            this.drag(element.find('.header'));
            //this.container.append(this.element.clone(true) );
        }else{
            this.createModal();
            this.modal.html(this.options.template );
        }

        this.modal.css($.extend({
            position:'fixed',
            display:'none',
            zIndex:'7001'
        },c) );

        this.setCenter();
    }

    drag(id){
        if(this.options.isDrag){
            Drag(id,this.modal);
        }
    }

    bindEvent(){
        let _this = this,
            options = this.options,
            _click = this.options.isDrag ? 'mousedown' : 'click';

        this.modal.on(_click,'.modal-close',()=>{
            this.hide();
            options.closeCallback(this);
        });
        this.modal.on(_click,'.modal-success',()=>{
            this.hide();
            options.successCallback(this);
        } );
        this.modal.on(_click,'.modal-cancel',()=>{
            this.hide();
            options.cancelCallback(this)
        });
        $(window).off('resize scroll').on('resize scroll', ()=>{
            _this.resizeHandler(_this);
        } );
    }
}

export default Modal;