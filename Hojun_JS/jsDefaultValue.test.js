
function calculatePrice({total = 0, tax = 0.1, tip = 0.15} = {}) {
    return total + (total * tax) + (total * tip);
}


const bill = calculatePrice({total:1000});


// 매개변수를 아무것도 넘겨주지 않아도 객체로 넘겨주어 에러가
// 발생하지 않고 결과값 0 을 return 한다.
console.log(calculatePrice());

test("함수 인수의 기본값을 적용하는 방법", () => {
    expect(bill).toBe(1250);
});