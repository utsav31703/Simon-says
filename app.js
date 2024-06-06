let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"]
let started=false
let level=0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game strted")
        started=true;
        levelUp();
    }
})
function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`

    //random btn choiced
    let randIdx=Math.floor(Math.random() * 3)
    let randColor=btns[randIdx]
    let rndBtn=document.querySelector(`.${randColor}`)
    // console.log(rndBtn)
    gameSeq.push(randColor)
    console.log(gameSeq)
    
    flash(rndBtn);
}
function checkAns(idx){
//    console.log("curr level ",level) 
    

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }

    }else{
    h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start. `
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
        
    },150)
    reset()
    }
}
function flash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}
function btnPress(){
  let btn=this;
  userflash(btn);
    userColor= btn.getAttribute("id")
    // console.log(userColor)
    userSeq.push(userColor)

    checkAns(userSeq.length-1)
}
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[]
    userSeq=[]
    level=0
}