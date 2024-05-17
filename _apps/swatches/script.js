function NewColour() {
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}