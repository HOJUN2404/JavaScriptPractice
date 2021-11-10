const str = "this is a short sentence";


// indexOf()
// 문자열에서 지정된 값이 처음 출력되는 인덱스값을 출력한다.
console.log(str.indexOf("short"));      // 출력 : 10 

// 해당 문자열이 포함되어 있지 않다면 -1 을 출력한다.
console.log(str.indexOf("gd"));         // 출력 : -1


// slice()
// 문자열의 지정된 부분을 새 문자열로 반환한다. 즉 문자열을 잘라서 출력하는 메서드이다.
const str1 = "스타벅스, 이디야, 파스쿠찌";

// 주의할 점은 아래처럼 마지막 인덱스값을 4를 입력했다면, 인덱스가 3인 값까지 출력한다.
console.log(str1.slice(0,4));           // 출력 : 스타벅스



// toUpperCase()
// 문자열을 모두 대문자로 바꾸는 메서드이다.

const str2 = "hi i'm hojun";

console.log(str2.toUpperCase());        // 출력 : HI I'M HOJUN


// startsWith()
// 해당 문자열이 매개변수로 보낸 문자열로 시작하는지 확인하는 메서드이다. 
const code = "abcedf";

console.log(code.startsWith("a"));
console.log(code.startsWith("abc"));
console.log(code.startsWith("ABC"));


// endsWith()
// 해당 문자열이 매개변수로 문자열로 끝나는지 확인하는 메서드이다. 
const code1 = "abcdefghi";

console.log(code1.endsWith("ghi"));
console.log(code1.endsWith("de", 5));


// includes()
// 매개변수로 보낸 문자열이 해당 문자열에 포함되어 있는지 확인하는 메서드이다. ( 대소문자 구별 )
const code2 = "abcdefg";

console.log(code2.includes("cde"));     // True
console.log(code2.includes("CDE"));     // False


// repeat()
// 해당 문자열을 매개변수의 수만큼 반복하며 인수로 받는 메서드이다. 

    const re = "HI ";
    console.log(re.repeat(5));

    const rere = re.repeat(10);
    console.log(rere);


// charAt()

const ca = "가나다라마바사";

console.log(ca.charAt(3));



// substring()

const ccc = "가나다라마바사아자";

console.log(ccc.substring(2,5));


// concat()
// 문자열을 합쳐주는 메서드이다. 

const sstr1 = "김호준의 ";
const sstr2 = "나이는 ";
const sstr3 = "27살이다.";

const aa = sstr1.concat(sstr2, sstr3);

console.log(aa);




// substr()
// 문자열을 length만큼 잘라내는 메서드이다. 

console.log(sstr3.substr(1,3));



const str33 = "가나다라마바사";

console.log(str33.substr(2, 5));		// 다라마바사



// split()

const ssss = "김호준의 나이는 28이 될 것이다.";

const eeee = ssss.split([" "]);
const ffff = ssss.split(" ");


console.log(eeee);
console.log(ffff);








