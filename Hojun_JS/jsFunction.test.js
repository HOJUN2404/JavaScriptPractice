const a = (name) => {

    return name + '입니다';
}



test ("단일 파일 jest 테스트 확인", () => {
   expect(a('김호준')).toEqual('김호준입니다');
});