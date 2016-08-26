import $ from 'jquery';
import Modal from './Modal';
import opts from './Options';
import defaultTemplate from '../template/dialog.html';

let Dialog = class Dialog{

    constructor(options = {}){

        options = $.extend({},opts,options);
        //确认模板
        //debugger;
        options.template = options.template ? options.template(options) :defaultTemplate(options);
        return new Modal(options);
    }

};

export default (id,options)=>{
    options = $.extend({
        modal:typeof(id)!='string'?$(id) :null,
        content:typeof(id)=='string'?id :null
    }, options || {});

    let d = new Dialog(options);
    d.show();
    return d;
};