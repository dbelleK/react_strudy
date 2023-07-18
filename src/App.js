import React,{useRef, useState} from 'react';
// import Hello from './Hello';
// import Hello_1 from './Hello';
import './App.css';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './inputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


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
// function App_3() {
//   return ( 
//     <InputSample />

//   );
// }
// export default App_3;


//배열
function App_4() {

  //CreateUser에서 필요한 props 준비
  const [inputs, setInputs] = useState({ 
    username:'',
    email:'',
  }); //기본 설정
  const {username, email} = inputs; //inputs에서 username과 email 추출

  //onChange 구현
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value //name값을 value로 덮어씌우겠다 //CreateUser에서 name이 가리키고 있는건 username이나 email
    });
  };
    
  // const users = [
    const [users, setUsers] = useState([
         {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active : true,
          },
          {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active : false,
          },
          {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active : false,
          }
    ]);

    const nextId = useRef(4);

    //onCreate 구현
    const onCreate = () =>{

      //새로운 user 객체 만듬
      const user = {
        id : nextId.current,
        username,
        email,
      }

      //1. 배열에 항목 추가 (기존배열 spread연산자로 복사하고 원하는 값 넣음 )
      // setUsers([...users, user]);
      //2. 배열에 항목 추가(concat 함수 이용)
      setUsers(users.concat(user));

      //등록 버튼 클릭시 input안에 있는 값 지우기
      setInputs({
        username:'',
        email:''
      });
      console.log(nextId.current); //4
      nextId.current += 1; 
    }

    //삭제(id:파라미터로 받아온 id)
    //user.id가 파라미터로 받아온 id랑 일치하지 않는 것만 가져오겠다
    const onRemove = id =>{
      setUsers(users.filter(user => user.id !== id));
    };

    //수정
    //user.id가 파라미터로 받아온 id와 같다면 active false로 만들어 줌 
    const onToggle = id => {
      setUsers(users.map(
        user => user.id === id
        ? {...user, active: !user.active}
        : user
      ));
    };

  return ( 
    <>
      <CreateUser
       username={username} 
       email={email} 
       onChange={onChange} 
       onCreate={onCreate}
       />
      <UserList users={users}  onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}
export default App_4;


