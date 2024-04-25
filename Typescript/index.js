/* 그냥 연습 */
/*
let 이름 : string = 'gildong';
이름 = 'JIWOO';




let 성 :string[] = ['song', 'park'];

type nameType = string | number ;
let 별자리 : nameType = '쌍둥이'

 
 


type Member = [number, boolean];
let john:Member = [100, false];


let 회원들 : (number | string) [] = [ 1, '2', 3];

let 오브젝트 : {a : string | number } = { a : 123};

let 변수1 : unknown ;
변수1 = 123;
변수1 = {};
변수1 = '가나다라마';


let 학교: {
    score: (number | boolean)[],
    teacher: string,
    friend: string | string[],
   } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
   }
   
   학교.score[3] = false;
   학교.friend = ['Lee', 학교.teacher];





   function sayHi (x? : string) {
    if (x) {
        console.log('안녕하세요!' + x + '님')
    } else {
        console.log('이름을 입력해주세요~')
    }
}



function 자릿수세기(x : number | string) : number {
    return x.toString().length
  }

 


  function 결혼가능확률(money : number, house: boolean, charm: string) : string | void{
    let score : number = 0;
    score += money;
    if (house === true){
        score += 500
    }

    if (charm ==='상'){
        score += 100
    }
    if (score >= 600){``
        return '결혼가능'
    }
  }
  console.log(결혼가능확률(100, true, '상'))
*/
/*2.1장 p.34~41

const num : number = 123;
const str : string = "abc";


function func(n:number) {

}

func(num);




function double(n) {
    return n*2;

}

double(2);
double("z");



 2.2장 p.34~65

let isDone: boolean = false ;
let decimal : number = 6;
let color : string = "blue";
let list : number[] = [1,2,3];
let x : [string, number];



interface Debeloper{
    faceValue: number;
}

interface BankNote {
    faceValue: number;
}

let developer: Developer = {faceValue: 52};
let bankNote : BankNote = { faceValue : 10000};

developer = bankNote;
bankNote = developer;



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Developer {
    name : string;
    age : number;
    sleepTime : number;

    constructor(name: string, age: number, sleepTime: number){
        this.name = name;
        this.age = age;
        this.sleepTime = sleepTime;
    }
}

function greet(p: Person){
    console.log(`Hello, I'm ${p.name}`);
}

const developer = new Developer("zig", 20, 7);

greet(developer);



*/
/*
class Developer {
    name :string;
    sleepingTime : number;

    constructor(name: string, sleepingTime:number){
        this.name = name;
        this.sleepingTime = sleepingTime;
    }
}

const d = typeof Developer;
type T = typeof Developer;
*/
/*
const loaded_text : unknown ;
const validateInputText = (text : string) => {
    if (text.length <10) return "최소 10-글자 이상 입력해야 합니다.";
        return "정상 입력된 값입니다.";
    };

    validateInputText(loaded_text as string);
    */
/*2.4장 p.71~78*/
/*
const noticePopup: {title: string; description : string } ={
title: "IE 지원종료 안내",
description: "2022.07.15일부로 배민상회 IT 브라우저 지원을 종료합니다.",
};


const getCartList = async (cartId: number[]) => {
const res = await CartApi.GET_CART_LIST(cartId);
return res.getData();
}
*/
/*
  type NoticePopupType = {
   title: string;
   description: string;
  };

  interface INoticePopup {
   title: string;
   description: string;
  }

  const noticePopup1: NoticePopupType = {...};
  const noticePopup2: INoticePopup = {...};
  */
/*
function add(a,b){
return a+b;
}

console.log(typeof add);
*/
/*
   function add(a: number, b: number) : number {
    return a+b;
   }

   */
/*
let state: any;

state = {value : 0};
state = 100;
state = "hello world";
state.foo.bar = () => console.log("this is any type");


let unknownValue : unknown;
unknownValue = 100;
let someValye1: any = unknownValue;
*/
/*
 const fn = () => console.log(1);
 const array = [1, "string", fn];

 array[0];
 array[1];
 array[2]();
 */
var ProgrammingLanguage;
(function (ProgrammingLanguage) {
    ProgrammingLanguage["Typescript"] = "Typescript";
    ProgrammingLanguage["Javascript"] = "Javascript";
    ProgrammingLanguage[ProgrammingLanguage["Java"] = 300] = "Java";
    ProgrammingLanguage[ProgrammingLanguage["Python"] = 400] = "Python";
})(ProgrammingLanguage || (ProgrammingLanguage = {}));
