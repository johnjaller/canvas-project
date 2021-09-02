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
    contextReal.filter = `blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightness.value})`
console.log(contextReal.filter)
}

