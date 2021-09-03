var blur = document.getElementById('blur-range');
var brightness = document.getElementById('brightness-range');
var grayscale = document.getElementById('grayscale-range');


$('#blur-range').change(() => {
    filter();
});

$('#grayscale-range').change(() => {
    filter();
});

$('#brightness-range').change(() => {
    filter();
});
    

function filter() {
    contextReal.filter = `blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightness.value}%)`
console.log(brightness.value)
}

// var blur = document.getElementById('blur-range');
// var brightness = document.getElementById('brightness-range');
// var grayscale = document.getElementById('grayscale-range');


// $('#blur-range').change(() => {
//     filter();
// });

// $('#grayscale-range').change(() => {
//     filter();
// });

// $('#brightness-range').change(() => {
//     filter();
// });
    

// function filter() {
//     contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
//     contextReal.filter = `blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightness.value})`
//     let currentCanvas= new Image()
//         currentCanvas.src=canva
//         currentCanvas.onload=function(){contextReal.drawImage(currentCanvas,0,0)}
// console.log(contextReal.filter)
// }

