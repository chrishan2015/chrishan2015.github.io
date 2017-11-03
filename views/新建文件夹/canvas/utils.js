//将utils定义为window对象下的一个属性，属性值为对象
window.utils = {};

//在utils对象上定义捕获坐标的方法
window.utils.captureMouse = function(element){
    //定义一个名为mouse的对象
    var mouse = {x:0,y:0};
    //为元素绑定mousemove时间
    element.addEventListener("mousemove", function(event){
        var x,y,
            event = event || window.event;
        //获取鼠标位于当前屏幕的位置，并做兼容处理
        if(event.pageX){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        }
        //将当前的坐标值减去元素的偏移位置，即为鼠标位于当前canvas的位置
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    }, false);

    //返回值为mouse对象
    return mouse;
}
/*
canvas.addEventListener('mousedown',function(event){
   //event兼容处理
   var event = event || window.event;
   //兼容处理，获取当前鼠标相对屏幕的坐标
   var winX = event.clientX+document.body.scrollLeft +document.documentElement.scrollLeft || event.pageX;
   var winY = event.clientY+document.body.scrollTop +document.documentElement.scrollTop || event.pageY;

    //定义一个对象
   var can = {x:0, y:0};
   //调用getBoundingClientRect方法，该方法返回一个对象，包含canvas的left、 top、 width、 height等值

   var canBox = canvas.getBoundingClientRect();

   //（winX - canBox.left）：与上面的含义一样，是减去canvas的偏移量
   //（canvas.width/canBox.width）：一般来说canvas.width和canBox.width是一样的，也就是说这两个的比值为1.但不排除你会为canvas设置边框，这是实际的坐标位置就会有所变化，比如canvas.width = 500, 你可能设置了一个1px的边框，那么canBox.width = 502, 所以比值就不为1了。这样做只是让数据更精确。

   can.x = (winX - canBox.left)*(canvas.width/canBox.width);
   can.y = (winY - canBox.top)*(canvas.height/canBox.height);

   //输出
   console.log(can.x，can.y);
},false);
 */
window.utils.captureTouch = function(element){
    var touch = {
        x: null,
        y: null,
        isPressed: false,
        event: null
    };
    var body_scrollLeft = document.body.scrollLeft,
        element_scrollLeft = document.documentElement.scrollLeft,
        body_scrollTop = document.body.scrollTop,
        element_scrollTop = document.documentElement.scrollTop,
        offsetLeft = element.offsetLleft,
        offsetTop = element.offsetTop;

    //绑定touchstart事件
    element.addEventListener("touchstart",function(event){
        touch.isPressed = true;
        touch.event = event;
    },false);

    //绑定touchend事件
    element.addEventListener("touchend",function(event){
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
        touch.event = event;
    },false);

    //绑定touchmove事件
    element.addEventListener("touchmove",function(event){
        var x,y,
            touch_event = event.touches[0];//第一次touch

        if(touch_event.pageX){
            x = touch_event.pageX;
            y = touch_event.pageY;
        }else{
            x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
            y = touch_event.clientY + body_scrollTop + element_scrollTop;
        }
        //减去偏移量
        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;
    },false);

    //返回touch对象
    return touch;
}

//动画循环
if(!window.requestAnimationFrame){
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    function(callback){
                                        return window.setTimeout(callback, 17);//1000/60
                                    });
}
//取消动画循环
if(!window.cancelAnimationFrame){
    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
                                    window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
                                    window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
                                    window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
                                    window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
                                    window.clearTimeout);
}
window.utils = function(rect,x,y){
    return !(x<rect.x||x>rect.x+rect.width||y<rect.y||y>rect.y+rect.height)
}