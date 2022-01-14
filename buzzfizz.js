//The function loops until it reaches the user's value
//Its purpose is to find all the numbers that are divisible to 3, 5, and both 3 & 5 from 1 to x
function buzzfizz(x){
    //this loop is meant to find which numbers satisfy the conditions below
    for(i=1; i<=x; i++){
    
    //this if statement checks if the number from 1 to x is divisible by 3 and 5
    //the if statement also prints the value and 'fizz buzz' so that we can confirm the condition is being satisfied
    if(i%3 == 0 && i%5 == 0){
        console.log(i + ' :fizz buzz')
     }
    //this if statement checks if the number from 1 to x is divisible by 5
    //the if statement also prints the value and 'buzz' so that we can confirm the condition is being satisfied
    else if(i%5 == 0){
        console.log(i + ' :buzz')
    }
    //this if statement checks if the number from 1 to x is divisible by 3
    //the if statement also prints the value and 'fizz' so that we can confirm the condition is being satisfied
    else if (i%3 == 0){
        console.log(i + ' :fizz')
    }

    //else return

   }

}

//asks the user for a value which will be used within the function
const input = prompt ('Enter a value: ');
buzzfizz(input)