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
           font: "50px, Georgia",
           top: event.clientY, 
           left: event.clientX
        });
        
        $("#textInput").keydown((event)=>{
            if (event.key == "Enter"){
            let text = $("#textInput").val();
            this.contextReal.fillText(text, coord[0], coord[1]);
            $("#textInput").css({display: "none"});
            // $("#textInput").val("");
        }
        
    })
      }

        onDragging() {}
        onMouseMove() {}
        onMouseUp() {}
        onMouseLeave() {}
        onMouseEnter() {}
    }
    
    
 