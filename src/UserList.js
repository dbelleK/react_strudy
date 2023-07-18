import React from "react";

function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user;
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
    )
    //() => onRemove(id) : 함수로 새로 만들기 않고 onRemove(id)를 적용한다면 -> 렌더링 된 순간 함수 호출됨

}


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