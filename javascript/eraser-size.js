let eraserSize= $("#eraserSize").val()
$(".eraserSize-text").html(`Current eraser size: ${eraserSize}`);
  $("#eraserSize").on("change", function () {
    eraserSize= $("#eraserSize").val()
$(".eraserSize-text").html(`Current eraser size: ${eraserSize}`);
    
  });
