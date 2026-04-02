// 지금까지 배운 JS 문법(조건문, 반복문, 함수 등)을 활용하는 실습

function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    };

    // 평균(산술평균) = 총합 / 개수
    // 총합
    let sum = 0;
    for (const i of scores) {
        sum += i
    };
    // 개수
    count = scores.length;
    avg = sum / count;
    return avg;
};

const scores = [80, 85, 92, 97];
const average = getAverage(scores);
console.log(average);