//  QUESTION NO.1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let find_odd =  (numbers) =>  {
    let odd_numbers = [];
    for (let index of numbers) {
        if (index % 2 !== 0) {
            odd_numbers.push(index);
        };
    };
    return odd_numbers;
};

console.log(find_odd(numbers));

// __________________________________________________________________________________________________________


// QUESTION NO.2

let words = ['apple', 'orange', 'grape', 'mango'];

let titlecase = (words) => {
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

let total =  (numbers1) => {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    return sum;
}

console.log(total(numbers1));

//___________________________________________________________________________________________________________________

//QUESTION No.4

let arr1 = [1,2,3,4,5,6,7];

let findPrime =  (arr1) => {

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

//______________________________________________________________________________________________________________________

// QUESTION NO.5

let str = ["malayalam", "madam", "array"];

let palindrom = (str)=> {
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

