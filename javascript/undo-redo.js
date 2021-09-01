let initialCanva=canvasReal.toDataURL()
var imgList=[initialCanva]
var redoList=[]
var undoTrigger=false
function history(){
    let currentImg=canvasReal.toDataURL()
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
        let currentCanvas= new Image()
        currentCanvas.src=imgList[imgList.length-1]
        currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0)}
        undoTrigger=true
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
        let currentCanvas= new Image()
        currentCanvas.src=imgList[imgList.length-1]
        currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0)}
        console.log(imgList)
    }else{
        alert("no more redo")
    }
}