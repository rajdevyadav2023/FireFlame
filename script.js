// RAW MATERIALS FOR COLOR CODES 
const colorRawMaterial1 = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
const colorRawMaterial2 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
// SELECTION OF HTML ELEMENTS 
const box = document.getElementById("box");
const colorShow1 = document.getElementById("color-1");
const colorCode1 = document.getElementById("color-code-1") ;
const colorShow2 = document.getElementById("color-2");
const colorCode2 = document.getElementById("color-code-2") ;
const genBtn = document.getElementById("gen-btn");

// Function to generate colors 
genBtn.addEventListener("click", function(){
    // for color - 1 
    const c1 = Math.floor(Math.random()*16);
    const c2 = Math.floor(Math.random()*16);
    const c3 = Math.floor(Math.random()*16);
    const c4 = Math.floor(Math.random()*16);
    const c5 = Math.floor(Math.random()*16);
    const c6 = Math.floor(Math.random()*16);
    let color1 = `#${colorRawMaterial1[c1]+colorRawMaterial1[c2]+colorRawMaterial1[c3]+colorRawMaterial1[c4]+colorRawMaterial1[c5]+colorRawMaterial1[c6]}`;
    colorCode1.value = color1;
    colorShow1.style.backgroundColor = color1;
    // for color - 2
    const c7 = Math.floor(Math.random()*16);
    const c8 = Math.floor(Math.random()*16);
    const c9 = Math.floor(Math.random()*16);
    const c10 = Math.floor(Math.random()*16);
    const c11 = Math.floor(Math.random()*16);
    const c12 = Math.floor(Math.random()*16);
    let color2 = `#${colorRawMaterial1[c7]+colorRawMaterial1[c8]+colorRawMaterial1[c9]+colorRawMaterial1[c10]+colorRawMaterial1[c11]+colorRawMaterial1[c12]}`;
    colorCode2.value = color2;
    colorShow2.style.backgroundColor = color2;

    // for setting linear gradient to the box 
    box.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
})