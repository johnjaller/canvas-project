function exportImage(element)
{
    let image=canvasReal.toDataURL("image/jpeg",1.0)
    element.href=image
}