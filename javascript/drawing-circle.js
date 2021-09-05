class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coord, event) {
    fillStyleReal();
    lineWidthReal();
    strokeStyleReal();
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    if (currentKey === "Control") {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

      this.radiusY = Math.abs(coord[1] - this.origY) * 2;
      this.radiusX = Math.abs(coord[0] - this.origX) * 2;
      this.ellipseDraft(
        this.origX,
        this.origY,
        this.radiusX,
        this.radiusY,
        0,
        0,
        Math.PI * 2
      );
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      fillStyleDraft();
      lineWidthDraft();
      strokeStyleDraft();
      this.circleX = (this.origX + coord[0]) / 2;
      this.circleY = (this.origY + coord[1]) / 2;
      this.radius = Math.sqrt(
        (this.origX - this.circleX) ** 2 + (this.origY - this.circleY) ** 2
      );
      this.drawCircleDraft(this.circleX, this.circleY, this.radius);
    }
  }
  onMouseMove() {}
  onMouseUp(coord) {
    if (currentKey === "Control") {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.ellipseReal(
        this.origX,
        this.origY,
        this.radiusX,
        this.radiusY,
        0,
        0,
        Math.PI * 2
      );
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.drawCircleReal(this.circleX, this.circleY, this.radius);
    }
    history(); //log to history
  }
  onMouseLeave() {}
  onMouseEnter() {}
  drawCircleDraft(x, y, r) {
    this.contextDraft.save();
    this.contextDraft.beginPath();
    this.contextDraft.filter = "opacity(40%)";
    this.contextDraft.arc(x - 5, y - 5, r, 0, Math.PI * 2);
    this.contextDraft.fill();
    this.contextDraft.stroke();
    this.contextDraft.closePath();
    this.contextDraft.restore();
  }
  drawCircleReal(x, y, r) {
    this.contextReal.beginPath();
    this.contextReal.arc(x - 5, y - 5, r, 0, Math.PI * 2);
    this.contextReal.fill();
    this.contextReal.stroke();
    this.contextReal.closePath();
  }
  ellipseDraft(x, y, rX, rY, rot, startAngle, endAngle) {
    this.contextDraft.save();
    this.contextDraft.filter = "opacity(40%)";
    this.contextDraft.beginPath();
    this.contextDraft.ellipse(x, y, rX, rY, rot, startAngle, endAngle);
    this.contextDraft.closePath();
    this.contextDraft.stroke();
    this.contextDraft.stroke();
    this.contextDraft.fill();
    this.contextDraft.restore();
  }
  ellipseReal(x, y, rX, rY, rot, startAngle, endAngle) {
    this.contextReal.beginPath();
    this.contextReal.ellipse(x, y, rX, rY, rot, startAngle, endAngle);
    this.contextReal.closePath();
    this.contextReal.stroke();
    this.contextReal.stroke();
    this.contextReal.fill();
    this.contextReal.restore();
  }
}
