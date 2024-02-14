let timer = document.querySelector(".timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset") 
let lap = document.getElementById("lap")
let lapText =document.querySelector(".lap")
let time = null
let count=0

let msec = 0
let sec = 0
let min = 0
function setTimer(){
    msec++
    if (msec==100){
        msec=0
        sec++
        if(sec==60){
            sec=0
            min++
        }
    }
    let min1 = min<10? `0${min}`: min
    let sec1 = sec<10? `0${sec}`: sec
    let msec1 = msec<10? `0${msec}`: msec
    timer.innerHTML= `${min1} : ${sec1} : ${msec1}`
}
start.addEventListener("click", ()=>{
    document.querySelector(".dis").style.display = "block"
    lap.style.display="inline";
    if(time !== null){
        clearInterval(time)
    }
    time = setInterval(setTimer,10)
})
stop.addEventListener("click", ()=>{
    clearInterval(time)
    lap.style.display="none";
})  
reset.addEventListener("click", ()=>{
    clearInterval(time)
    timer.innerHTML=`00 : 00 : 00`
    lapText.innerHTML=""
    msec=min=sec=0
    lap.style.display="none";
    lapText.style.display="none"
    count=0
})
lap.addEventListener("click", ()=>{
    lapText.style.display="flex"
    count++
    lapText.innerHTML+= `${count})  ${timer.innerHTML}<br>`
})  

