class DrawingStraightLine extends PaintFunction {
 
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  
  onMouseDown(coord, event) {
      strokeStyleReal()
      this.contextReal.lineJoin = "round";
      lineWidthReal()
      this.origX = coord[0];
      this.origY = coord[1];
  }

      // Clicking and removing your mouse
      onDragging(coord, event) {
          strokeStyleDraft()
        // this.contextDraft.strokeStyle="#aaaa"
        // Kind of line
        this.contextDraft.lineJoin = "round";
        // Width of line
        lineWidthDraft()
        if(currentKey==="Shift"){
          this.reset()
          this.drawDraft(this.origX,this.origY,coord[0],this.origY)
          

        }else if(currentKey==="Control"){
          this.reset()
          this.drawDraft(this.origX,this.origY,this.origX,coord[1])

        }
        else{
          this.reset()
          this.drawDraft(this.origX,this.origY,coord[0],coord[1])
        }
            } 
        
        

      onMouseUp(coord, event){
        this.contextReal.lineJoin = "round";
        if(currentKey==="Shift"){
          this.reset()
          this.drawReal(this.origX,this.origY,coord[0],this.origY)

        }else if(currentKey==="Control"){
          this.reset()
          this.drawReal(this.origX,this.origY,this.origX,coord[1])

        }
        else{
          this.reset()
          this.drawReal(this.origX,this.origY,coord[0],coord[1])
        }
        history()
		}
	
	onMouseLeave() {}
	onMouseEnter() {}
	reset() {
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
	}
  drawReal(startX,startY,endX,endY)
  {
  this.contextReal.beginPath(); 
  this.contextReal.moveTo(startX,startY);
  this.contextReal.lineTo(endX,endY);
  this.contextReal.closePath();
  this.contextReal.stroke();
  }
  drawDraft(startX,startY,endX,endY)
  {
  this.contextDraft.beginPath(); 
  this.contextDraft.moveTo(startX,startY);
  this.contextDraft.lineTo(endX,endY);
  this.contextDraft.closePath();
  this.contextDraft.stroke();
  }
  }
