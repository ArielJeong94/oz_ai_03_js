// Python: X
// JS: undefined -> 값이 정의되지 않음(값이 할당되지 않음)


// 선언(declaration) vs. 할당(assignment)

// Python에서는 변수를 선언 + 할당
// ex) username = "Alice"
// 1. username이라는 변수 선언
// 2. username이라는 변수에 "Alice"라는 값 할당

// JS에서는 변수를 선언과 할당을 분리할 수 있음
let score;      // 선언(declaration)
console.log(score);
console.log(typeof score);

score = 100;    // 할당(assignment)
console.log(score);
console.log(typeof score);