//1 Return a string in reverse

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));


//2 Return true if palindrome and false if not
function isPalindrome(str) {
    return str === reverseString(str);
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));


// Return an integer in reverse
function reverseInt(int) {
    return parseInt(reverseString(int.toString()));
}
console.log(reverseInt(521));

//Return a string with the first letter of every word capitalized
function capitalizeLetters(str) {
    return str.split(' ').map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}
console.log(capitalizeLetters('i love javascript'));


// Return the character that is most common in a string
function maxCharacter(str) {
    var charMap = {};
    var maxChar = '';
    var maxCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (charMap[str[i]]) {
            charMap[str[i]]++;
        } else {
            charMap[str[i]] = 1;
        }
    }
    for (var key in charMap) {
        if (charMap[key] > maxCount) {
            maxCount = charMap[key];
            maxChar = key;
        }
    }
    return maxChar;
}
console.log(maxCharacter('javascript'));


// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();




// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
function longestWord(str) {
    return str.split(' ').reduce(function(longest, word) {
        return word.length > longest.length ? word : longest;
    },'');
}
console.log(longestWord('Hi there, my name is Brad'));
console.log(longestWord('My name is Brad'));
console.log(longestWord('Brad'));



// Split an array into chunked arrays of a specific length
function chunkArray(arr, len) {
    var chunks = [];
    var i = 0;
    while (i < arr.length) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


//Take an array of arrays and flatten to a single array
function flattenArray(arrays) {
    return arrays.reduce(function(a, b) {
        return a.concat(b);
    });
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));


//Return a sum of all parameters entered regardless of the amount of numbers
function addAll () {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}
console.log(addAll(1, 2, 3, 8));


//Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
function sumPrimes(num) {
    var primes = [];
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.reduce(function(a, b) {
        return a + b;
    });
}
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(sumPrimes(10));

// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
function removeFromArray(arr) {
    var args = Array.prototype.slice.call(arguments);
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}
console.log(removeFromArray([2, 3, 4, 6, 6, 'hello'], 2, 6));

// Take in an array and return an array of the sums of even and odd numbers
function evenOddSums(arr) {
    var even = arr.filter(function(val) {
        return val % 2 === 0;
    }).reduce(function(a, b) {
        return a + b;
    }), odd = arr.filter(function(val) {
        return val % 2 !== 0;
    }).reduce(function(a, b) {
        return a + b;
    }), result = [even, odd];
    return result;
}
console.log(evenOddSums([50, 60, 60, 45, 71]));