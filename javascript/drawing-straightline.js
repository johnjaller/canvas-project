class DrawingStraightLine extends PaintFunction {
 
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    
    onMouseDown(coord, event) {
        // Fill in the color
        strokeStyleReal()
        // Kind of line
        this.contextReal.lineJoin = "round";
        // Width of line
        this.contextReal.lineWidth = 10;
        // Drawing the line here
        this.origX = coord[0];
        this.origY = coord[1];
      
        // this.draw(coord[0], coord[1]);
      }
      // Clicking and removing your mouse
      onDragging(coord, event) {
          strokeStyleDraft()
        // this.contextDraft.strokeStyle="#aaaa"
        // Kind of line
        this.contextDraft.lineJoin = "round";
        // Width of line
        this.contextDraft.lineWidth = 10; 
        this.contextDraft.lineWidth = 10; 
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath(); 
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
            } 
        
        

      onMouseUp(coord, event){
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        
		}
	
	onMouseLeave() {}
	onMouseEnter() {}
	reset() {
		this.click = 0;
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
	}


}