// Concat (= concatenate)
// 문자열을 이어붙이는 연산자

// Python "Hello" + " " + "World" => "Hello World"

let firstName = "Alex";
let lastName = "Kim";

console.log(firstName + " " + lastName);

// Python: 10 + '20' => TypeError
// JS: 10 + '20' -> '10' + '20' => '1020'(타입 변환이 자동으로 일어남)
console.log(10 + "20");    // "1020" 