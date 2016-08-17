import '../../src/index.js';
import {mask,alert,confirm} from '../../src/index.js';
import $ from 'jquery';

import '../../css/demo.less';

/*setTimeout(()=>{
    //confirm('#dialog-test');
},2000);*/

//弹出alert

$('#alert').click(function(){
    alert('测试一下模态框是可以的');
});

$('#confirm').click(function(){
    confirm('您确定要退出支付页面吗？',{
        successCallback:function(){
            //debugger;
            console.dir('successCallback');

        },
        cancelCallback:function(){
            console.dir('cancelCallback');
        }
    });
});

$('#custom').click(function(){
    mask($('#dialog-test'),{
        closeCallback:()=>{
            console.dir('关闭1');
        }
    });
});
$('#custom2').click(function(){
    $('#dialog-test1').mask({
        closeCallback:()=>{
            console.dir('关闭2');
        }
    });
    alert('测试一下模态框是可以的');
});
