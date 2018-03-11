// var $ = require('jquery')
require('less/toast.less')
//这是一个toast的实现模块

function toast(msg,time) {
    this.msg = msg;
    this.dismissTime = time||1000;//ms
    this.createToast();//创建toast
    this.showToast();//展示toast
}
toast.prototype = {
    createToast: function () {
        var tpl = '<div class="toast">'+this.msg+'</div>';//拼接一个dom字符串
        this.$toast = $(tpl);//转化为jQuery对象
        $('body').append(this.$toast);  //注意，在样式设置的时候默认设置为隐藏，然后通过动画加载展现出来
    },
    showToast: function () {
        var _this = this;
        this.$toast.fadeIn(300,function () {    //fadin动画时长300
            setTimeout(function () {
                _this.$toast.fadeOut(300,function () {      //fadeout动画时长300
                    _this.$toast.remove();  //当fadeout动画结束以后，清楚这个dom节点
                });                 //                                     ⬆
            },_this.dismissTime);    //延时之前设置的持续时间，然后执行上面的代码：||
        })
    }
};

function Toast(msg,time) {
    return new toast(msg, time);    //用一个函数来代替--创建实例化对象
}
Toast('hello', 1000);
window.Toast = Toast;
module.exports.Toast = Toast;//只能访问这个函数

