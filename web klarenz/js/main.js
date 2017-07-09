$( "button" ).click(function() {
  $( "#all-canvas" ).toggle( "slow" );
  $( "#all-canvas-2" ).toggle( "slow" );
});

//Empieza canvas 1//
function calcPointsCirc( cx,cy, rad, dashLength)
{
    var n = rad/dashLength,
        alpha = Math.PI * 2 / n,
        pointObj = {},
        points = [],
        i = -1;
        
    while( i < n )
    {
        var theta = alpha * i,
            theta2 = alpha * (i+1);
        
        points.push({x : (Math.cos(theta) * rad) + cx, y : (Math.sin(theta) * rad) + cy, ex : (Math.cos(theta2) * rad) + cx, ey : (Math.sin(theta2) * rad) + cy});
   i+=2;
    }              
    return points;            
} 

var canvas = document.getElementById('canvas1'),
    ctx = canvas.getContext('2d');

canvas.width = canvas.height= 500;

var pointArray= calcPointsCirc(250,250,245, 1);
    ctx.strokeStyle = "white";
    ctx.beginPath();

    for(p = 0; p < pointArray.length; p++){
        ctx.moveTo(pointArray[p].x, pointArray[p].y);
        ctx.lineTo(pointArray[p].ex, pointArray[p].ey);
        
        ctx.stroke();
    }

    ctx.closePath();


//Empieza canvas rotativo 1

var Canvas = document.getElementById("canvas");
    var ctx = Canvas.getContext("2d");
    
    var startAngle = (2*Math.PI);
    var endAngle = (Math.PI*1.5);
    var currentAngle = 0;
    
    var raf = window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame;
    
    function Update(){
        //Clears
        ctx.clearRect(0,0,Canvas.width,Canvas.height);
        
        //Drawing
        ctx.beginPath();                  
        ctx.arc(250, 260, 230, startAngle + currentAngle, endAngle + currentAngle, false);
        
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2.0;
        ctx.stroke();
        
        currentAngle += 0.01;
        document.getElementById("angle").innerHTML=currentAngle;
        raf(Update);
    }
    raf(Update);

//Empieza canvas 2//

var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 250;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#ffffff';
      context.stroke();