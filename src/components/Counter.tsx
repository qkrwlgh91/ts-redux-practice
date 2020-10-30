// 카운터 프리젠테이셔널 컴포넌트
// 컴포넌트에서 필요한 값과 함수들은 모두 props로 받아오도록 처리
import React from 'react';
// Custom Hook 적용
import useCounter from '../hooks/useCounter';

/* 프리젠테이셔널 컴포넌트를 사용할때
type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};


function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
}: CounterProps) {
    */
// custom hooks 사용할 때
function Counter() {
    const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/* onIncreaseBy를 클릭하면 5를 함수의 파라미터로 설정하여 호출 */}
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    )
}

export default Counter;