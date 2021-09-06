$("#clear").click(function (e) { 
    e.preventDefault();
    contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
    history()
});