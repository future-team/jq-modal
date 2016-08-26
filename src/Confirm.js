import $ from 'jquery';
import Modal from './Modal';
import opts from './Options';
import defaultTemplate from '../template/confirm.html';

let Confirm = class Confirm{

    constructor(options = {}){

        options = $.extend({},opts,options);
        //确认模板
        //debugger;
        options.template = options.template ? options.template(options) :defaultTemplate(options);
        return new Modal(options);
    }

};

export default (message,options)=>{
    options = $.extend({
        message:message
    }, options || {});

    let d = new Confirm(options);
    d.show();
    return d;
};