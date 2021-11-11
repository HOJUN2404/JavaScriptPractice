// Getter 와 Setter

// let user1 = () => {
//     name = "HOJUN",
//     surName = "KIM",
//     get fullName() {
//         return `${this.name} ${this.surName}`;
//     }
// };


let user =  {
    name: "HOJUN",
    surName: "KIM",
    get fullName() {
        return `${this.name} ${this.surName}`;
    },
    set fullName(value) {
        [this.name, this.surName] = value.split(" ");
    },
    get name() {
        return this._name;
    },

    set name(value) {
        if(value.length < 4){
            console.log("입력하신 값이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log(`1 ${user.name}`);

user.name = "Hi";
console.log(`2 ${user.name}`);

// console.log(user.fullName);

// test("객체 내부의 getter를 테스트한다.", () => {
//     expect(user.fullName).toBe('HOJUN KIM');
// });



user.fullName = 'Alice Cooper';
 
console.log(`3 ${user.name}`);
console.log(`4 ${user.surName}`);
console.log(`5 ${user.fullName}`);




