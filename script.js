let winscoreContainer = document.getElementById('winscore');
let losescoreContainer = document.getElementById('losescore');
let allscoreContainer = document.getElementById('allscore');
let winscore = 0;
let losescore = 0;
let allscore = 0;

document.getElementById("generate").addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1; //Defines
    let choice;
    let imageUrl;

    if (randomNumber === 1) {
        choice = "Rock";
        imageUrl = "https://www.outdooressentialproducts.com/-/media/project/ufpi/outdoor-essentials/products/images/landscape/rocks/204922_small-landscape-rock-tan/outdoor-essentials_tan-landscape-small-rock_image_204922_website.png?h=1000&iar=0&w=1000&sc_lang=en&hash=54785A7CF8CEABBF39F0789A63166424";
    } else if (randomNumber === 2) {
        choice = "Paper";
        imageUrl = "https://plaincanvascollective.com/cdn/shop/products/PearlGold_Front.png?v=1664598118";
    } else {
        choice = "Scissors";
        imageUrl = "https://rowleycompany.scene7.com/is/image/rowleycompany/rowley-general-purpose-right-hand-scissors-gpsweb?$s7Product$&fmt=png-alpha";
    }

    document.getElementById("choice").textContent = choice;
    document.getElementById("changingImage").src = imageUrl;

});

document.getElementById("generate2").addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice;
    let imageUrl;

    if (randomNumber === 1) {
        choice = "Rock";
        imageUrl = "https://www.outdooressentialproducts.com/-/media/project/ufpi/outdoor-essentials/products/images/landscape/rocks/204922_small-landscape-rock-tan/outdoor-essentials_tan-landscape-small-rock_image_204922_website.png?h=1000&iar=0&w=1000&sc_lang=en&hash=54785A7CF8CEABBF39F0789A63166424";
    } else if (randomNumber === 2) {
        choice = "Paper";
        imageUrl = "https://plaincanvascollective.com/cdn/shop/products/PearlGold_Front.png?v=1664598118";
    } else {
        choice = "Scissors";
        imageUrl = "https://rowleycompany.scene7.com/is/image/rowleycompany/rowley-general-purpose-right-hand-scissors-gpsweb?$s7Product$&fmt=png-alpha";
    }

    document.getElementById("choice").textContent = choice;
    document.getElementById("changingImage").src = imageUrl;

});

document.getElementById("generate3").addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice;
    let imageUrl;

    if (randomNumber === 1) {
        choice = "Rock";
        imageUrl = "https://www.outdooressentialproducts.com/-/media/project/ufpi/outdoor-essentials/products/images/landscape/rocks/204922_small-landscape-rock-tan/outdoor-essentials_tan-landscape-small-rock_image_204922_website.png?h=1000&iar=0&w=1000&sc_lang=en&hash=54785A7CF8CEABBF39F0789A63166424";
    } else if (randomNumber === 2) {
        choice = "Paper";
        imageUrl = "https://plaincanvascollective.com/cdn/shop/products/PearlGold_Front.png?v=1664598118";
    } else {
        choice = "Scissors";
        imageUrl = "https://rowleycompany.scene7.com/is/image/rowleycompany/rowley-general-purpose-right-hand-scissors-gpsweb?$s7Product$&fmt=png-alpha";
    }

    document.getElementById("choice").textContent = choice;
    document.getElementById("changingImage").src = imageUrl;
});


document.getElementById("generate").addEventListener("click", function() {
    document.getElementById("yourresult").textContent = "Your Choice: Rock";
});

document.getElementById("generate2").addEventListener("click", function() {
    document.getElementById("yourresult").textContent = "Your Choice: Paper";
});

document.getElementById("generate3").addEventListener("click", function() {
    document.getElementById("yourresult").textContent = "Your Choice: Scissors";
});

let rockFunction = () => {
    document.getElementById('generate').addEventListener('click', () => {
        let yourresult = 1;
        let robotresult = Math.floor(Math.random() * 3) + 1;

        if (yourresult === robotresult) {
        let gameresultContainer = document.getElementById('gameresult');
        gameresultContainer.textContent = "Result: Tie";
        gameresult = "Result: Tie";
        allscore +=1;
        } else if ((yourresult === 1 && robotresult === 2)) {
            let gameresultContainer = document.getElementById('gameresult');
        gameresultContainer.textContent = "Result: Loss";
        gameresult = "Result: Loss";
        losescore +=1;
        if (losescore === 3) {
            alert("Congratulations! You Lost!");
        }
        } else if ((yourresult === 1 && robotresult === 3)) {
            let gameresultContainer = document.getElementById('gameresult');
            gameresultContainer.textContent = "Result: Win";
            gameresult = "Result: Win";
            winscore +=1;
            if (winscore === 3) {
                document.getElementById('finalresult').innerText = "YOU WON!";
                document.getElementById('changingImage').src = "https://www.si.com/.image/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/MTY4MTA2NDIxNzM3MTcwMTkz/nico-hischier-devils-no1-1300jpg.jpg";
            }
        }

        document.getElementById("gameresult").textContent = gameresult;
        document.getElementById("debug").textContent = `Your result: ${yourresult}, Robot result: ${robotresult}`;
        winscoreContainer.textContent = "Your Score: " + winscore;
        losescoreContainer.textContent = "Robot's Score: " + losescore;
        allscoreContainer.textContent = "Ties: " + allscore;
    });
}

rockFunction();

let paperFunction = () => {
    document.getElementById('generate2').addEventListener('click', () => {
        let yourresult = 2;
        let robotresult = Math.floor(Math.random() * 3) + 1;

        if (yourresult === robotresult) {
            gameresult = "Result: Tie";
            allscore +=1;
        } else if ((yourresult === 2  && robotresult === 3)) {
            gameresult = "Result: Loss";
            losescore +=1;
            if (losescore === 3) {
                alert("Congratulations! You Lost!");
            }
        } else if ((yourresult === 2  && robotresult === 1)) {
            gameresult = "Result: Win";
            winscore +=1;
            if (winscore === 3) {
                document.getElementById('finalresult').innerText = "YOU WON!";
                document.getElementById('changingImage').src = "https://www.si.com/.image/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/MTY4MTA2NDIxNzM3MTcwMTkz/nico-hischier-devils-no1-1300jpg.jpg";
            }
        }

        document.getElementById("gameresult").textContent = gameresult;
        winscoreContainer.textContent = "Your Score: " + winscore;
        losescoreContainer.textContent = "Robot's Score: " + losescore;
        allscoreContainer.textContent = "Ties: " + allscore;
    });
}

paperFunction();

let scissorsFunction = () => {
    document.getElementById('generate3').addEventListener('click', () => {
        let yourresult = 3;
        let robotresult = Math.floor(Math.random() * 3) + 1;

        if (yourresult === robotresult) {
            gameresult = "Result: Tie";
            allscore +=1;
        } else if ((yourresult === 3  && robotresult === 1)) {
            gameresult = "Result: Loss";
            losescore +=1;
            if (losescore === 3) {
                alert("Congratulations! You Lost!");
                
            }
        } else if ((yourresult === 3  && robotresult === 2)) {
            gameresult = "Result: Win";
            winscore +=1;
            if (winscore === 3) {
                document.getElementById('finalresult').innerText = "YOU WON!";
                document.getElementById('changingImage').src = "https://www.si.com/.image/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/MTY4MTA2NDIxNzM3MTcwMTkz/nico-hischier-devils-no1-1300jpg.jpg";
            }
        }

        document.getElementById("gameresult").textContent = gameresult;
        winscoreContainer.textContent = "Your Score: " + winscore;
        losescoreContainer.textContent = "Robot's Score: " + losescore;
        allscoreContainer.textContent = "Ties: " + allscore;
    });
}

scissorsFunction();

document.getElementById("resetButton").addEventListener("click", resetGame);

function resetGame() {
    winscore = 0;
    losescore = 0;
    allscore = 0;
    document.getElementById('changingImage').src =
}