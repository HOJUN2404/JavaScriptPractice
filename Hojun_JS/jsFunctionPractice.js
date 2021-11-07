
// 매개변수 name을 받는 함수 hello 생성
function hello(name){
    console.log('안녕 ' + name);
}

// '호준'을 매개변수로 넘기며 함수 hello 호출
hello('호준');


// 매개변수 num1을 받는 함수 생성
function increase(value){
    value += 1;
    return value;
}


let num1 = 30;

hello(increase(num1));

console.log(num1);

// 위의 실습 예제를 살펴보면 num1변수의 값 30을 넘겨 +1을 해주는 함수를
// 사용했지만 사용할 때 key를 넘기는 것이 아닌 value만 넘겨
// 함수에서는 31을 return 하지만 이후에 다시 num1은 30을 출력한다.



// ES6 에서 도입된 화살표 함수

// const name1 = prompt("이름을 입력하세요");
// function(name1) {
//     console.log(name1 + "님 안녕하세요");
// };


































