class eraser extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
      onMouseDown(coord, event) {
        this.contextReal.clearRect(coord[0]-13,coord[1]-13,20,20)
 
      }
    
      onDragging(coord, event) {
        this.contextReal.clearRect(coord[0]-13,coord[1]-13,20,20)
      }
    
      onMouseMove(coord,e) {
          this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
          this.contextDraft.strokeStyle = 'black';
        this.contextDraft.strokeRect(coord[0]-13,coord[1]-13,20,20)
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