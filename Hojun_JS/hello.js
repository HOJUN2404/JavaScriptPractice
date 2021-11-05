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
    }
};

console.log(car.wheel);
console.log(typeof car.wheel);
// console.log(car.carName);
// console.log(car.drive);
car.drive();
console.log(Object.keys(car)[0]);
console.log(Object.values(car));
console.log(Object.values(car.wheel));

car.door = 2;

console.log(car);