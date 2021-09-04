class fillingBucket extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }
  onMouseDown(coord, event) {
    let canvaImage = this.contextReal.getImageData(
      0,
      0,
      canvasReal.width,
      canvasReal.height
    );
    console.log(canvaImage.data);

    this.filling(coord[0], coord[1], canvaImage);
  }
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {
    history();
  }
  onMouseLeave() {}
  onMouseEnter() {}
  filling(coordX, coordY, img) {
    let coordArr = [[coordX, coordY]];
    let color = hextorgb($("#fill").val());
    let startPos = (coordY * canvasReal.width + coordX) * 4;
    let startR = img.data[startPos];
    let startG = img.data[startPos + 1];
    let startB = img.data[startPos + 2];
    let checkCoord,checkX,checkY,checkingPx,right,left
    while (coordArr.length) {
      checkCoord = coordArr.pop();
      checkX = checkCoord[0];
      checkY = checkCoord[1];
      checkingPx = (checkY * canvasReal.width + checkX) * 4;
      right = false;
      left = false;
      while (checkY-- >= 0 && matchStartColor(checkingPx)) {
          checkY--;
        checkingPx = checkingPx - canvasReal.width * 4;
      }
      checkingPx = checkingPx + canvasReal.width * 4;
      checkY++
      right = false;
      left = false;
      while (checkY++ < img.height && matchStartColor(checkingPx)) {
          checkY++
        colorPx(checkingPx);
        if (checkX > 0) {
          if (matchStartColor(checkingPx - 4) === true) {
            coordArr.push([checkX - 1, checkY]);
            left = true;
          } else if (left == true) {
            left = false;
          }
        }
        if (checkX < img.width) {
          if (matchStartColor(checkingPx + 4) === true) {
            coordArr.push([checkX + 1, checkY]);
            right = true;
          } else if (right == true) {
            right = false;
          }
        }
        checkingPx = checkingPx + canvasReal.width * 4;
      }
    }
    this.contextReal.putImageData(img, 0, 0);
    function matchStartColor(pixelPos) {
      var r = img.data[pixelPos];
      var g = img.data[pixelPos + 1];
      var b = img.data[pixelPos + 2];
      var a = img.data[pixelPos + 3];
      if(matchOutlineColor(r,g,b,a)){
        return false
      }
      if(r == startR && g == startG && b == startB)
      {
      return true;
      }
      if (r === color[0] && g === color[1] && b === [2]) {
				return false;
			}
    }
    function colorPx(pixelPos) {
      img.data[pixelPos] = color[0];
      img.data[pixelPos + 1] = color[1];
      img.data[pixelPos + 2] = color[2];
      img.data[pixelPos + 3] = 255;
    }
    function hextorgb(hex) {
      return hex
        .replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          (m, r, g, b) => "#" + r + r + g + g + b + b
        )
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
    }
     function matchOutlineColor(r, g, b, a) {

			return (r + g + b < 100 && a === 255);
		}
  }
}
