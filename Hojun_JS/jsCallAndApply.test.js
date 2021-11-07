function Car (maker, color) {
    this.carMaker = maker;
    this.carColor = color;
}

function MyCar(maker, color) {
    Car.call(this, maker, color);
    this.age = 5;
}

const myNewCar = new MyCar('bmw', 'red');

test("전역변수가 아닌 지역변수 객체 참조", () => {

    expect(myNewCar.carColor).toBe("red");
});


console.log(myNewCar.carColor);     // red


// Apply 예제 

function car2 (maker2, color2) {
    this.carMaker2 = maker2;
    this.carColor2 = color2;
    this.age2 = 33;
}

function MyCar2 (maker2, color2){
    car2.apply(this, [maker2, color2])
    this.age = 22;
}

const myNewCar2 = new MyCar2('bmw2', 'red2');

test("apply 테스트", () => {
    expect(myNewCar2.carColor2).toBe('red2');
});

test("myNewCar2 의 age 테스트", () => {
    expect(myNewCar2.age).toBe(22);
});

test("car2의 this.age2 테스트", () => {
    expect(myNewCar2.age2).toBe(33);
});












