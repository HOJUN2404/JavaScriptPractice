const arr = ['apple', 'banana', 'orange', 'melon', 'waterMelon'];

arr.pop();
arr.push("마지막에 추가");

arr.shift();
arr.unshift('시작');

// console.log(arr);

arr.splice(2, 0, '김호준');
console.log(arr);

arr.splice(2, 2);
console.log(arr);


// arr.forEach(cf => {
//     console.log(cf);
// })


// arr.forEach(element, index => {
//     console.log(`${index} = ${element}`);
// })

// arr.forEach(cf=index => {
//     console.log(`${this.index} = ${this.element}`);
// })


// arr.map(sss=>{
//     console.log(sss);
// })

arr.forEach(function aaa(element, index, array){
    console.log(`${array} 의 ${index}번째 요소 ${element}}`);
})


console.log("################################################33");

arr.forEach(arr => {
    console.log(arr);
})
