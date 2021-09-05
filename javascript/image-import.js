let importImage=new Image()
$("#import").on("change", function (evt) {
    var tgt = evt.target,
        files = tgt.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            importImage.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
    
    console.log(importImage)
});
class imageImport extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super()
        this.contextReal=contextReal
        this.contextDraft=contextDraft
        this.importImage=importImage
    }
    onMouseDown(coord) {
        this.origX=coord[0]
        this.origY=coord[1]
       
    }
    onDragging(coord) {
        if(currentKey==="Shift")
        {
           
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextDraft.drawImage(importImage,coord[0]-importImage.width*0.5,coord[1]-importImage.height*0.5,importImage.width*0.5+coord[0]-this.origX,importImage.height*0.5+coord[1]-this.origY)
        }
    }
    onMouseMove(coord) {
        console.log(currentKey)
        if(importImage.src!=""&&currentKey!="Shift")
        {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextDraft.drawImage(importImage,coord[0]-importImage.width*0.5,coord[1]-importImage.height*0.5,importImage.width*0.5,importImage.height*0.5)
        }
        else{
            return
        }
    }
    onMouseUp(coord) {
        if(importImage.src!=""&&currentKey==="Shift")
        {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
            this.contextReal.drawImage(importImage,coord[0]-importImage.width*0.5,coord[1]-importImage.height*0.5,importImage.width*0.5+coord[0]-this.origX,importImage.height*0.5+coord[1]-this.origY) 
        history()
        importImage=new Image()
        }
        
        if(importImage.src!=""&&currentKey==="Control")
        {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextReal.drawImage(importImage,coord[0]-importImage.width*0.5,coord[1]-importImage.height*0.5,importImage.width*0.5,importImage.height*0.5)
        history()
        }
        if(importImage.src!=""&&currentKey!="Shift"&&currentKey!="Control")
        {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextReal.drawImage(importImage,coord[0]-importImage.width*0.5,coord[1]-importImage.height*0.5,importImage.width*0.5,importImage.height*0.5)
        history()
        importImage=new Image()
        }
    }
    onMouseLeave() {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
    }
    onMouseEnter() {}
  }