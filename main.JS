var canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var oldx,oldy;
var mouseevent="";
//addinglisteners

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
mouseevent="mousedown"
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=3;
        ctx.arc(currentx,currenty,40,0,360);
        ctx.stroke();
    }
}