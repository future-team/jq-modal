import $ from 'jquery';
import Modal from './Modal';
import opts from './Options';
import defaultTemplate from '../template/alert.html';

let Alert = class Alert{

    constructor(options = {}){

        options = $.extend({},opts,options);
        //确认模板
        options.template = options.template ? options.template(options) :defaultTemplate(options);
        return new Modal(options);
    }

};

export default (message,options)=>{
    options = $.extend({
        message:message,
        title:'警告'
    }, options || {});

    let d = new Alert(options);
    d.show();
    return d;
};