const myCar = {
    color : 'red',
    logColor : function() {
        console.log(this.color);
    },
};


// unboundGetColor 에 myCar의 logColor 메서드와 동일하게 설정하였다. 
const unboundGetColor = myCar.logColor;
console.log(unboundGetColor());     // undefined 로 출력된다.
// 이유는 myCar.logColor 에서 this.color를 호출했지만, this는 전역변수 Window 를 참조하기 때문에 Window.color은 정의되어있지 않기 때문에
// undefined를 출력하게 된다.


// boundGetColor에 myCar.logColor 메소드를 정의하면서 .bind 메서드를 통해 this키워드가 괄호 안의 객체, 즉 myCar를 참조하게 한다.
const boundGetColor = (myCar.logColor).bind(myCar);
console.log(boundGetColor);         // [Function: bound logColor] 출력
// .bind를 통해 this가 괄호 안의 객체인 myCar를 참조하도록 설정하였으므로 myCar.logColor에 해당하는 function을 출력한다.





