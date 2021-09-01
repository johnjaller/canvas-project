let width= $("#width").val()
$(".width-text").html(`Current width: ${width}`);
  $("#width").on("input", function () {
    width= $("#width").val()
$(".width-text").html(`Current width: ${width}`);
    
  });

  function lineWidthDraft() {
    let lineWidth = $("#width").val();
    contextDraft.lineWidth = lineWidth;
  }

  function lineWidthReal() {
    let lineWidth = $("#width").val();
    contextReal.lineWidth = lineWidth;
  }