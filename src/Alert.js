import $ from 'jquery';
import Modal from './Modal';
import opts from './Options';
import defaultTemplate from '../template/alert.html';

class Alert{

    constructor(options = {}){

        options = $.extend({},opts,options);
        //确认模板
        options.template = options.template ? options.template(options) :defaultTemplate(options);
        this.modal = new Modal(options);
    }

    getModal(){
        return this.modal;
    }

}

export default (message,options)=>{
    options = $.extend({
        message:message,
        title:'警告'
    }, options || {});

    let d = new Alert(options).getModal();
    d.show();
    return d;
};