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
        if(importImage.src!="")
        {
        this.contextReal.drawImage(importImage,coord[0]-importImage.width*0.5,coord[1]-importImage.height*0.5,importImage.width*0.5,importImage.height*0.5)
    }else{
        return ;
    }
    }
    onDragging() {}
    onMouseMove(coord) {
        if(importImage.src!="")
        {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextDraft.drawImage(importImage,coord[0]-importImage.width*0.5,coord[1]-importImage.height*0.5,importImage.width*0.5,importImage.height*0.5)
        }
        else{
            return
        }
    }
    onMouseUp(coord) {
        if(importImage.src!="")
        {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        history()
        importImage=new Image()
        }else{
            return;
        }
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }