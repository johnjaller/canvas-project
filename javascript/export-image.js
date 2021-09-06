function exportImage(element)
{
    
    element.href=canvasToImage("#ffffff")
}

function canvasToImage(backgroundColor){
    var w = canvasReal.width;
    var h = canvasReal.height;
    var data;
    data = contextReal.getImageData(0, 0, w, h);
    var compositeOperation = contextReal.globalCompositeOperation;
    contextReal.globalCompositeOperation = "destination-over";
    contextReal.fillStyle = backgroundColor;
    contextReal.fillRect(0,0,w,h);
    var imageData = canvasReal.toDataURL("image/jpeg");
    contextReal.clearRect (0,0,w,h);
    contextReal.putImageData(data, 0,0);
    contextReal.globalCompositeOperation = compositeOperation;
    return imageData;
    }