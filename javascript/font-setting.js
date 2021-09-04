let fontSize = $("#fontSize").val();
$("#font-text").html(`Current font size is ${fontSize}`);

$("#fontSize").on("input", function () {
fontSize = $("#fontSize").val();
  $("#font-text").html(`Current font size is ${fontSize}`);
});
