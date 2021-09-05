function exportImage(element)
{
    
    element.href=canvasToImage("#ffffff")
}

function canvasToImage(backgroundColor){

  
    //cache height and width        
    var w = canvasReal.width;
    var h = canvasReal.height;
    
    var data;
    
    //get the current ImageData for the canvas.
    data = contextReal.getImageData(0, 0, w, h);
    
    //store the current globalCompositeOperation
    var compositeOperation = contextReal.globalCompositeOperation;
    
    //set to draw behind current content
    contextReal.globalCompositeOperation = "destination-over";
    
    //set background color
    contextReal.fillStyle = backgroundColor;
    
    //draw background / rect on entire canvas
    contextReal.fillRect(0,0,w,h);
    
    //get the image data from the canvas
    var imageData = canvasReal.toDataURL("image/jpeg");
    
    //clear the canvas
    contextReal.clearRect (0,0,w,h);
    
    //restore it with original / cached ImageData
    contextReal.putImageData(data, 0,0);
    
    //reset the globalCompositeOperation to what it was
    contextReal.globalCompositeOperation = compositeOperation;
    
    //return the Base64 encoded data url string
    return imageData;
    }