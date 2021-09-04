  class DrawingCurvedLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.line=false
  }

  onMouseDown(coord,event) {
    this.dragX=coord[0]
    this.dragY=coord[1]
      if(this.line==false)
      {
        strokeStyleReal()
        lineWidthReal()
    this.origX = coord[0];
    this.origY = coord[1];
      }else if((this.dragX-this.midX)**2+(this.dragY-this.midY)**2<100&&this.line==true){
          console.log("success")
          this.dragX=coord[0]
          this.dragY=coord[1]
      }else{
        this.line==true
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        this.contextReal.beginPath()
    
        // this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.moveTo(this.origX, this.origY);
    
        this.contextReal.quadraticCurveTo(
            this.midX,
            this.midY,
            this.endX,
            this.endY
          );
          this.contextReal.stroke()
          this.contextReal.closePath();
          history()
          canvasDraft.style.cursor="default"
      }
      
}
onDragging(coord,event) {
    if(this.line!=true)
    {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    lineWidthDraft()
    this.contextDraft.beginPath();
    this.contextDraft.setLineDash([5, 15])
    this.contextDraft.moveTo(this.origX, this.origY);
    this.midX=(this.origX + coord[0]) / 2
    this.midY=(this.origY + coord[1]) / 2
    this.contextDraft.quadraticCurveTo(
      this.midX,
      this.midY,
      coord[0],
      coord[1]
    );
    this.contextDraft.stroke()
    this.contextDraft.closePath();
    }else if((this.dragX-this.origMidX)**2+(this.dragY-this.origMidY)**2<100&&this.line==true){
        canvasDraft.style.cursor="move"
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
        this.midX=this.midX+(coord[0]-this.midX)
        this.midY=this.midY+(coord[1]-this.midY)
        this.contextDraft.quadraticCurveTo(
            this.midX,
            this.midY,
            this.endX,
            this.endY
          );
          this.contextDraft.restore()
    this.contextDraft.stroke()

    }
  }
  onMouseMove(coord) {
    if((coord[0]-this.midX)**2+(coord[1]-this.midY)**2<100&&this.line==true)
    {
        canvasDraft.style.cursor="move"

    }
}
  onMouseUp(coord) {
    if(this.line!=true)
    {
     this.endX=coord[0]
     this.endY=coord[1]
     this.origMidX=this.midX
     this.origMidY=this.midY
    
        this.line=true

    }else{
        console.log("hello")
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.contextReal.beginPath()

    // this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.moveTo(this.origX, this.origY);

    this.contextReal.quadraticCurveTo(
        this.midX,
        this.midY,
        this.endX,
        this.endY
      );
      this.contextReal.stroke()
      this.contextReal.closePath();
      history()
      canvasDraft.style.cursor="default"

        this.line=false
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
