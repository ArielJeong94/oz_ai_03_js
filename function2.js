// 함수를 값처럼 다루기
// 1) 함수를 변수에 할당할 수 있다. 

// 함수 정의 -> 설명서/설계도
function sayHello() {
    console.log("Hello");
    return "Hello";
};

// 함수 호출 -> 기능 실제로 사용
sayHello();

// 함수 -> 기능 그 자체
sayHello
console.log(sayHello);

// 1) 함수를 변수에 할당 가능
const f = sayHello;
console.log(f);
f();

// 2) 함수를 다른 함수의 인자로 전달 가능
function run(fn, name) {
    console.log("start call...")
    a = fn();
    console.log("end call...")
    console.log(a, name);
};
run(f, "Alex");

// (기본) 함수를 선언한 곳에서 직접 호출
// (응용) 함수를 선언한 곳과 호출하는 곳이 달라질 수 있다
