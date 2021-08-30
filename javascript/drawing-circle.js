let fillColor="#f44"
let StrokeColor="#f44"
class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coord, event) {
    this.contextReal.fillStyle = fillColor;
    this.contextReal.strokeStyle=StrokeColor;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.fillStyle = fillColor;
    this.contextReal.strokeStyle=StrokeColor;

    //clear all the context on the screen
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath()
    this.circleX = (this.origX + coord[0]) / 2;
    this.circleY = (this.origY + coord[1]) / 2;

    this.radius = Math.sqrt(
      (this.origX-this.circleX) ** 2 + (this.origY - this.circleY) ** 2
    );
    this.contextDraft.arc(
      this.circleX-5,
      this.circleY-5,
      this.radius,
      0,
      Math.PI * 2
    );
    this.contextDraft.fill()
    this.contextDraft.stroke()
    this.contextDraft.closePath()

  }
  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    this.contextReal.beginPath()
    this.contextReal.arc(
      this.circleX-5,
      this.circleY-5,
      this.radius,
      0,
      Math.PI * 2
    );
    
    this.contextReal.closePath()
    this.contextReal.fill()
    this.contextReal.stroke()

  }
  onMouseLeave() {}
  onMouseEnter() {}
}
