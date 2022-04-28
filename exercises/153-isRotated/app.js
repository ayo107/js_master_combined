function isRotated(str1, str2) {
    
    if (str1.length != str2.length)
        return false;
         
    if (str1.length < 2)
    {
        return str1.localeCompare(str2);
    }
   
    let clock_rot = "";
    let anticlock_rot = "";
    let len = str2.length;
    anticlock_rot = anticlock_rot +
                    str2.substring(len - 2, len + 1) +
                    str2.substring(0, len -1) ;
   
    clock_rot = clock_rot +
                str2.substring(2, str2.length - 2 + 1) +
                str2.substring(0, 2 + 1);
   
    return (str1.localeCompare(clock_rot) ||
            str1.localeCompare(anticlock_rot));
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false