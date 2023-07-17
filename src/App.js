import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding:'1rem'
  };
  return ( //JSX사용법
  <> {/* 두개 이상의 태그는 이렇게 감싸줘야한다*/}
    {/*주석쓰는 방법*/}
    <Hello 
    //또는 이런식으로 작성하는 주석도 있다
    /> 
    <div>안녕히계세요.</div>
    <div style={style}>{name}</div> {/*자바스크립트 값 보여줄 땐 중괄호로 감싸줘야한다*/}
    <div className="gray-box"></div>
  </> //리액트에서는 태그는 꼭 당혀야 한다
  );
}

export default App;
