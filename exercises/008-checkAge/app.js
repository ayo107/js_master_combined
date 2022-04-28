function checkAge(name, age) {
  // your code here
  if (age >= 21){
    return ('Welcome, ' + name + '!');
    } else {
    return ('Go home, ' + name + '!');
      }
    }
var output = checkAge('Adrian', 19);
console.log(output);
