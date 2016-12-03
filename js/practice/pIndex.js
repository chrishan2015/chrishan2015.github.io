window.onload = function(){
    var canvas = document.querySelector("#canvas"),
        context = canvas.getContext("2d"),
        canvasWidth = canvas.offsetWidth,
        canvasHeight = canvas.offsetHeight,
        circleR = canvasWidth*4/10,//大圆的半径
        centerX = canvasWidth/2,//大圆的圆心横坐标
        centerY = canvasHeight/2,//大圆的圆心纵坐标
        timeLength = canvasWidth/40,//外圆的刻度长度
        centerR = canvasWidth/80,//里面实心圆的半径
        hourLen = canvasWidth/8,//时针长度
        monuteLen = canvasWidth/6,//分针长度
        secondLen = canvasWidth/5;//秒针长度

    //画表盘
    function drawCircle(){
        context.clearRect(0,0,canvas.width,canvas.height);
        context.save();
        context.translate(centerX,centerY);
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = "2";
        for(var i = 0; i < 12; i++){
            context.moveTo(circleR*Math.cos(i*Math.PI/6),circleR*Math.sin(i*Math.PI/6));
            context.lineTo((circleR-timeLength)*Math.cos(i*Math.PI/6),(circleR-timeLength)*Math.sin(i*Math.PI/6));
        }
        context.stroke();
        context.moveTo(0,0);
        context.arc(0,0,centerR,0,Math.PI*2,false);
        context.fillStyle = "#fff";
        context.fill();
        drawTimer();//画三个指针
    }

    //画三个指针
    function drawTimer(){
        context.beginPath();
        var nowTime = new Date(),
            hour = nowTime.getHours()%12,
            minute = nowTime.getMinutes(),
            second = nowTime.getSeconds();
        context.moveTo(0,0);
        //画时针
        context.lineTo(hourLen*Math.cos(Math.PI/2-hour*Math.PI/6-Math.PI*minute/(6*60)-Math.PI*second/(6*60*60)),-hourLen*Math.sin(Math.PI/2-hour*Math.PI/6-Math.PI*minute/(6*60)-Math.PI*second/(6*60*60)));
        //画分针
        context.moveTo(0,0);
        context.lineTo(monuteLen*Math.cos(Math.PI/2-Math.PI*2*minute/60-Math.PI*second/(6*60*60)),-monuteLen*Math.sin(Math.PI/2-Math.PI*2*minute/60-Math.PI*second/(6*60*60)));
        //画秒针
        context.moveTo(0,0);
        context.lineTo(secondLen*Math.cos(Math.PI/2-Math.PI*2*second/60),-secondLen*Math.sin(Math.PI/2-Math.PI*2*second/60));
        context.stroke();
        context.restore();
        window.requestAnimationFrame(drawCircle);
    }

    drawCircle();
}