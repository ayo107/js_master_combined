function isOldEnoughToDrive(age) {
  // your code here
    if (age >= 16) {
        return true;
    }
    else if (age <= 15){
        return false;
    }
}
console.log(isOldEnoughToDrive(18));