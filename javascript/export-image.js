function exportImage(element)
{
    let image=canvasReal.toDataURL()
    element.href=image
}