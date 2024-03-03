var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
   hitrn= Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent= hitrn;

}
function makeBubble(){
    var clutter="";
for(var i=1;i<160;i++){
    var rn = Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#footer").innerHTML = clutter;
}
var timer = 60;
function runTimer(){
    var timero = setInterval(function(){//fun. will run in every 1 sec
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
       else{
        clearInterval(timero);
        document.querySelector("#footer").innerHTML = `<h1>Game Over`;
       
       }
    },1000);
}
document.querySelector("#footer")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
if(clickednum ==hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
})
runTimer();
makeBubble();
getNewHit();
