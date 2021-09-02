let currentKey

$(document).keydown(function (e) { 
    currentKey=e.key
    console.log(currentKey)
});
$(document).keyup(function () { 
    currentKey=" "
    console.log(currentKey)

});