function exportImage()
{
    
    element.href=canvasToImage("#ffffff")
}

function canvasToImage(backgroundColor){

    var context = document.getElementById('canvas-real').getContext('2d');
    
    canvas = context.canvas;
    //cache height and width        
    var w = canvas.width;
    var h = canvas.height;
    
    var data;
    
    //get the current ImageData for the canvas.
    data = context.getImageData(0, 0, w, h);
    
    //store the current globalCompositeOperation
    var compositeOperation = context.globalCompositeOperation;
    
    //set to draw behind current content
    context.globalCompositeOperation = "destination-over";
    
    //set background color
    context.fillStyle = backgroundColor;
    
    //draw background / rect on entire canvas
    context.fillRect(0,0,w,h);
    
    //get the image data from the canvas
    var imageData = this.canvas.toDataURL("image/jpeg");
    
    //clear the canvas
    context.clearRect (0,0,w,h);
    
    //restore it with original / cached ImageData
    context.putImageData(data, 0,0);
    
    //reset the globalCompositeOperation to what it was
    context.globalCompositeOperation = compositeOperation;
    
    //return the Base64 encoded data url string
    return imageData;
    }