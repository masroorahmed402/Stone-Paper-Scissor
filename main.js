let userWins = 0;
let compWins = 0;
let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    userWins = 0;
    compWins = 0;
    updateScores();
    message.innerHTML = "Play your move";
    message.style.backgroundColor = "";
})
const updateScores = () =>{
    compScore.innerHTML = compWins;
    userScore.innerHTML = userWins;
}
const playGame = (userChoice, compChoice) =>{
    if (compChoice == userChoice){
        console.log("draw");
    } else if (compChoice == "stone"){
        if (userChoice == "paper"){
            message.innerHTML = `You win, Your ${userChoice} beats computer's ${compChoice}`;
            message.style.backgroundColor = "green";
            userWins++;
        } else {
            message.innerHTML = `You Lose! Computer's ${compChoice} beats your ${userChoice}`;
            message.style.backgroundColor = "red";
            compWins++;
        }
    } else if (compChoice == "paper"){
        if (userChoice == "scissor"){
            message.innerHTML = `You win, Your ${userChoice} beats computer's ${compChoice}`;
            message.style.backgroundColor = "green";
            userWins++;
        } else {
            message.innerHTML = `You Lose! Computer's ${compChoice} beats your ${userChoice}`;
            message.style.backgroundColor = "red";
            compWins++;
        }
    } else {
        if (userChoice == "paper"){
            message.innerHTML = `You Lose! Computer's ${compChoice} beats your ${userChoice}`;
            message.style.backgroundColor = "red";
            compWins++;
        } else {
            message.innerHTML = `You win, Your ${userChoice} beats computer's ${compChoice}`;
            message.style.backgroundColor = "green";
            userWins++;
        }
    }
    updateScores();
}
const getCompChoice = () =>{
    let choicesArr=["stone", "paper", "scissor"];
    let random = Math.floor(Math.random()*3);
    console.log(`comp choice is ${choicesArr[random]}`);
    return choicesArr[random];
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        const compChoice = getCompChoice();
        console.log(`user choice is ${userChoice}`);
        playGame(userChoice, compChoice);
    })
})