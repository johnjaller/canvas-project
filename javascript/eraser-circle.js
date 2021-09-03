class eraserCircle extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
      onMouseDown(coord, event) {
        this.contextReal.save()
        this.contextReal.ellipse(coord[0],coord[1],eraserSize,eraserSize,0,0,Math.PI*2)
        this.contextReal.clip()
        this.contextReal.clearRect(coord[0]-eraserSize,coord[1]-eraserSize,eraserSize*2,eraserSize*2)
        this.contextReal.restore()
 
      }
    
      onDragging(coord, event) {
        this.contextReal.save()
        this.contextReal.ellipse(coord[0],coord[1],eraserSize,eraserSize,0,0,Math.PI*2)
        this.contextReal.clip()
        this.contextReal.clearRect(coord[0]-eraserSize,coord[1]-eraserSize,eraserSize*2,eraserSize*2)
        this.contextReal.restore()
      }
    
      onMouseMove(coord,e) {
          this.clear()
          this.contextDraft.beginPath()
        this.contextDraft.ellipse(coord[0],coord[1],eraserSize,eraserSize,0,0,Math.PI*2)
        this.contextDraft.stroke()
        this.contextDraft.closePath()
      }
    
      // Committing the element to the canvas
      onMouseUp(coord) {
        history()
      }
      onMouseLeave() {
        this.clear()
      }
      onMouseEnter() {
        
      }
     clear(){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)

     }
}