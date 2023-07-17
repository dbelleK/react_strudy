import React from 'react'; //리엑트를 불러와서 사용하겠다

// //컴포넌트 만들기
// function Hello(){
//     return <div>안녕하세요<button>랄랄</button></div>
// }
// export default Hello; //Hello라는 컴포넌트를 만들어서 내보내주겠다


//props 기본
// function Hello_1(props){
//     console.log(props);
//     return <div style={{
//         color : props.color
//     }}>안녕하세요{props.name}</div>
// }

// props구조분해
function Hello_1({color, name}){
    return <div style={{
        // color:color
        color
    }}>안녕하세요 {name}</div>
}

//특정값을 빠트렸을 때 기본으로 사용할 값
Hello_1.defaultProps = {
    name : '이름없음'
};

export default Hello_1; //Hello라는 컴포넌트를 만들어서 내보내주겠다