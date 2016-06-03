let options = {

    //标题
    title:'提示',
    message:'这是内容',
    //动画时间
    duration:200,
    //是否显示关闭按钮
    isClose:true,
    //是否可拖动
    isDrag:true,
    //是否显示mask背景层
    isMask:true,
    //模板
    template:null,
    //默认确定与取消文案
    confirm:'确定',
    cancel:'取消',
    modal:null,
    //在打开窗口之前执行
    beforeCallback: function() {
    },
    //在被改变大小时执行
    resizeCallback: function(){},
    //取消执行
    cancelCallback: function() {
        //this.hide();
    },
    //确定后执行
    successCallback: function(){
        //this.hide();
    },
    //关闭前执行
    closeCallback: function() {
        //this.hide();
    }
};

export default options;