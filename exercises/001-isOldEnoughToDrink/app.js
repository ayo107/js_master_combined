function isOldEnoughToDrink(age){
    // your code here	

    if (age >= 21) {
        return true;
    }
    else if (age <= 20){
        return false;
    }

}
console.log(isOldEnoughToDrink(19));