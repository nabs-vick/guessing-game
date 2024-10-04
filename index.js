const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1) + minNum);
 let attempts = 0;
 let running = true;
 let guess;

 while(running){
    guess = window.prompt(`guess a number between ${minNum} to ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++
        if(guess < answer ){
            console.log("TOO LOW THAN THE NUMBER");
        }
        else if(guess > answer){
            console.log("TOO HIGH THAN THE NUMBER");
        }
        else{
            console.log(`CORRECT! THE ANSWER IS ${answer}, your attempts are ${attempts} attempts`);
            running = false;
        }
    }
    
 }