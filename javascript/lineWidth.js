let width= $("#width").val()
$(".width-text").html(`The current width is ${width}`);
  $("#width").on("change", function () {
    width= $("#width").val()
$(".width-text").html(`Current width is ${width}`);
    
  });

  function lineWidthDraft() {
    let lineWidth = $("#width").val();
    contextDraft.lineWidth = lineWidth;
  }

  function lineWidthReal() {
    let lineWidth = $("#width").val();
    contextReal.lineWidth = lineWidth;
  }