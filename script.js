
let boxs= document.querySelectorAll(".box");
let resetbtn =document.querySelector("#Reset");
let msgbtn =document.querySelector(".msg");
 let turn1=true; //player1,player2
 const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 const resetGame=()=>{
    turn1=true;
    ennableboxes();
 };
 const ennableboxes =()=>{
    for(let box of boxs){
        box.disabled=false;
        msgbtn.classList.add("hide");
        box.innerText="";
    }
 };
 const Disabledboxes =()=>{
    for(let box of boxs){
        box.disabled=true;
    }
 };
 const showWinner =(winner)=> {
    msgbtn.innerText=`the show-winner is ${winner}`;
    msgbtn.classList.remove("hide");
    Disabledboxes();
 }
 boxs.forEach((box)=> {
     box.addEventListener("click",() =>{
        if(turn1){
            box.innerText="0";
            turn1=false;
        }
        else{
            box.innerText ="X";
            turn1=true;
        }
        box.disabled = true;
        checkwinner();
     });
 });
 const checkwinner =() =>{
    for (let pattern of winPattern){
            let pos1=boxs[pattern[0]].innerText;
            let pos2=boxs[pattern[1]].innerText;
            let pos3 =boxs[pattern[2]].innerText;
            if(pos1 !="" &&pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                    showWinner(pos1);
                }
            }
        }
    
 };
resetbtn.addEventListener("click",resetGame)