let winscoreContainer = document.getElementById('winscore');
let losescoreContainer = document.getElementById('losescore');
let allscoreContainer = document.getElementById('allscore');
let winscore = 0;
let losescore = 0;
let allscore = 0;
//lets statements to keep track of wins, losses, and ties

document.getElementById("generate").addEventListener("click", function() {
    document.getElementById("yourresult").textContent = "Your Choice: Rock";
}); //when you click the rock button, "Rock" appears next to "Your Choice: "

document.getElementById("generate2").addEventListener("click", function() {
    document.getElementById("yourresult").textContent = "Your Choice: Paper";
}); //when you click the paper button, "Paper" appears next to "Your Choice: "

document.getElementById("generate3").addEventListener("click", function() {
    document.getElementById("yourresult").textContent = "Your Choice: Scissors";
}); //when you click the scissors button, "Scissors" appears next to "Your Choice: "

document.getElementById("generate").addEventListener("click", function() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let choice;
    let imageUrl;
    if (computerChoice === 1) {
        choice = "Rock";
        imageUrl = "https://www.outdooressentialproducts.com/-/media/project/ufpi/outdoor-essentials/products/images/landscape/rocks/204922_small-landscape-rock-tan/outdoor-essentials_tan-landscape-small-rock_image_204922_website.png?h=1000&iar=0&w=1000&sc_lang=en&hash=54785A7CF8CEABBF39F0789A63166424";
    } else if (computerChoice === 2) {
        choice = "Paper";
        imageUrl = "https://plaincanvascollective.com/cdn/shop/products/PearlGold_Front.png?v=1664598118";
    } else {
        choice = "Scissors";
        imageUrl = "https://rowleycompany.scene7.com/is/image/rowleycompany/rowley-general-purpose-right-hand-scissors-gpsweb?$s7Product$&fmt=png-alpha";
    } //this generates the computers option after you press the rock button

    document.getElementById("choice").textContent = choice;
    document.getElementById("changingImage").src = imageUrl;

    let yourresult = 1; 
    let gameresultContainer = document.getElementById('gameresult');
    if (yourresult === computerChoice) {
        gameresultContainer.textContent = "Result: Tie";
        allscore += 1;
    } else if (yourresult === 1 && computerChoice === 2) {
        gameresultContainer.textContent = "Result: Loss";
        losescore += 1;
        if (losescore === 3) {
            document.getElementById('finalresult').innerText = "YOU LOST!";
            document.getElementById('changingImage').src = "https://i.pinimg.com/736x/33/39/b5/3339b5baabd1ebf7e5e5d87fa48b4535.jpg";
        }
    } else if (yourresult === 1 && computerChoice === 3) {
        gameresultContainer.textContent = "Result: Win";
        winscore += 1;
        if (winscore === 3) {
            document.getElementById('finalresult').innerText = "YOU WON!";
            document.getElementById('changingImage').src = "https://www.si.com/.image/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/MTY4MTA2NDIxNzM3MTcwMTkz/nico-hischier-devils-no1-1300jpg.jpg";
        }  
    } //this compares your choice and the computers to decide the winner, once one of you reaches three wins a win/loss message is displayed
    winscoreContainer.textContent = "Your Score: " + winscore;
    losescoreContainer.textContent = "Robot's Score: " + losescore;
    allscoreContainer.textContent = "Ties: " + allscore;
}); //this keeps track of the amount of wins, losses, and ties

document.getElementById("generate2").addEventListener("click", function() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let choice;
    let imageUrl;
    if (computerChoice === 1) {
        choice = "Rock";
        imageUrl = "https://www.outdooressentialproducts.com/-/media/project/ufpi/outdoor-essentials/products/images/landscape/rocks/204922_small-landscape-rock-tan/outdoor-essentials_tan-landscape-small-rock_image_204922_website.png?h=1000&iar=0&w=1000&sc_lang=en&hash=54785A7CF8CEABBF39F0789A63166424";
    } else if (computerChoice === 2) {
        choice = "Paper";
        imageUrl = "https://plaincanvascollective.com/cdn/shop/products/PearlGold_Front.png?v=1664598118";
    } else {
        choice = "Scissors";
        imageUrl = "https://rowleycompany.scene7.com/is/image/rowleycompany/rowley-general-purpose-right-hand-scissors-gpsweb?$s7Product$&fmt=png-alpha";
    } //this generates the computers option after you press the paper button

    document.getElementById("choice").textContent = choice;
    document.getElementById("changingImage").src = imageUrl;

    let yourresult = 2; 
    let gameresultContainer = document.getElementById('gameresult');
    if (yourresult === computerChoice) {
        gameresultContainer.textContent = "Result: Tie";
        allscore += 1;
    } else if (yourresult === 2 && computerChoice === 3) {
        gameresultContainer.textContent = "Result: Loss";
        losescore += 1;
        if (losescore === 3) {
            document.getElementById('finalresult').innerText = "YOU LOST!";
            document.getElementById('changingImage').src = "https://i.pinimg.com/736x/33/39/b5/3339b5baabd1ebf7e5e5d87fa48b4535.jpg";
        }
    } else if (yourresult === 2 && computerChoice === 1) {
        gameresultContainer.textContent = "Result: Win";
        winscore += 1;
        if (winscore === 3) {
            document.getElementById('finalresult').innerText = "YOU WON!";
            document.getElementById('changingImage').src = "https://www.si.com/.image/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/MTY4MTA2NDIxNzM3MTcwMTkz/nico-hischier-devils-no1-1300jpg.jpg"; 
        }
    } //this compares your choice and the computers to decide the winner, once one of you reaches three wins a win/loss message is displayed
    winscoreContainer.textContent = "Your Score: " + winscore;
    losescoreContainer.textContent = "Robot's Score: " + losescore;
    allscoreContainer.textContent = "Ties: " + allscore;
}); //this keeps track of the amount of wins, losses, and ties

document.getElementById("generate3").addEventListener("click", function() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let choice;
    let imageUrl;
    if (computerChoice === 1) {
        choice = "Rock";
        imageUrl = "https://www.outdooressentialproducts.com/-/media/project/ufpi/outdoor-essentials/products/images/landscape/rocks/204922_small-landscape-rock-tan/outdoor-essentials_tan-landscape-small-rock_image_204922_website.png?h=1000&iar=0&w=1000&sc_lang=en&hash=54785A7CF8CEABBF39F0789A63166424";
    } else if (computerChoice === 2) {
        choice = "Paper";
        imageUrl = "https://plaincanvascollective.com/cdn/shop/products/PearlGold_Front.png?v=1664598118";
    } else {
        choice = "Scissors";
        imageUrl = "https://rowleycompany.scene7.com/is/image/rowleycompany/rowley-general-purpose-right-hand-scissors-gpsweb?$s7Product$&fmt=png-alpha";
    } //this generates the computers option after you press the scissors button

    document.getElementById("choice").textContent = choice;
    document.getElementById("changingImage").src = imageUrl;

    let yourresult = 3; 
    let gameresultContainer = document.getElementById('gameresult');
    if (yourresult === computerChoice) {
        gameresultContainer.textContent = "Result: Tie";
        allscore += 1;
    } else if (yourresult === 3 && computerChoice === 1) {
        gameresultContainer.textContent = "Result: Loss";
        losescore += 1;
        if (losescore === 3) {
            document.getElementById('finalresult').innerText = "YOU LOST!";
            document.getElementById('changingImage').src = "https://i.pinimg.com/736x/33/39/b5/3339b5baabd1ebf7e5e5d87fa48b4535.jpg";
        }
    } else if (yourresult === 3 && computerChoice === 2) {
        gameresultContainer.textContent = "Result: Win";
        winscore += 1;
        if (winscore === 3) {
            document.getElementById('finalresult').innerText = "YOU WON!";
            document.getElementById('changingImage').src = "https://www.si.com/.image/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/MTY4MTA2NDIxNzM3MTcwMTkz/nico-hischier-devils-no1-1300jpg.jpg";
        }
    } //this compares your choice and the computers to decide the winner, once one of you reaches three wins a win/loss message is displayed
    winscoreContainer.textContent = "Your Score: " + winscore;
    losescoreContainer.textContent = "Robot's Score: " + losescore;
    allscoreContainer.textContent = "Ties: " + allscore;
}); //this keeps track of the amount of wins, losses, and ties

let resetFunction = () =>{
    resetButton.addEventListener('click', () => {
        allscore = 0;
        winscore = 0;
        losescore = 0;

    winscoreContainer.textContent = "Your Score: " + winscore;
        losescoreContainer.textContent = "Robot's Score: " + losescore;
        allscoreContainer.textContent = "Ties: " + allscore;
        document.getElementById('finalresult').innerText = "";
        document.getElementById('changingImage').src = "https://color-hex.org/colors/fef3e2.png";
    });
}
    
resetFunction();