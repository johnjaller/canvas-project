let eraserSize= $("#eraserSize").val()
$(".eraserSize-text").html(`Current eraser size: ${eraserSize}`);

  $("#eraserSize").on("input", function () {
    eraserSize= $("#eraserSize").val()
$(".eraserSize-text").html(`Current eraser size: ${eraserSize}`);
    
  });
