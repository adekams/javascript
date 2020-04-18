//  Task 3

//function parameter must be a whole number or integer
function divisibleNumber (int){
    let numbers=[];
    let result;
    for (i=1; i<= int; i++){ 
        if (Number.isInteger(int)){
            if (i % 2 === 0 && i %3 === 0 && i %5=== 0){
                result = "yu-gi-oh";
                numbers.push(result);
            }
            else if(i % 2 === 0 && i %3 === 0){
                result = "yu-gi";
                numbers.push(result);
            }
            else if (i % 2 === 0 && i %5=== 0){
                result = "yu-oh";
                numbers.push(result);
            }
            else if (i % 2 === 0){
                result = "yu";
                numbers.push(result);
            }
            else if (i%3 === 0){
                result = "gi";
                numbers.push(result);

            }
            else if (i% 5 === 0){
                result = "oh";
                numbers.push(result);

            }
            else{
                result = i;
                numbers.push(result);
            }
        }else{
            console.log ("Number not whole number!");
        }
    }

    console.log(numbers); 
    return(numbers);  
}

//call function with 100 as arguement
divisibleNumber(100);
//call function with a random number of choice as arguement
divisibleNumber(555);