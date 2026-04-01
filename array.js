// 배열(Array)
// Python: List

let numbers = [10, 20, 30];
console.log(numbers[0]);

// 마지막 요소에 접근하는 방법
console.log(numbers.at(-1));
console.log(numbers[numbers.length - 1]);

// Python: numbers[3] -> IndexError
console.log(numbers[3]); // undefined

// 반복문
for (let i in numbers) {
    console.log(numbers[i]);
};

// 다른 방식
console.log("=================")
let scores = [82, 95, 77];
for (const score of scores) {
    console.log(score);
};
// index와 같이
console.log("=================")
for (const [i, score] of scores.entries()) {
    console.log(i + "번째 요소의 값: " + score);
};

// 다양한 데이터 타입을 혼합해서 사용하는 것도 가능(권장은 아님)
let data = ["Hello", 100, true];