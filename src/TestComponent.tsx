// rafceの変換を使うとテンプレートが使える
import React from 'react'

// propsの定義
interface Props{
  text: string;
}

// Propsの型を指定 引数に変数を指定する
const TestComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

export default TestComponent
