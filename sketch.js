var bg
var play
var gameState="wait"
var trex 
var trex_img

function preload(){

bg =loadImage("images/waitbg.png")
trex_img = loadImage("images/Capture.PNG")
}
function setup(){
    
createCanvas(windowWidth,windowHeight)
    
//play=createImg("location")
//play.resize(w,h)
  play=createButton("PLAY")  
  play.position(100,100)
  trex = addImage(trex_img)
about=createButton("About")
about.position(windowWidth-100,100)

}

//function draw(){
//    background(bg)
//if(play.mousePressed(()=>{
// gameState="play";
//}))}

function draw(){
background(bg)

if(play.mousePressed()){
  gameState = "play"
}

} 