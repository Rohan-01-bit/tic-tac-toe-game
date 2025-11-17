let boxes=document.querySelectorAll('.box');
let reset_btn=document.querySelector('.reset');
let new_button=document.querySelector('.new-button');
let announce=document.querySelector('.hide');
let msg=document.querySelector("#msg");
let turn_O=true;
let drawMsg=document.querySelector('#drawMsg');
let winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let count=0;
//Main Function
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        count++;
        if(turn_O){
        box.innerText="O";
        box.style.color='#bb3e03';
        // console.log(box.textContent);
            turn_O=false;
        }else{
           
            box.innerText="X";
            turn_O=true;
        box.style.color='#168aad';

        }
        // if(box.textContent==='O'){
        //     boxes.style.color="black";
        // }


        console.log(count);
        box.disabled=true;
        winnerCheck();

        if(count===9 && !winnerCheck){
            msg.classList.remove('hide');
            msg.innerText='Match draw';
            disablebtns();
            // console.log(`your count ${count} `);
        }
    });
    // if(count>=9)
});

//Disable buttons
const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//Enable buttons
let enableButtons=()=>{
for(let box of boxes){
       box.disabled=false;
        box.innerText="";
    }
    announce.classList.add('hide');
    turn_O=true;
};
// Winner Announce
const winnerAnnounce=(winner)=>{
    announce.classList.remove('hide');
    msg.innerText=`Congratulations, winner is ${winner} `;
};

//Winner Check
const winnerCheck=()=>{
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
    if(val1 != "" && val2 !="" && val3 != ""){
        if(val1 ===val2 && val2===val3){
            console.log(`the winner is ${val1} !`);
            winnerAnnounce(val1);
            disablebtns();       
    }
    }
    }
};

reset_btn.addEventListener('click',enableButtons);
new_button.addEventListener('click',enableButtons);
