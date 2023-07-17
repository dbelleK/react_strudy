import React, {useState} from "react"; // useStare를 사용해서 바뀌는 값을 관리

function Counter(){
    const [number, setNumber] = useState(0); //number 상태 기본값은 0, setNumber:상태 바꿔줌

    const onIncrease = () => {
        // console.log('+1');
        // setNumber(number+1)
        setNumber(prevNumber => prevNumber + 1 );
    };
    const onDecrease = () => {
        // console.log('-1');
        // setNumber(number-1)
        setNumber(prevNumber => prevNumber + 1 );
    };

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;