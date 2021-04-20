import React from 'react';
import logo from './logo.svg';
import './App.css';

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

console.log(PC1);

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
