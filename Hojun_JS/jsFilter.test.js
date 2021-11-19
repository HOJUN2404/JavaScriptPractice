let array = [1, 2, 3, 4, 5, 100, 101, 102, 103, 104];

// console.log(array.filter(function(element){
//     return(element>3);
// }));

const aa = array.filter(function(element){
    return(element>3);
});

// console.log(aa);


const bb = array.filter(function(element, index){
    return(element > 101 && index > 5)
});

console.log(bb);

