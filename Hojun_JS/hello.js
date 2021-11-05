// import _ from "lodash";

// var a = 'hello world';
// let b = 32;

// console.log(a);
// console.log(typeof(a));
// console.log(typeof(b));

// b = '호준';

// console.log(typeof b);

// const c = 5;

// console.log(typeof c);

// console.log(b + c);

// console.log(a);
// console.log(b);
// console.log(c);

// var a ;
// let b ;
// const c = 7 ;

// console.log(a);
// console.log(b);
// console.log(c);

// a = 3;
// b = 5;


// console.log(a);
// console.log(b);
// console.log(c);






const car =
{
    wheel: 4,
    carName : "hoJun",
    drive : function() {
        console.log("부릉 부릉");
    },
    otherCar : {
        hyundai : "123",
        kia : "456"
    }
};


// DeepClone 실습
const car2 = JSON.parse(JSON.stringify(car));
console.log(car2.otherCar);
console.log(car2.drive);


// const clonedeep = require("lodash.clonedeep");
// const car3 = clonedeep(car);
// console.log(car3.otherCar);
// console.log(car3.drive);



// console.log(car.wheel);
// console.log(typeof car.wheel);
// console.log(car.carName);
// console.log(car.drive);
// car.drive();
// console.log(Object.keys(car)[0]);
// console.log(Object.values(car));
// console.log(Object.values(car.wheel));

// car.door = 2;

// console.log(car);



/* 
      배열 실습
*/
console.log("배열실습");
const b = { aa: 44, bb: 55};
const arr1 = ['1', 2, b];

console.log(typeof arr1[0]);
console.log(typeof arr1[1]);
console.log(typeof arr1[2]);

console.log("배열 추가/삭제 실습");
arr1.push(55555);
arr1.push('55555');

console.log(arr1);

console.log(typeof arr1[3]);
console.log(typeof arr1[4]);

console.log(arr1.length);

console.log(typeof arr1.pop());

console.log(arr1);



