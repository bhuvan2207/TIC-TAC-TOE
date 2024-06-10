let box=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset");
let nbtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let trunO= true; //player x or y
const position=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunO){
            box.innerText="O";
            trunO=false;
        }
        else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBtn=()=>{
    for(let b of box){
        b.disabled=true;
    }
};
const enableBtn=()=>{
    for(let b of box){
        b.disabled=false;
        b.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBtn();

};


const checkWinner=()=>{
    for(let p of position){
        let pos1=box[p[0]].innerText;
        let pos2=box[p[1]].innerText;
        let pos3=box[p[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }       
    }
};

const resetGame=()=>{
    trunO=true;
    enableBtn();
    msgContainer.classList.add("hide");
};

nbtn.addEventListener("click",resetGame);
rbtn.addEventListener("click",resetGame);

