//write a function that takes an array as a parameter and adds the sum of all items in the array. 

function arrayTotal(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
return total
}
