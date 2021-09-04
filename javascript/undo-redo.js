let initialCanva=canvasReal.toDataURL()
var imgList=[initialCanva]
var redoList=[]
var undoTrigger=false
let canva=initialCanva
function history(){
    let currentImg=canvasReal.toDataURL()
    canva=currentImg
    if(undoTrigger==false)
    {

    imgList.push(currentImg)
    
    console.log(imgList)
    }else if(undoTrigger==true)
    {
        
        redoList=[]
    imgList.push(currentImg)
    undoTrigger=false
    }
    
}
function clear(){
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
}
function undo(){
    if(imgList.length>1)
    {
        let undoItem=imgList.pop()
        redoList.push(undoItem)
        clear()
        let newWidth=canvasReal.width*currentScale
    let newHeight=canvasReal.height*currentScale
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    contextReal.save()
    contextReal.translate(-((newWidth-canvasReal.width)/2), -((newHeight-canvasReal.height)/2));
    contextReal.scale(currentScale,currentScale)
    let currentCanvas= new Image()
    currentCanvas.src=imgList[imgList.length-1]
    currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0,newWidth,newHeight)}
    contextReal.restore()
        undoTrigger=true
        canva=imgList[imgList.length-1]
        
    }
    else{
        alert("no more undo")
    }
}

function redo(){
    if(redoList.length>0)
    {
        let redoItem=redoList.pop()
        imgList.push(redoItem)
        clear()
        let newWidth=canvasReal.width*currentScale
        let newHeight=canvasReal.height*currentScale
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
        contextReal.save()
        contextReal.translate(-((newWidth-canvasReal.width)/2), -((newHeight-canvasReal.height)/2));
        contextReal.scale(currentScale,currentScale)
        let currentCanvas= new Image()
        currentCanvas.src=imgList[imgList.length-1]
        currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0,newWidth,newHeight)}
        contextReal.restore()
        canva=imgList[imgList.length-1]
    }else{
        alert("no more redo")
    }
}