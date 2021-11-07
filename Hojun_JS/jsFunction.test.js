const a = (name) => {

    return name + '입니다';
}

const race ="100m Dash";

const runners = ["김호준1", "김호준2", "김호준3"];

const result = runners.map((runner, i) => ({name: runner, race, place: i+1}));

console.log(result);


test ("단일 파일 jest 테스트 확인", () => {
   expect(a('김호준')).toEqual('김호준입니다');
});



const ttt = (a, b) => {
    return a>b ? a : a;
};

console.log(ttt(5,2));  
console.log(ttt(2,5));  