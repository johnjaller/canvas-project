let currentScale=1
let zoomScale=0.1


$("#zoom-in").on("click", function () {
    currentScale=currentScale+zoomScale
    let newWidth=canvasReal.width*currentScale
    let newHeight=canvasReal.height*currentScale
    contextReal.save()
    contextReal.translate(-((newWidth-canvasReal.width)/2), -((newHeight-canvasReal.height)/2));
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    contextReal.scale(currentScale,currentScale)
    let currentCanvas= new Image()
    currentCanvas.src=canva
    currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0,newWidth,newHeight)}
    contextReal.restore()

});
$("#zoom-out").on("click", function () {
    currentScale=currentScale-zoomScale
    let newWidth=canvasReal.width*currentScale
    let newHeight=canvasReal.height*currentScale
    contextReal.save()
    contextReal.translate(-((newWidth-canvasReal.width)/2), -((newHeight-canvasReal.height)/2));
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    contextReal.scale(currentScale,currentScale)
    let currentCanvas= new Image()
    currentCanvas.src=canva
    currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0,newWidth,newHeight)}
    contextReal.restore()
});