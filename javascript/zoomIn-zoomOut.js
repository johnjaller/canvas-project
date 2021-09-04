let currentScale=1
let zoomScale=0.1


$("#zoom-in").on("click", function () {
    zoomIn()

});
$("#zoom-out").on("click", function () {
  zoomOut()
});
function zoomIn(){
    currentScale=currentScale+zoomScale
    let newWidth=canvasReal.width*currentScale
    let newHeight=canvasReal.height*currentScale
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    contextReal.save()
    contextReal.translate(-((newWidth-canvasReal.width)/2), -((newHeight-canvasReal.height)/2));
    contextReal.scale(currentScale,currentScale)
    let currentCanvas= new Image()
    currentCanvas.src=canva
    currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0,newWidth,newHeight)}
    contextReal.restore()
}
function zoomOut(){
    currentScale=currentScale-zoomScale
    let newWidth=canvasReal.width*currentScale
    let newHeight=canvasReal.height*currentScale
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    contextReal.save()
    contextReal.translate(-((newWidth-canvasReal.width)/2), -((newHeight-canvasReal.height)/2));
    contextReal.scale(currentScale,currentScale)
    let currentCanvas= new Image()
    currentCanvas.src=canva
    currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0,newWidth,newHeight)}
    contextReal.restore()
}
function zoom(){
    let newWidth=canvasReal.width*currentScale
    let newHeight=canvasReal.height*currentScale
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    contextReal.save()
    contextReal.translate(-((newWidth-canvasReal.width)/2), -((newHeight-canvasReal.height)/2));
    contextReal.scale(currentScale,currentScale)
    let currentCanvas= new Image()
    currentCanvas.src=canva
    currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0,newWidth,newHeight)}
    contextReal.restore()
}