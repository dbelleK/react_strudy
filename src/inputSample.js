import React, {useState, useRef} from "react"; //useRef:포커스 지정

// 한 개의 Input 상태 관리
// function InputSample(){
//     const [text, setText] = useState('');

//     const onChange = (e) =>{
//         setText(e.target.value);
//     }

//     const onReset = () => {
//         setText('');
//     };
//     return(
//         <div>
//             <input onChange={onChange} value={text}/>
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b>값: </b>
//                 {text}
//             </div>
//         </div>
//     );
// }

// export default InputSample;


// 여러 개의 Input상태 관리
function InputSample(){

    //객체 형태의 상태 관리
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });
    const {name, nickname} = inputs; //name값과 nickname값 쉽게 사용할 수 있도록 설정

    const nameInput = useRef(); //useRef()호출하여 nameInput이라는 객체 만들어짐

    const onChange = (e) =>{

        const {name,value} = e.target;
        // = console.log(e.target.name);(name과 nickname) 
        // = console.log(e.target.value);(name과 nickname의 값)

        setInputs({
            ...inputs, //기존의 객체 복사 //(위  name:'', nickname:'') //리액트에서 객체 업데이트 하기 위해서는 기존에 객체 복사 해야한다
            [name] : value, //특정값 덮어씌어서 상태 업데이트
        });
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/> 
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;