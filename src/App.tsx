import React from 'react';
import logo from './logo.svg';
import './App.css';
//jsonのテストデータをインポート
import Data from './data.json'
import TestComponent from './TestComponent';

// 読み込んだjsonデータの型を宣言している
type USERS = typeof Data;


// 定数定義はリテラル型
const name = 'hello';
// 変数指定type指定 タイプ定義することをAnnotation（アノーテーション）
let username: string = "Hello"
let dummyNum: number = 2;
let bool: boolean = true;
let array1 = [true, false, true];
let array2 = [0, "hello"];

// オブジェクト型の型の定義はinterfaceを使う
interface NAME {
  first: string,
  // ?をつけるとデータがない時にはないものと扱える
  // 「|」を使うと複数のデータ型を許容できる
  last?: string | null,
}
// NAME型で定義される（interfaceで指定した型）
let nameObj: NAME = {
  first: "山",
  last: "umi"
}

// 関数の作り方
// 引数にはデータ型を指定する 返り値の指定は特に必要はないが明示したい場合は引数の横に記載する
const func1 = (x: number, y: number):number => {
  return x + y;
}

// Intersection Types 二つのオブジェクトを結合したタイプ
type PROFILE = {
  age: number,
  city: string;
}

type LOGIN = {
  username: string,
  password: string
}
// タイプを結合する &で結合する
type USER = PROFILE & LOGIN;
// 実際にデータを作る場合
const userA: USER = {
  age: 20,
  city: "Tokyo",
  username: "name",
  password: "pass"

}

// UnionTypes 指定以外のタイプは受け付けなくなる
let value: boolean | number
// 受け取るデータ型を制限
value = true

// 配列の場合 数値と文字列のみ受け付ける
let arrayUni: (number | string)[];
arrayUni = [];

// Literal Types 指定したリテラル以外は受け付けなくなる
let company: "Facebook" | "Google" | "Amazon"
company = "Amazon";

// typeof 宣言済みの型を継承し型付けをする ＊使い所としてはjsonのオブジェクトを継承してくれる
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "typeof"

let animal = {cat: "small cat"};
// cat以外入力不可
let newAnimal: typeof animal = {cat: "big cat"}


// keyof
type KEYS ={
  primary: string,
  secondary: string;
};

// Union typesでの型付けになる
let key: keyof KEYS;
// 以下の値しか受け付けない
key = "primary"
key = 'secondary'

// typeof + keyof
// 定義ずみオブジェクト
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
}

// typeofでデータ構造を継承 typeofでkeyのを許容
let keySports: keyof typeof SPORTS;
// 以下の値しか受け付けない
keySports = "soccer"
keySports = "baseball"

// enum イーナム 自動で連番をつけてくれる
enum OS{
  windows, //0
  Mac,     //1
  Linux    //2
}

// OSを管理するオブジェクト作成
interface PC{
  id: number;
  OSType: OS;
}

//
const PC1: PC = {
  id: 1,
  OSType: OS.windows, // 0番が割り当てられる
};

// 型の互換性 データがtestになっている
const comp1 = "test"

// string型へtest型を代入は可能
let comp2: string = comp1;

let comp3: string = "test";
// 以下の書き方はできない
// let comp4: 'test' = comp3;

let funcComp1 = (x:number) => {}
let funcComp2 = (x:string) => {}
// データ型の異なる引数を持つ関数は代入できない
// funcComp1 = funcComp2

// Generics ジェネリックスを使う場合は変数名の後にエイリアスを指定＜T＞
interface GEN<T>{
  // keyのTは定まっていない、テンプレートを作っている
  item: T;
}
// 使うときに指定する<>をつけないとエラーになる
const gen0: GEN<string> = {item: "hello"};

// ＜＞をエイリアスではなくデフォルトの型をしてできる
interface GEN1<T = string>{
  item: T;
}
// 型を指定する必要はなくなる
const gen1: GEN1 = {item: "hello"};

// stringとnumberしか指定できないようにする
interface GEN2<T extends string | number>{
  item: T;
}
const gen4: GEN<string> = {item: "a"};

// 関数に対するジェネリックス
function funcGen<T>(props: T){
  return {item: props}
}

// funcGen<string>は明示的に書くことも可能
const gen5 = funcGen('test');

function funcGen1<T extends string | null>(props: T){
  return {value: props};
}

// json place holderにtestデータがある

const gen8 = funcGen1("Hello");
// 数値型を指定していないので使えない
// const gen9 = funcGen1(12);

interface Props{
  price: number;
}

// Propsインターフェースの型しか受け付けない
function funcGen3<T extends Props>(props: T){
  return { value: props.price }
}

const gen10 = funcGen3({price: 10});
// funcGen3のアロー関数での記載方法
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price }
}

// アロー関数表記に変更する
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   );
// }
// React.FC ファンクションコンポーネント
// この記載は決まり
const App: React.FC = () => {
  return (
    <div className="App">
       <header className="App-header">
         {/* コンポーネントの呼び出し */}
          <TestComponent text=""/>
       </header>
     </div>
  );
};


export default App;
