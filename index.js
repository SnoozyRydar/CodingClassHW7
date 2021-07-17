// 1
const isArray = (input) => {
    return Array.isArray(input);
};

//2
const arrayJoin = (input) => {
    return input.join('$');
};

//3 
const findNumerIndex = (arr, num) => {
    let result;
    arr.forEach((v, i) => {
        if (v === num) {
            result = i;
        }
    });

    return 'Index of ${num} is ${result}';

};

//4
const sum = (nums) => {
    let total = 0;
    nums.forEach((v) => {
        total = total + v;
    });
    return total;
};

//5
const additionReducer = (acc, val) => acc + val;
const multiplicationReducer = (acc, val) => acc * val;

const reduce = (nums) => nums.reduce(multiplicationReducer);


//6
const removeDuplicates = (nums) => {
    const unique = [];
    nums. forEach (v => {
        if (unique.includes(v)) {

        } else {
            unique.push(v);
        }
    });
    return unique;
};

//7 (code from peter)
const findLeapYear = (start, end) => {
    const leapYears = [];

    for (let i = start; i <= end; i++){
        if (i % 4 === 0) {
            if (i % 100 !== 0 || i % 400 ===0) {
                leapYears.push(i);
            }
        }
    }
    return leapYears;
};

