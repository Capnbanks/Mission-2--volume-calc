console.log("Connected!!!");
//square shapes
const length = document.getElementById("length");
const width = document.getElementById("width");
const height = document.getElementById("height");
const displayResult = document.getElementById("result");
const sumButton = document.getElementById("sum");
//get input value
let lengthInput;
let widthInput;
let heightInput;

length.addEventListener("input", getValue1 );
width.addEventListener("input", getValue2 );
height.addEventListener("input", getValue3 );



function getValue1(event){
    lengthInput=event.target.value
}
function getValue2 (event) {
    widthInput = event.target.value
}
function getValue3 (event) {
    heightInput = event.target.value
}
sumButton.addEventListener("click", function(){
    displayResult.textContent = `${Number(length.value)} x 
    ${Number(width.value)} x ${Number(height.value)}
    = ${Number(length.value) * Number(width.value) * Number(height.value)}`;
    console.log(Number(length.value) * Number(width.value) * Number(height.value) + "m3");
})

// let volume = length * width * height

//Circular volume

const radius = document.getElementById("radius");
const depth = document.getElementById("depth");
const resultCircle = document.getElementById("resultCircle");
const circleSum = document.getElementById("sumCircle");
const pi = 3.14;
//get input value
let radiusInput;
let depthInput;

radius.addEventListener("input", getRadius);
depth.addEventListener("input", getDepth);

function getRadius(event){
radiusInput=event.target.value
}
function getDepth(event){
depthInput=event.target.value
}

circleSum.addEventListener("click", function(){
    resultCircle.textContent = ` pi x ${Number(radius.value)} squared x
     ${Number(depth.value)}
      = ${pi * Number(radius.value*radius.value) * Number(depth.value)}`
      console.log(pi * Number(radius.value*radius.value) * Number(depth.value) + "m3");
})


//triangular volume

const base = document.getElementById("base");
const heightTri = document.getElementById("heightTri");
const depthTri = document.getElementById("depthTri");
const resultTri = document.getElementById("resultTri");
const sumTri = document.getElementById("sumTri")

let baseInput;
let heightTriInput;
let depthTriInput

base.addEventListener("input", getBase);
heightTri.addEventListener("input", getHeightTri);
depthTri.addEventListener("input", getDepthTri);

function getBase(event){
    baseInput = event.target.value
}
function getHeightTri(event){
    heightTriInput = event.target.value
}
function getDepthTri (event) {
    depthTriInput = event.target.value
}

sumTri.addEventListener("click",function(){
resultTri.textContent = `${Number(base.value)} 
x 1/2 then times height ${Number(heightTri.value)}
 times depth ${Number(depthTri.value)}
  = ${Number(base.value*0.5) *  Number(heightTri.value)  
*  Number(depthTri.value)}`
console.log(Number(base.value*0.5) *  Number(heightTri.value)  
*  Number(depthTri.value) + "m3");




})

alert("Meter units only please!!")