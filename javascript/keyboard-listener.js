let currentKey

$(document).keydown(function (e) { 
    if((e.ctrlKey===true&&e.key==="z")||(e.metaKey===true&&e.key==="z")){
        undo()
    }
    else if(e.ctrlKey===true&&e.key==="y"||(e.metaKey===true&&e.key==="y"))
    {
        redo()
    }
    else if(e.key==="-")
    {
      zoomOut()
    }
    else if(e.key==="=")
    {
      zoomIn()
    }
    else{
        currentKey=e.key
        console.log(currentKey)
    }
    
  }
)

$(document).keyup(function () { 
  currentKey=""
});
