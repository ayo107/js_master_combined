function flipPairs(input){
    // your code here
    return [...input].map((c, i, a) => a[i + ((i + 1) % 2 || -1)] || c).join('');
    
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
