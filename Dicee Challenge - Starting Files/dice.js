
if (window.performance.navigation.type === 1) {
    myFunction();
  }
function myFunction()
{ 

var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
var s1="images/"+"dice"+a+".png";
var s2="images/"+"dice"+b+".png";

document.querySelector(".img1").src=s1;
document.querySelector(".img2").src=s2;
if(a>b)
{
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(a===b)
{
    document.querySelector("h1").innerHTML="draw 😵😵";
}
else
{
    document.querySelector("h1").innerHTML="player 2 wins!";
}

}