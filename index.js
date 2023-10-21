//Challenge- Write a function that takes an array as a parameter and adds the sum of all items in the array. 

//Defining the function:
function arrayTotal(array){ 
    let total = 0                               //Set the counting varibale to 0.
    for (let i = 0; i < array.length; i++){    //Loops through the array.
        total += array[i]                     //Adds the value of the current array element to the value of total.
    }
return total                     //Returns the value of total after the loop executes.
}
