import React from "react";

// const User = React.momo(function User({user, onRemove, onToggle}){
  function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user;

    // useEffect1
    // useEffect(() =>{    
    //   //props => state
    //   //REST API
    //   //D3 Video.js
    //   //setInterval, setTimeout
    //   console.log('컴포넌트가 화면에 나타남');
    //   return () => {
    //     //clearInterval, clearTimout
    //     //라이버리 인스턴스 제거
    //     console.log('컴포넌트가 화면에서 사라짐')
    //   }
    // }, []);

    // useEffect2
    // useEffect(() =>{
    //   console.log('user 값이 설정됨')
    //   console.log(user);
    //   return () =>{
    //     console.log('user 값이 바뀌기 전')
    //     console.log(user);
    //   }
    // }, [user]);

    // useEffect3
    //useEffect : 첫번째 파라미터에는 함수를 등록하고 두번째 파라미터에는 뎁스라는 배열 등록한다
    //조회하는 props가 있다면 뎁스에도 적어줘야하는게 규칙
    //다 빈공백이면 컴포넌트가 처음 나타날때만 호출
    //리턴안에 함수를 넣으면 컴포넌트 사라질때 호출
    //뎁스에 넣어주면 나타날때도 호출 바뀔때도 호출
    // useEffect(() =>{
    // });

    return(
    // <div>
    //     <b>{user.username}</b> <span>({user.email})</span>
    //     <button onClick={() => onRemove(user.id)}>삭제</button> {/*아이디를 가져와서 삭제*/}
    // </div>
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
          {username}
        </b>
        &nbsp;
        <span>({email})</span>
        <button onClick={() => onRemove(id)}>삭제</button> {/*아이디를 가져와서 삭제*/}
    </div>
    );
    //() => onRemove(id) : 함수로 새로 만들기 않고 onRemove(id)를 적용한다면 -> 렌더링 된 순간 함수 호출됨
     
  }
// });


function UserList({users, onRemove, onToggle}){
    //users 배열을 없애고 props로 받아오기 위함
    // const users = [
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com'
    //       },
    //       {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@example.com'
    //       },
    //       {
    //         id: 3,
    //         username: 'liz',
    //         email: 'liz@example.com'
    //       }
    // ];

    return(

        // 1)
        // <div>
        //     <div>
        //         <b>{users[0].username}</b> <span>({users[0].email})</span>
        //     </div>
        //     <div>
        //         <b>{users[1].username}</b> <span>({users[1].email})</span>
        //     </div>
        //     <div>
        //         <b>{users[2].username}</b> <span>({users[2].email})</span>
        //     </div>
        // </div>

        //2)
        // <div>
        //     <User user={users[0]}/>
        //     <User user={users[1]}/>
        //     <User user={users[2]}/>
        // </div>

        //3)
            <div>
              {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
              ))}
            </div>
          );
        }
        export default UserList;

        // export default React.momo(UserList,(prevProps, nextProps)=> nextProps.users === prevProps.users);

          //useMemo : 연산된 값을 재사용하기 위함
          //userCallback : 특정함수를 재사용하기 위함
          //React.momo :렌더링된 결과를 재사용하기 위함