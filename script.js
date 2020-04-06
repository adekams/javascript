//Array of objects
const data = [
    {
        principal: 2500, 
        time: 1.8
    }, 
    {
        principal: 1000, 
        time: 5
    }, 
    {
        principal: 3000, 
        time: 1
    }, 
    {
        principal: 2000, 
        time: 3
    }
];
        
//function interestCalculator with 'myArray' as a single arguement
function interestCalculator(myArray){
    let interestData= [];
    let rate;

    for (let i= 0; i< myArray.length; i++){

        if (myArray[i].principal >= 2500 && (myArray[i].time > 1 && myArray[i].time < 3)){
            rate = 3;   
        }

        else if (myArray[i].principal >= 2500 && myArray[i].time >= 3){
            rate = 4;                    
        }

        else if (myArray[i].principal < 2500 || myArray[i].time <= 1){
            rate = 2;                    
        }
        
        else{
            rate = 1;
        }
        let interest = (myArray[i].principal* rate * myArray[i].time)/100;
        
        interestData.push({principal: myArray[i].principal, rate: rate, time: myArray[i].time, interest: interest});
    } 
    
    console.log(interestData);
    return interestData;          
}

interestCalculator(data);
