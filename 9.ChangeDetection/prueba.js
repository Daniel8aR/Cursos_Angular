var plusOne = function(digits) {
    var add = true;
    for (var i=digits.length-1; i>=0; i--){
        console.log(i)
        if (!add) break

        if (digits[i] + 1 === 10){
            digits[i] = 0;

            if (i === 0) return [1, ...digits];
        } else {
            digits[i] += 1;
            add = false;
        }
    }
    return digits;
};

// console.log(plusOne([1, 2, 3]))
// console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))