let currentKey

$(document).keydown(function (e) { 
    if((e.ctrlKey===true&&e.key==="z")||(e.metaKey===true&&e.key==="z")){
        undo()
    }else if(e.ctrlKey===true&&e.key==="y"||(e.metaKey===true&&e.key==="y"))
    {
        redo()
    }else{
        currentKey=e.key
    }
}
);
$(document).keyup(function () { 
    currentKey=" "
    console.log(currentKey)

});