// rafceの変換を使うとテンプレートが使える
// useStateを使ってファンクショナルコンポーネントの中で変更する
import React, { useState } from 'react'


// propsの定義
interface Props{
  text: string;
}

// オブジェクト型で作りたい時に
interface UserData{
  id: number;
  name: string;
}

// Propsの型を指定 引数に変数を指定する
const TestComponent: React.FC<Props> = (props) => {
  // コンポーネントないで自由に使える変数を作成 useStateは初期値を入れている
  // nullを入れたい場合
  const [count, setCount] = useState<number | null>(0);
  // オブジェクト型useStateを使う際は<>は作成したインターフェースを指定する
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "name"
  });

  return (
    <div>
      <h1>{props.text}</h1>
      <h1> {count} </h1>
    </div>
  )
}

export default TestComponent
