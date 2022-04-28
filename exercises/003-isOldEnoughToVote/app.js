function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18 ){
    return true;
}
else if (age <= 17){
    return false;
}
}
console.log(isOldEnoughToVote(17));