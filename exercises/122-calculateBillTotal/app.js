function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    var billTotal = preTaxAndTipAmount *0.15 + preTaxAndTipAmount*0.095 +preTaxAndTipAmount
    return billTotal
}
var output = calculateBillTotal(100);
console.log(output); // --> 24.9