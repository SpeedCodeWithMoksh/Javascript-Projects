// Player 1

//Genrate a random number

var random1 = Math.floor(Math.random()*6)+1;

//Get the Element

var dice1 = document.querySelector('.img-1');

// Path for the Image

var Select1 = "/img" + "/dice" + random1 + ".png";

dice1.setAttribute("src",Select1);

// same for player 2

//Genrate a random number

var random2 = Math.floor(Math.random()*6)+1;

//Get the Element

var dice2 = document.querySelector('.img-2');

// Path for the Image

var Select2 = "/img" + "/dice" + random2 + ".png";

dice2.setAttribute("src",Select2);


if (random1>random2) {
    document.querySelector('h1').textContent = "Player 1 Won the Match";
}

else if (random2>random1) {
    document.querySelector('h1').textContent = "Player 2 Won the Match";
}

else{
    document.querySelector('h1').textContent = "Match Draw";
}