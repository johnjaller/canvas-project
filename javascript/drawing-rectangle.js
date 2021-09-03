class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    fillStyleReal()
    strokeStyleReal()
    strokeStyleDraft()
    fillStyleDraft()
    lineWidthDraft()
    lineWidthReal()
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // Manipulating the context draft
    // Allows you to actually draw out your squares
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
  this.contextDraft.filter="opacity(40%)"
   this.drawRectangleDraft(this.origX,this.origY,coord[0]-this.origX,coord[1]-this.origY)
  }

  onMouseMove() {}

  // Committing the element to the canvas
  onMouseUp(coord) {
    // Clearing the rectangle first
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
   this.drawRectangleReal(this.origX,this.origY,coord[0]-this.origX,coord[1]-this.origY)
    
   history()
   
  }
  onMouseLeave() {}
  onMouseEnter() {}
  drawRectangleDraft(x,y,width,height){
    this.contextDraft.fillRect(
      x,
      y,
      width,
      height
    );
    this.contextDraft.strokeRect(
      x,
      y,
      width,
      height
    );
  }
  drawRectangleReal(x,y,width,height){
    this.contextReal.fillRect(
      x,
      y,
      width,
      height
    );
    this.contextReal.strokeRect(
      x,
      y,
      width,
      height
    );
  }
}