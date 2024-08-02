const dice1=document.getElementsByClassName("dice1")[0];
const dice2=document.getElementsByClassName("dice2")[0];
const btn1=document.getElementById("btn-1");
const result=document.getElementById("result");
const img1=document.getElementById("img1")
const img2=document.getElementById("img2")


let random1=Math.floor(Math.random()*6+1);
let random2=Math.floor(Math.random()*6+1);
let randomImg1="Dice"+random1+"Pixel.png";  
let randomImg2="Dice"+random2+"Pixel.png";
btn1.addEventListener("click",(event)=>{
    console.log(event);
    window.onload = (detail) => {
        console.log("page is fully loaded");
      };
    
})
if(random1>random2){
    result.textContent="Dice1 wins";
    img1.src=randomImg1;
    img2.src=randomImg2;

}
else if(random1<random2){
    result.textContent="Dice2 wins";
    img1.src=randomImg1;
    img2.src=randomImg2;

}
else{
    result.textContent="DRAW";
    img1.src=randomImg1;
    img2.src=randomImg2;
}
