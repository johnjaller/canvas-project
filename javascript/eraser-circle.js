class eraserCircle extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
      onMouseDown(coord, event) {
        
    this.eraserReal(coord[0],coord[1])
      }
    
      onDragging(coord, event) {
        this.eraserReal(coord[0],coord[1])
      }
    
      onMouseMove(coord,e) {
          this.clear()
         this.eraserDraft(coord[0],coord[1])
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
     eraserDraft(x,y){
        this.contextDraft.beginPath()
        this.contextDraft.ellipse(x,y,eraserSize,eraserSize,0,0,Math.PI*2)
        this.contextDraft.stroke()
        this.contextDraft.closePath()
     }
     eraserReal(x,y){
        this.contextReal.save()
        this.contextReal.ellipse(x,y,eraserSize,eraserSize,0,0,Math.PI*2)
        this.contextReal.clip()
        this.contextReal.clearRect(x-eraserSize,y-eraserSize,eraserSize*2,eraserSize*2)
        this.contextReal.restore()
     }
}