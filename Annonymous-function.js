
//QUESTION NO.1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let find_odd = function (numbers)  {
    let odd_numbers = [];
    for (let index of numbers) {
        if (index % 2 !== 0) {
            odd_numbers.push(index);
        };
    };
    return odd_numbers;
};

console.log(find_odd(numbers));

//___________________________________________________________________________________________


//QUESTION NO.2

let words = ['apple', 'orange', 'grape', 'mango'];

let titlecase = function (words)  {
    let caps = [];
    for (let word of words) {
        caps.push(word.charAt(0).toUpperCase() + word.slice(1));
    };
    return caps;
}
console.log(titlecase(words));

// __________________________________________________________________________________________________________

//QUESTION NO.3

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let total = function (numbers1)  {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    return sum;
}

console.log(total(numbers1));

// __________________________________________________________________________________________________________

//QUESTION NO.4

let arr1 = [1,2,3,4,5,6,7];

let findPrime = function (arr1) {

  let result = arr1.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
           
    });
    return result;
};
console.log(findPrime(arr1));

//_______________________________________________________________________________________________________________________

// QUESTION NO.5

let str = ["malayalam", "madam", "array"];

let palindrom = function (str) {
    let Result = [];
    for (let i = 0; i < str.length; i++){
        let data = str[i].split("").reverse().join("");
        if (data === str[i]) {
            Result.push(str[i]);
        }
    }
    return Result;
   
}
console.log(palindrom(str));

//___________________________________________________________________________________________________________________

//QUESTION NO.6

let sampleInput1 = [1, 3, 5, 7];
let sampleInput2 = [2, 4, 6, 8];

let median = function (sampleInput1,sampleInput2)  {
    let combinedArr = [...sampleInput1, ...sampleInput2];
    combinedArr.sort((a, b) => a - b);
    let n = combinedArr.length;
    if (n % 2 == 0) { 
        return ((combinedArr[n / 2] + combinedArr[n / 2 - 1] )/2)
    }
    else {
        return combinedArr[Math.floor(n / 2)];
    }
};
console.log(median(sampleInput1, sampleInput2));

//__________________________________________________________________________________________________________________

// QUESTION NO.7

let rotateArr = [1, 2, 3, 4, 5];
let k = 3;
let rotatingArrays = function (rotateArr, k) {
    
    for (let i = 0; i < k; i++){
        rotateArr.push(rotateArr[i]);
    }
    for (let i = 0; i < k; i++){
        rotateArr.shift();
    }
    return rotateArr;
};
console.log(rotatingArrays(rotateArr, k));
