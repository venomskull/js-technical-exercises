/*
To check two nos and return true if one of the number is 100 or if the sum of the two nos 
is 100
*/
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b === 100);
// console.log(isEqualTo100(100,2));
// console.log(isEqualTo100(2,100));
// console.log(isEqualTo100(30,70))

/*
To get the extension of a filename
*/
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getFileExtension('index.html'));
// console.log('1.txt'.lastIndexOf('.'));
// console.log('1.txt'.lastIndexOf('t'));
// console.log('1.txt'.indexOf('t'));

/*
To replace every character in a given string with the character following it in the 
alphabet
*/
const moveCharsForward = (str) =>
    str
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');
// console.log('hai'.charCodeAt(0));
// console.log(String.fromCharCode('hai'.charCodeAt(1)));
// console.log(moveCharsForward('abcdef')); // coming incorrect

/*
Get current date and print in the expected format
*/
const formatDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
// console.log(formatDate());

/*
To create a new string adding 'New!' infront of a given string. If the given string 
begins with 'New!' already then retur the original string
*/
const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;
// console.log(addNew('News! Hello'));

/*
To create a new string from a given string taking the first 3 characters and the last 3 
characters of a string and adding them together. the string length must be 3 or more, 
if not, the original string is returned
*/
const makeNewString = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
// console.log(makeNewString('abc123abc'));
// console.log(makeNewString('ab'));

/*
Extract the first half of the string
*/
const firstHalf = (str) => str.slice(0, str.length / 2);
console.log(firstHalf('abc'));
console.log(firstHalf('abcdefg'));

/*
Concatenate two strings except their first character
*/
const concatenate = (str1, str2) => str1.slice(1) + str2.slice(2);
// console.log(concatenate('Junior', 'Developer'));
// console.log('abcd'.slice(1,3));

/*
Given two values, write a js prog to find out which one is nearest to 100
*/
const closestTo100 = (a, b) => 100 - a < 100 - b ? a : b;
// console.log(closestTo100(90, 91));
// console.log(closestTo100(9, 91));

/*
To check a given string contains 2 to 4 occurrences of a specified character
*/
const countChars = (str, char) => str.split('').filter(ch => ch === char).length;
const contains2To4 = (str, char) => countChars(str, char) >= 2 && countChars(str, char) <= 4;
// console.log(contains2To4('ooh', 'o'));
// console.log(contains2To4('oh', 'o'));
// console.log(contains2To4('oooh', 'o'));
// console.log(contains2To4('ooooh', 'o'));
// console.log(contains2To4('oooooh', 'o'));

/*
To find numner of even digits in an array of integers
*/
const countEvenNos = (arr) => arr.filter(ar => ar % 2 === 0).length;
// console.log(countEvenNos([1,2,3,4,5,6]));
// console.log(countEvenNos([2,2,2,2,2]));
// console.log(countEvenNos([1,3,5,7]));

/*
To find the number of even values up to a given number
*/
const createArray = (num) => {
    const returnArr = [];
    for (let i = 1; i <= num; i++) {
        returnArr.push(i);
    }
    return returnArr;
};
const arrEvenCount = (arr) => arr.filter(ar => ar % 2 === 0).length;
// console.log(createArray(6));
// console.log(createArray(9));
// console.log(arrEvenCount(createArray(6)));
// console.log(arrEvenCount(createArray(9)));

/*
Tocheck whether a given array of integers is sorted in ascending order
*/
const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) return false;
    }
    return true;
}
// console.log(isAscending([1,2,3,4,5,6]));
// console.log(isAscending([1,2,3,4,7,6]))

/*
To get largest even number from an array of integers
*/
const largestEven = (arr) => Math.max(...arr.filter(ar => ar % 2 === 0));
// console.log(largestEven([1,2,3,4,5,6]));
// console.log(largestEven([1,2,44,4,5,6]));

/*
To replace the first digit in a string (should contains at least digit) with 
$ character 
*/
const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$');
// const replaceFirstDigit = (str) => str.replace(/[0-9]/g, '$'); //global
console.log(replaceFirstDigit('abc1def'));
console.log(replaceFirstDigit('abc1de1f'));

/*
Check for leap year
*/
const isLeapYear = (year) => year % 4 === 0;
// console.log(isLeapYear(2014));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2017));

/*
To compare  two objects to determine if the first one contains the same properties as 
the second one (which may also have additional properties)
*/
const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 3, c: 3 };
const objC = { a: 1, b: 2, d: 3 };
const objectEqual = (a, b) => Object.keys(a).every(key => b[key]);
// console.log(objectEqual(objA, objB));
// console.log(objectEqual(objA, objC));

/*
To convert a comma-separated values (csv) string to a 2D array. A new line indicates 
a new row in the array

Example
--------
abc,def,ghi
jkl,mno,pqr
stu,vwx,yza
*/
const parseCSVSplit = (csvString) => csvString.split('\n');
const parseCSV = (csvString) => csvString.split('\n').map(row => row.split(',')); //this one correct answer
// console.log(parseCSVSplit(`abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`))
// console.log(parseCSV(`abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`))

/*
To generate a random hexadecimal color code
*/
