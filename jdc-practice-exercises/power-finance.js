/*
Math Challenge

Have the function MathChallenge(num1, num2) take both parameters being passed and return
 the GREATEST COMMON FACTOR. That is, return the greatest number that evenly goes into both 
 numbers with no remainder.
 For example: 12 and 16 both are divisible by 1,2 and 4 so the output should be 4.
 The range for both parameters will be from 1 to 10^3.

 Examples
 Input: 7 & num2 = 3
 Output: 1

 Input 36 & num2 = 54
 Output: 18
*/

function MathChallenge(num1, num2) {
    const num1Factors = [];
    for (let i = 0; i <= num1; i++) {
        if (!(num1 % i)) {
            num1Factors.push(i);
        }
    }
    // return num1Factors;
    const num2Factors = [];
    for (let i = 0; i <= num2; i++) {
        if ((num2 % i) === 0) {
            num2Factors.push(i);
        }
    }
    // return num2Factors;

    const gcf = num1Factors.filter(val => num2Factors.includes(val));
    return gcf[gcf.length - 1];
}

MathChallenge(8, 12);


/*
String Challenge

Have the function StringChallenge(str, num) take the str parameter and perform a CAESAR CIPHER
shift on it using the num parameter as the shifiting number. A Caesar Cipher works by shifting 
each letter in the string N places in the alphabet (in this case N will be num). Punctuation,
spaces and capitalization should remain intact. For example if the string is 'Caesar Cipher'
and num is 2 the output should be Ecguct Ekrjgt'.

Examples
Input: 'Hello' & num = 4
Output: Lipps

Input: 'abc' & num = 0
Output: abc
*/

function stringChallenge(str, num) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetsUpper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const string = str.split('');
    const caesarCiphar = [];

    string.forEach(element => {
        if (alphabetsUpper.includes(element)) {
            const foundUpper = alphabetsUpper.findIndex(x => element === x);
            if (foundUpper !== -1) {
                let iUpper = foundUpper + num;
                if (iUpper > 25) {
                    iUpper = iUpper % 26
                }
                caesarCiphar.push(alphabetsUpper[iUpper]);
            }
        } else if (alphabets.includes(element)) {
            const found = alphabets.findIndex(a => element === a);
            if (found !== -1) {
                let i = found + num;
                if (i > 25) {
                    i = i % 26;
                }
                caesarCiphar.push(alphabets[i]);
            }
        } else {
            caesarCiphar.push(element);
        }
    })

    return caesarCiphar.join('');
}

stringChallenge('Ravanan Itho', 17);