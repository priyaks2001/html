var rand1= Math.floor(Math.random()*6)+1;
var randimage1 = ("images/dice"+rand1+".png");
document.querySelectorAll("img")[0].setAttribute("src",randimage1);

var rand2 = Math.floor(Math.random()*6)+1;
var randimage2 = ("images/dice"+rand2+".png");
document.querySelectorAll("img")[1].setAttribute("src",randimage2);

var rand3 =Math.floor(Math.random()*6)+1;
var randimage3 = ("images/dice"+rand3+".png");
document.querySelectorAll("img")[2].setAttribute("src",randimage3);

    if((rand1 === rand2) && (rand2 === rand3) && (rand1 === rand3)){
        document.querySelector("h1").textContent = "Draw! Try Again"
    }
    else if((rand1 === rand2) || (rand2 === rand3)|| (rand1 === rand3)){
        if((rand1 > rand3) && (rand2> rand3)){
            document.querySelector("h1").textContent = "Player 1 and 2 are winners"; 
            document.querySelectorAll("img")[0].classList.add("border");
            document.querySelectorAll("img")[1].classList.add("border");
         }
         else if((rand1 < rand3) && (rand2 < rand3)){
             document.querySelector("h1").textContent = "Player 3 wins"; 
             document.querySelectorAll("img")[2].classList.add("border");
         }
         else if((rand1 > rand2) && (rand3> rand2)){
             document.querySelector("h1").textContent = "Player 1 and 3 are winners";
             document.querySelectorAll("img")[0].classList.add("border"); 
             document.querySelectorAll("img")[2].classList.add("border");
         }
         else if((rand1 < rand2) && (rand3 < rand2)){
             document.querySelector("h1").textContent = "Player 2 wins"; 
             document.querySelectorAll("img")[1].classList.add("border");
         }
         else if((rand2 > rand1) && (rand3> rand1)){
             document.querySelector("h1").textContent = "Player 2 and 3 are winners"; 
             document.querySelectorAll("img")[2].classList.add("border");
             document.querySelectorAll("img")[1].classList.add("border");
                  }
         else if((rand1 < rand3) && (rand2 < rand3)){
             document.querySelector("h1").textContent = "Player 1 wins"; 
             document.querySelectorAll("img")[0].classList.add("border");
         }
    }
    else if((rand1 !== rand2) && (rand2 !== rand3) && (rand1 !== rand3)){
        if ((rand1>rand2) && (rand1 > rand3) ) {
            document.querySelector("h1").textContent = "Player 1 wins"; 
            document.querySelectorAll("img")[0].classList.add("border");
        }
        else if((rand2>rand1) && (rand2 > rand3)) {
            document.querySelector("h1").textContent = "Player 2 wins";
            document.querySelectorAll("img")[1].classList.add("border");
        }
        else{
            document.querySelector("h1").textContent = "Player 3 wins";
            document.querySelectorAll("img")[2].classList.add("border");
        }
    }

// function addclass(){
//     document.querySelector
// }