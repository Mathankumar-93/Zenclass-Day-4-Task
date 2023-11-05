// QUESTION NO.1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (numbers)  {
    let odd_numbers = [];
    for (let index of numbers) {
        if (index % 2 !== 0) {
            odd_numbers.push(index);
        };
    };
    console.log(odd_numbers);
})(numbers);

// QUESTION NO.2

let words = ['apple', 'orange', 'grape', 'mango'];

(function (words) {
    let caps = [];
    for (let word of words) {
        caps.push(word.charAt(0).toUpperCase() + word.slice(1));
    };
    console.log(caps);
})(words);

// QUESTION NO.3

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (numbers1) {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    console.log(sum);
})(numbers1);

// QUESTION NO.4

let arr1 = [1,2,3,4,5,6,7];

(function (arr1) {

  let result = arr1.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
           
    });
    console.log(result);
})(arr1);

// QUESTION NO.5

let str = ["malayalam", "madam", "array"];

(function (str) {
    let Result = [];
    for (let i = 0; i < str.length; i++) {
        let data = str[i].split("").reverse().join("");
        if (data === str[i]) {
            Result.push(str[i]);
        }
    }
    console.log(Result);
   
})(str);

// QUESTION NO.6

let sampleInput1 = [1, 3, 5, 7];
let sampleInput2 = [2, 4, 6, 8];

(function (sampleInput1,sampleInput2)  {
    let combinedArr = [...sampleInput1, ...sampleInput2];
    combinedArr.sort((a, b) => a - b);
    let n = combinedArr.length;
    if (n % 2 == 0) { 
        console.log(((combinedArr[n / 2] + combinedArr[n / 2 - 1]) / 2));
    }
    else {
        console.log(combinedArr[Math.floor(n / 2)]);
    }

})(sampleInput1, sampleInput2);

// QUESTION NO.7

let rotateArr = [1, 2, 3, 4, 5];
let k = 3;
( function (rotateArr, k) {
    
    for (let i = 0; i < k; i++){
        rotateArr.push(rotateArr[i]);
    }
    for (let i = 0; i < k; i++){
        rotateArr.shift();
    }
    console.log(rotateArr);
})(rotateArr,k);







