import React,{useRef, useState, useMemo, useCallback, useReducer} from 'react';
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


// //userMemo를 사용하여 연산한 값 재사용하기
// function countActiveUsers(users){
//   console.log('활성 사용자 수를 세는중..');
//   return users.filter(user =>user.active).length;
// }

// //배열
// function App_4() {

//   //CreateUser에서 필요한 props 준비
//   const [inputs, setInputs] = useState({ 
//     username:'',
//     email:'',
//   }); //기본 설정
//   const {username, email} = inputs; //inputs에서 username과 email 추출

//   //onChange 구현
//   const onChange = useCallback(e => {
//     const {name, value} = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value //name값을 value로 덮어씌우겠다 //CreateUser에서 name이 가리키고 있는건 username이나 email
//     });
//   },[inputs]); //onchange는 inputs가 바뀔때만 함수가 새로 만들어지고 그렇지 않으면 기존에 만든 함수를 재사용하게 된다
    
//   // const users = [
//     const [users, setUsers] = useState([
//          {
//             id: 1,
//             username: 'velopert',
//             email: 'public.velopert@gmail.com',
//             active : true,
//           },
//           {
//             id: 2,
//             username: 'tester',
//             email: 'tester@example.com',
//             active : false,
//           },
//           {
//             id: 3,
//             username: 'liz',
//             email: 'liz@example.com',
//             active : false,
//           }
//     ]);

//     const nextId = useRef(4);

//     //onCreate 구현
//     const onCreate =  useCallback(e => {
//       //새로운 user 객체 만듬
//       const user = {
//         id : nextId.current,
//         username,
//         email,
//       }

//       //1. 배열에 항목 추가 (기존배열 spread연산자로 복사하고 원하는 값 넣음 )
//       // setUsers([...users, user]);
//       //2. 배열에 항목 추가(concat 함수 이용)
//       setUsers(users.concat(user)); //최신 users 조회(딱한번 만들어짐(리렌더링 방지))
//       // setUsers(users=>users.concat(user)); //최신 users 조회(딱한번 만들어짐(리렌더링 방지))

//       //등록 버튼 클릭시 input안에 있는 값 지우기
//       setInputs({
//         username:'',
//         email:''
//       });
//       console.log(nextId.current); //4
//       nextId.current += 1; 
//     },[username, email, users]); //usernamer과 email이 바뀔 때에만 새로 만들어짐(리렌더링 방지)
//     // },[username, email]); //usernamer과 email이 바뀔 때에만 새로 만들어짐(리렌더링 방지)


//     //삭제(id:파라미터로 받아온 id)
//     //user.id가 파라미터로 받아온 id랑 일치하지 않는 것만 가져오겠다
//     const onRemove =  useCallback(id =>{
//       setUsers(users.filter(user => user.id !== id));
//     },[users]);

//     //수정
//     //user.id가 파라미터로 받아온 id와 같다면 active false로 만들어 줌 
//     const onToggle =  useCallback(id => {
//       setUsers(users.map(
//         user => user.id === id
//         ? {...user, active: !user.active}
//         : user
//       ));
//     },[users]);

//   //최적화하기= 필요한 연산을 필요할 때만 사용
//   const count = useMemo(() => countActiveUsers(users),[users]);

//   return ( 
//     <>
//       <CreateUser
//        username={username} 
//        email={email} 
//        onChange={onChange} 
//        onCreate={onCreate}
//        />
//       <UserList users={users}  onRemove={onRemove} onToggle={onToggle}/>
//       <div>활성 사용자 수:{count}</div>
//     </>
//   );
// }
// export default App_4;

//useReducer 사용
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

function App_5() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}
export default App_5;


