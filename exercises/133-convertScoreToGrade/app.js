function convertScoreToGrade(score) {
    // your code here
    if(score > 100  || score < 0){return 'INVALID SCORE'}
    if(score >= 90){return 'A'}
    if(score >= 80){return 'B'}
    if(score >= 70){return 'C'}
    if(score >= 60){return 'D'}
    return 'F'
}

var output = convertScoreToGrade(-25);
console.log(output); // --> 'A'