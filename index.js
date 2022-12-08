var n= Math.random();
n=Math.floor((n*6)+1);

var randomImage = "dice" + n + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , "image/"+randomImage);

// document.querySelectorAll("div src")[0].innerHTML="image/"+randomImage;

var m= Math.random();
m=Math.floor((m*6)+1);

var randomImage2 = "dice" + m+ ".png";

document.querySelectorAll("img")[1].setAttribute("src" , "image/"+randomImage2);

if(n>m){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩"
}
else if(n<m){
document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
