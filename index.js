setInterval(drawDigitalClock, 1000);

function drawDigitalClock() {
    var digitalClockBox = document.getElementById("digitalClockBox");
    var context = digitalClockBox.getContext("2d");
    context.clearRect(0, 0, 500, 500);
    //内圆
    context.translate(250, 250);
    context.beginPath();
    context.arc(0, 0, 200, 0, 2*Math.PI);
    context.stroke();
    //外圆
    context.beginPath();
    context.arc(0, 0, 210, 0, 2*Math.PI);
    context.stroke();
    //画刻度
    for(i = 0; i < 12; i ++) {
        context.beginPath();
        var beginX = 180*Math.sin(i/6*Math.PI);
        var beginY = 180*Math.cos(i/6*Math.PI);
        context.moveTo(beginX, beginY);
        var endX = 200*Math.sin(i/6*Math.PI);
        var endY = 200*Math.cos(i/6*Math.PI);
        context.lineTo(endX, endY);
        context.stroke();
    }
    
    // 画时分秒针
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    //秒针
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(170*Math.sin(second/60*2*Math.PI), -170*Math.cos(second/60*2*Math.PI));
    context.stroke();
    //分针
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(140*Math.sin(minute/60*2*Math.PI), -140*Math.cos(minute/60*2*Math.PI));
    context.stroke();
    //时针
    if(hour >= 12) {
        hour -= 12;
    }

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(110*Math.sin(Math.PI/6*(hour*60+minute)/60), -110*Math.cos(Math.PI/6*(hour*60+minute)/60));
    context.stroke();
    //原点归左上角
    context.translate(-250,-250);
}