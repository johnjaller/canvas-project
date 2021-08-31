let fillColor="#f44"
let StrokeColor="#000000"
let fontSize = 35
let fontWeight = 600;
let fontStyle = "Arial"


class InsertText extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.fontWeight = 600; 
        this.fontSize = 35; 
        this.fontStyle = "Arial"; 
        this.fillStyle = "orange"; 
        this.textX = [];
        this.textY = [];
    }
    
    onMouseDown(coord,event){
        //Set up contextReal text properties
        this.contextReal.font = fontStyle
        this.contextReal.fillStyle = fillColor
        //Store the text starting (x,y)
        this.textX.push(coord[0]);
        this.textY.push(coord[1]);
        //Make the input box appear on the clicked area
        this.fontStartY = this.textY[0] - this.fontSize;
        $('#insert-text').css({"display":"block","transform":"translateY("+coord[1]+"px) translateX("+coord[0]+"px)","font-size":canvasSettings.textSize+"px","color":canvasSettings.colorStroke,"font-family":canvasSettings.textFont,"font-weight":this.fontWeight,"padding":"0"});
        //If user click outside the input box, text will be printed on the canvas real
        if ((this.textX.length > 1) && (event.target.id != $('#insert-text'))){
            this.outputText(this.contextReal);
        }
    }
    //Print the text on the canvas real
    outputText(ctx){
        let inputText = $('#insert-text').val();
        contextReal.fillText(inputText,this.textX[0],this.textY[0]+parseInt(canvasSettings.textSize));
        //contextReal.stroke();
        $('#insert-text').css({"display":"none","transform":"translateY(0) translateX(0)"});
        $('#insert-text').val('');
        //$('body').find('input[type=text],input').val('');
        this.textX= [];
        this.textY = [];
        this.onFinish();
    }
    onFinish(){
        canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
        canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = canvasReal.toDataURL();
        canvasSettings.undoObject.actionCount++;
    }
}