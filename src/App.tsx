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


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
