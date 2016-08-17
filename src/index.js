import '../css/modal.less';
import $ from 'jquery';
import dialog from './Dialog';
//cmd导出
export mask from './Dialog';
export confirm from './Confirm';
export alert from './Alert';

//全局导出
if(typeof(Modal) == 'undefined'){
    window.Modal = {};

    for(let item in exports){
        Modal[item] = exports[item];
    }
}

//jquery插件导出
$.fn.extend({
    mask:function(opt){
        dialog(this,opt);

        return this;
    }
});