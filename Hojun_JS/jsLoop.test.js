let i = 0;


// // while 반복문
// while(i < 10){
//     console.log(i);
//     i++;
// }

// for of 반복문
// 배열에 관한 반복문을 돌리기 위한 반복문이다. ( 하지만 배열 내장함수를 사용하기에 for of는 잘 사용하지 않는다. )
let arr = [1, 2, 3, 4, 5];

for(let num of arr){
    console.log(num);
}

// 객체를 위한 반복문 for in
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
  };

console.log(Object.keys(doggy));
console.log(Object.entries(doggy));
console.log(Object.values(doggy));

for(let zz in doggy) {
    console.log(`${zz} ${doggy[zz]}`);
}
