import $ from 'jquery';
import Modal from './Modal';
import opts from './Options';
import defaultTemplate from '../template/confirm.html';

class Confirm{

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

export default (message,options)=>{
    options = $.extend({
        message:message
    }, options || {});

    let d = new Confirm(options).getModal();
    d.show();
    return d;
};