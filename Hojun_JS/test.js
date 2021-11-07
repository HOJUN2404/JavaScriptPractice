// JEST 테스트 


test("1 is 1", () => {
    expect(1).toBe(1);
});



// JEST 테스트 이용 방법 
// test2("여기에는 테스트할 문제를 정의해준다.", () => {
//     //expect(이곳에는 테스트할 함수? 를 정의해준다.).toBe(이곳에는 앞에서 테스트한 이후 예측되는 값을 넣어준다.);
// });




// 소스 따라서 JSET 돌려보기 

describe("생성자 방식에 의한 객체 생성방식", () => {
    // 생성자 함수
    function NamingPerson(name) {
      this.name = name;
      this.getName = function () {
        return `이름은 ` + this.name + " 입니다.";
      };
    }
    test("두개 생성", () => {
      const person1 = new NamingPerson("HOJUN");
      const person2 = new NamingPerson("JUNHO");
      expect(person1.getName()).toBe("이름은 HOJUN 입니다.");
      expect(person2.getName()).toBe("이름은 JUNHO 입니다.");
    });
  });
  