class InsertText extends PaintFunction {
    constructor(contextReal) {
      super();
      this.contextReal = contextReal;
    }
  
    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
  
       $("#textInput").css({
           display: "block", 
           position: "absolute",
           font: "50px, Arial",
           top: event.clientY, 
           left: event.clientX,
           
        });
        $("#textInput").keydown((event)=>{
          if (event.key == "Enter"){
            let text = $("#textInput").val();
            this.contextReal.font="50px Arial"
            this.contextReal.fillText(text, this.origX, this.origY);
            $("#textInput").css({display: "none"});
            $("#textInput").val("");
        }
        history()
    })
      }

        onDragging() {}
        onMouseMove() {}
        onMouseUp() {}
        onMouseLeave() {}
        onMouseEnter() {}
    }
    
    
 