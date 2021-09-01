class eraser extends PaintFunction{
  constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
      this.contextReal.clearRect(coord[0]-eraserSize+7,coord[1]-eraserSize+7,eraserSize,eraserSize)

    }
  
    onDragging(coord, event) {
      this.contextReal.clearRect(coord[0]-eraserSize+7,coord[1]-eraserSize+7,eraserSize,eraserSize)
    }
  
    onMouseMove(coord,e) {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextDraft.strokeStyle = 'black';
      this.contextDraft.strokeRect(coord[0]-eraserSize+7,coord[1]-eraserSize+7,eraserSize,eraserSize)
    }
  
    // Committing the element to the canvas
    onMouseUp(coord) {

    }
    onMouseLeave() {
      this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)

    }
    onMouseEnter() {
      
    }
   
}