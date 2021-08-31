class DrawingCurvedLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.line=false
  }

  onMouseDown(coord,event) {
      if(this.line==false)
      {
      this.contextReal.strokeStyle="#000000"
      this.contextReal.linxeWidth=5
    this.origX = coord[0];
    this.origY = coord[1];
      }else{
          console.log("success")
          return;
      }
      
}
onDragging(coord,event) {
    if(this.line!=true)
    {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.lineWidth=5
    this.contextDraft.lineWidth=5
    
    this.contextDraft.beginPath();
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
    }else{
        canvasDraft.style.cursor="move"
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
        this.origMidX=this.midX
        this.origMidY=this.midY
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
    this.contextDraft.closePath();

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
     this.contextDraft.save()
     this.contextDraft.lineWidth=1
     this.contextDraft.fillStyle="blue"
     this.contextDraft.moveTo(this.midX, this.midY);
    
        this.contextDraft.arc(this.midX,this.midY,10,0,Math.PI*2)
        this.contextDraft.fill()
        this.contextDraft.restore()
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
      canvasDraft.style.cursor="default"

        this.line=false
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
