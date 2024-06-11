// number guessing game 
let gameNum = 25;
let userNum = prompt("guess the number : ");
while (userNum != gameNum ){
    userNum = prompt("you guess the wrong number , try again ");
}
console.log("congratulations you gess the right number");
// there's a problem with prompt because we can not use (!==) . prompt always return string so it can not match our number