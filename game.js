let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const options=["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};

const showWinner= (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose!   ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame= () => {
    msg.innerText=`Game was Draw! Play again`;
   msg.style.backgroundColor="#081b31";
};
const playGame=(userChoice)=>{
    
    const compChoice= genCompChoice();
    
    if(userChoice === compChoice)
    {
        //draw 
        drawGame();
    }
        else {
            let userWin= true;
            if(userChoice === "rock")
            {
                //paper,scissor
                userWin = compChoice === "paper"?false:true;
            }
            else if(compChoice === "paper")
            {
                //rock,scissor
                userWin = compChoice === "scissor"?false:true;
            }
            else 
            {
                //rock,paper
                userWin = compChoice === "rock"?false:true;
            }
            showWinner(userWin, userChoice, compChoice);
             }
    
};