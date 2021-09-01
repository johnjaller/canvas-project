let initialCanva=canvasReal.toDataURL()
var imgList=[initialCanva]
var step=0
var undoTrigger=false
function history(){
    step++
    let currentImg=canvasReal.toDataURL()
    if(imgList.length<=6&&undoTrigger==false)
    {
    imgList.push(currentImg)
    console.log(imgList)
    }else if(undoTrigger==true&&imgList.length<=6)
    {
        imgList.pop()
    imgList.push(currentImg)
    undoTrigger=false
    }
    else {
        imgList.shift()
        imgList.push(currentImg)
    console.log(imgList)

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