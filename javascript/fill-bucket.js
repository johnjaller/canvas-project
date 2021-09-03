class fillingBucket extends PaintFunction{
    constructor(contextReal) {
        super()
        this.contextReal=contextReal
    }
    onMouseDown(coord,event) {
        fillColor(coord[0],coord[1])
    }
    onDragging() {}
    onMouseMove() {}
    onMouseUp() {
        history()

    }
    onMouseLeave() {}
    onMouseEnter() {}
    fillColor(coordX,coordY){
        let coordArr=[[coordX,coordY]]
        while(coordArr.length>0)
        {

        }
    }
}