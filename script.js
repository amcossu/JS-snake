window.onload = function(){

    var canvas;
    var ctx;
    var delay = 1000;
    var xCoord = 0;
    var yCoord = 0;

    init();

    function init(){
        //creation of canvas
        canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";
        //attach canvas to body
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
        
    }

    function refreshCanvas(){
        xCoord +=2;
        yCoord +=2;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(xCoord, yCoord, 100, 50);
        setTimeout(refreshCanvas, delay);

    }
    
}
