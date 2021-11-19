let arr = [1234, 'test', true];

arr.length = 5;

// 배열에 인덱스값을 넘겨 배열에서 해당 인덳값만 출력
console.log(arr[4]);

// 배열의 길이 출력
console.log(arr.length);


arr.push({
    name: "김호준"
});

console.log(arr);


// 배열을 정렬하는 sort 메서드를 이용했지만, 자리수가 다른 수를 제대로 정렬하지 못한다..
let numArr = [3,7,2,6,9,13];
console.log(numArr);

let result = numArr.sort();
console.log(result);


// 제대로 정렬하기 위해서는 아래처럼 정렬해야 한다. [ 오름차순 ]
result.sort(function(a, b) {
    return a-b;
});

console.log(result);

















