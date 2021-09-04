let currentSticker=new Image()
$("#rickroll").click(function (e) { 
    e.preventDefault();
    currentSticker.src="./assets/rickroll.jpg"
});
$("#yodawg").click(function (e) { 
    e.preventDefault();
    currentSticker.src="./assets/yodawg.jpg"
});
$("#drake").click(function (e) { 
    e.preventDefault();
    currentSticker.src="./assets/drake.png"
});
currentSticker.src="./assets/rickroll.jpg"
class sticker extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super()
        this.contextReal=contextReal
        this.contextDraft=contextDraft
        this.currentSticker=currentSticker
    }
    onMouseDown(coord) {

        this.contextReal.drawImage(this.currentSticker,coord[0]-currentSticker.width*0.4/2,coord[1]-currentSticker.height*0.4/2,currentSticker.width*0.4,currentSticker.height*0.4)

    }
    onDragging(coord) {
        if(currentKey==="Control")
        {
         this.contextReal.drawImage(this.currentSticker,coord[0]-currentSticker.width*0.4/2,coord[1]-currentSticker.height*0.4/2,currentSticker.width*0.4,currentSticker.height*0.4)
        }
    }
    onMouseMove(coord) {

        this.contextDraft .clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextDraft.drawImage(this.currentSticker,coord[0]-currentSticker.width*0.4/2,coord[1]-currentSticker.height*0.4/2,currentSticker.width*0.4,currentSticker.height*0.4)
        
    }
    onMouseUp(coord) {
        
        this.contextReal.drawImage(this.currentSticker,coord[0]-currentSticker.width*0.4/2,coord[1]-currentSticker.height*0.4/2,currentSticker.width*0.4,currentSticker.height*0.4)
        
        history()
    }
    onMouseLeave() {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
    }
    onMouseEnter() {}
  }