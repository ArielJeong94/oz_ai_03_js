// Python: if / elif / else
// if is_student:
//     print("hello student")

// JS
let age = 20;

if (age >= 19) {
    console.log("성인");
} else if (age >= 8) {
    console.log("학생");
} else {
    console.log("어린이");
}

let score = [];
// true로 판단되는 값: 1, -1, "100", "0", [], {}, function() {}, true
// false로 판단되는 값(falsy): false, 0, "", null, undefined, NaN
if (score) {
    console.log("점수: " + score);
} else {
    console.log("점수 없음");
};