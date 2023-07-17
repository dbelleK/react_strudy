import React from 'react';
// import Hello from './Hello';
// import Hello_1 from './Hello';
import './App.css';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
import InputSample from './inputSample';


// //JSX사용법
// function App() {
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: 24,
//     padding:'1rem'
//   };
//   return ( 
//   <> {/* 두개 이상의 태그는 이렇게 감싸줘야한다*/}
//     {/*주석쓰는 방법*/}
//     <Hello 
//     //또는 이런식으로 작성하는 주석도 있다
//     /> 
//     <div>안녕히계세요.</div>
//     <div style={style}>{name}</div> {/*자바스크립트 값 보여줄 땐 중괄호로 감싸줘야한다*/}
//     <div className="gray-box"></div>
//   </> //리액트에서는 태그는 꼭 당혀야 한다
//   );
// }
// export default App;


//porps
// function App_1() {
//   return ( 
//     <Wrapper> {/*Hello_1컴포넌트 두개가 레퍼 안에 위치*/}
//     <Hello_1 name="react" color="red" isSpecial={true}/>  {/*조건부렌더링 true 생략하면 true*/}
//     <Hello_1 color="pink" />
//     </Wrapper>
//   );
// }
// export default App_1;


//Counter(버튼 이벤트 설정)
// function App_2() {
//   return ( 
//     <Counter />

//   );
// }
// export default App_2;



//Input
function App_3() {
  return ( 
    <InputSample />

  );
}
export default App_3;


