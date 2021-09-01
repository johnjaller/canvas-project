let initialCanva=canvasReal.toDataURL()
var imgList=[initialCanva]
var step=0
var undoTrigger=false
function history(){
    let currentImg=canvasReal.toDataURL()
    if(undoTrigger==false)
    {
        step++
    imgList.push(currentImg)
    console.log(imgList)
    }else if(undoTrigger==true)
    {
        step++
        imgList.pop()
    imgList.push(currentImg)
    undoTrigger=false
    }
    
}
function clear(){
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
}
function undo(){
    if(step>0)
    {
        step--
        clear()
        let currentCanvas= new Image()
        currentCanvas.src=imgList[step]
        currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0)}
        console.log(imgList)
        undoTrigger=true
    }
    else{
        alert("no more undo")
    }
}

function redo(){
    if(step<imgList.length-1)
    {
        step++
        clear()
        let currentCanvas= new Image()
        currentCanvas.src=imgList[step]
        currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0)}
        console.log(imgList)
    }else{
        alert("no more redo")
    }
}