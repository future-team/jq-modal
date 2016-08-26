import $ from 'jquery';
import Modal from './Modal';
import opts from './Options';
import defaultTemplate from '../template/dialog.html';

class Dialog{

    constructor(options = {}){

        options = $.extend({},opts,options);
        //确认模板
        //debugger;
        options.template = options.template ? options.template(options) :defaultTemplate(options);
        this.modal= new Modal(options);
    }

    getModal(){
        return this.modal;
    }
}

export default (id,options)=>{
    options = $.extend({
        modal:typeof(id)!='string'?$(id) :null,
        content:typeof(id)=='string'?id :null
    }, options || {});

    let d = new Dialog(options).getModal();
    d.show();
    return d;
};