function animatemove(obj, target, callBack) {
    console.log('图片移动');
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        //步长写到定时器的里面
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画，本质是停止定时器
            clearInterval(obj.timer);

            //回调函数写到定时器结束里面
            if (callBack) {
                callBack();
            }
        }
        //把每次加1 这个步长值改为一个慢慢变小的值，步长公式：（目标值 - 现在的位置） / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}