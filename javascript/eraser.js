let size=40
class eraser extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
      onMouseDown(coord, event) {
        this.contextReal.clearRect(coord[0]-size+7,coord[1]-size+7,size,size)
 
      }
    
      onDragging(coord, event) {
        this.contextReal.clearRect(coord[0]-size+7,coord[1]-size+7,size,size)
      }
    
      onMouseMove(coord,e) {
          this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
          this.contextDraft.strokeStyle = 'black';
        this.contextDraft.strokeRect(coord[0]-size+7,coord[1]-size+7,size,size)
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
