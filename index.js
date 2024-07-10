
// console.log("hey dlgash still here you are a amaizing front end developer");

// let images = [
//     "dice1.png",
//     "dice2.png",
//     "dice3.png",
//     "dice4.png",
//     "dice5.png",
//     "dice6.png"
// ];

// let getimglength = images.length;
// let randomNumber = Math.random();
// let getresult = getimglength * randomNumber; 
// let getfloorn = Math.floor(getresult);

// let display = images[getfloorn];

// let displayimg = document.querySelector(".img-one").src = display;

// let img = document.querySelector("img-one");

// let randomnumber = [1,2,3,4,5,5];

// img = Math.floor(Math.random() * 6 +1);
// console.log(img);

// img.innerHTML = randomnumber[img];

// bshti chandin xalatia alhamdulla mn shia b drusti bzanm ka solution drusti kishka agar mn d dastada hilaba az o
//  li div na garabam az na da gahashtm solution we alhamdulla chi chara da dasta na dahila hata dgahya solution


// const leftimg = document.querySelector("img-left");

// const imgary = ['Dice1.png' ,'Dice3.png' ,'Dice3.png' ,'Dice4.png' ,'Dice5.png' ,'Dice6.png'];

// function randomimg () {
//     let randomindex = Math.floor(Math.random() * imgary.length);
//     leftimg.src = imgary[randomindex];
// }

// randomimg();

// let img = document.querySelector(".img-left");

// img.src = "Dice1.png";

// let img = document.querySelector(".img-left");

// let imgary = ['./images/dice1.png' , './images/dice2.png' , './images/dice3.png' , './images/dice4.png' , './images/dice5.png' , './images/dice6.png'];

// function randomimg() {
//   let randomindex = Math.floor(Math.random() * imgary.length) +1;
//     img.src = imgary[randomindex];
// }

// randomimg();


// const img1 = document.querySelector(".img-left");
// const img2 = document.querySelector(".img-right")
// const heading = document.querySelector("h1");

// // player 1 code

// const img1ary = ['./images/dice1.png', './images/dice2.png','./images/dice3.png','./images/dice4.png', './images/dice5.png', './images/dice6.png'];

//   const randomindex1 = Math.floor(Math.random() * img1ary.length) +1;
//   img1.src = img1ary[randomindex1];

// // player 2 code

// const img2ary = ['./images/dice1.png', './images/dice2.png','./images/dice3.png','./images/dice4.png', './images/dice5.png', './images/dice6.png'];

//   const randomindex2 = Math.floor(Math.random() * img2ary.length) +1;
//   img2.src = img2ary[randomindex2];


// if (randomindex1 > randomindex2) {
//   heading.innerHTML = "player 1 win"
// } else if(randomindex1 < randomindex2) {
//   heading.innerHTML = "player 2 win";}
// } else if(randomindex1 == randomindex2); {
//   heading.innerHTML = "Draw!";
// }

// if (randomindex1 > randomindex2) {
//     heading.innerHTML = "player 1 win";
// } if (randomindex1 < randomindex2) {
//   heading.innerHTML = "player 2 win";
// } if(randomindex1 == randomindex2) {
//   heading.innerHTML = "Draw!";
// }

// var randomnumber = ;
// var randomimg




// ava rika dr.angela ya


var randomnumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceimage1 = "Dice" + randomnumber1 + ".png";

var randomImagesource1 = randomDiceimage1;

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src" , randomImagesource1);


var randomnumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceimage2 = "Dice" + randomnumber2 + ".png";

var DiceImgaeSource2 =  randomDiceimage2;

var Imgae2 = document.querySelectorAll("img")[1];

Imgae2.setAttribute("src" , DiceImgaeSource2);


if(randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 win!";
}  
else if(randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win!";
}
else{
document.querySelector("h1").innerHTML = "Draw!";
}