let urscore=0;
let compscore=0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userId = document.querySelector("#urscore");
let cmprId = document.querySelector("#comp_score");

const compChoice=()=>{
      let options =["rock","paper","scissor"];
      let idx=Math.floor(Math.random()*3);
      return options[idx];
}
const  withdraw=()=>{
     console.log("game draw");
     msg.innerText = "Game was draw. Play Again";
     msg.style.backgroundColor = "rgb(26, 26, 89)";

}

let showWinner = (userwinId , ides, cmpchs) =>{
     
     if(userwinId){
          
        console.log("You Win");
        msg.innerText = `Your ${ides} beats Computers ${cmpchs}`;
        msg.style.backgroundColor = "green";
        urscore++
        userId.innerText = urscore;
        
        
        
        
     }else{
        console.log("You loss"); 
        msg.innerText = `Computers ${cmpchs} beats Your ${ides}`;
        msg.style.backgroundColor = "red";
        compscore++
        cmprId.innerText = compscore;
     }
}
const playGame=(ides)=>{    
        console.log("users choice is", ides )
        let cmpchs = compChoice();
        console.log("computer choice is",cmpchs);
       
        if(ides===cmpchs){
            withdraw();
        }else{
          let userwinId=true;
          if (ides==="rock") {
               userwinId = cmpchs === "paper" ? false : true                    
        } else if(ides==="paper") {
             userwinId = cmpchs === "scissor" ? false : true
                                  
        } else{
            userwinId = cmpchs === "rock" ? false : true                       
        }
        showWinner(userwinId , ides, cmpchs);
     }
}
choices.forEach( (choice)=>{
        choice.addEventListener("click", ()=>{
         let ides = choice.getAttribute("id")
          playGame(ides)   
        } )                         
})     


