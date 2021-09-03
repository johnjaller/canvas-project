class DrawingEllipse extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
      onMouseDown(coord, event) {
        strokeStyleReal()
        lineWidthReal()
        fillStyleReal()
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    fillStyleDraft()
    lineWidthDraft()
    strokeStyleDraft()
        // this.radiusY = Math.sqrt(
        //     (this.origX - coord[0]) ** 2 + (this.origY - coord[1]) ** 2
        //     )*2;
        this.radiusY=Math.abs(coord[1]-this.origY)*2
            this.radiusX=Math.abs(coord[0]-this.origX)*2
  this.ellipseDraft(this.origX,this.origY,this.radiusX,this.radiusY,0,0,Math.PI*2)
    }
    onMouseMove() {}
    onMouseUp() {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ellipseReal(this.origX,this.origY,this.radiusX,this.radiusY,0,0,Math.PI*2)

    }
    onMouseLeave() {}
    onMouseEnter() {}
    ellipseDraft(x,y,rX,rY,rot,startAngle,endAngle){
        this.contextDraft.save()
        this.contextDraft.filter="opacity(40%)"
        this.contextDraft.beginPath()
        this.contextDraft.ellipse(x,y,rX,rY,rot,startAngle,endAngle)
        this.contextDraft.closePath()
        this.contextDraft.stroke()
        this.contextDraft.stroke()
        this.contextDraft.fill()
        this.contextDraft.restore()
    }
    ellipseReal(x,y,rX,rY,rot,startAngle,endAngle){
        this.contextReal.beginPath()
        this.contextReal.ellipse(x,y,rX,rY,rot,startAngle,endAngle)
        this.contextReal.closePath()
        this.contextReal.stroke()
        this.contextReal.stroke()
        this.contextReal.fill()
        this.contextReal.restore()
    }
}