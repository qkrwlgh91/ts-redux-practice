// 카운터 컨테이너 컴포넌트 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer() {

    // typescript로 컨테이너 컴포넌트를 작성 할 때 특별한 점은 useSelector 부분에서 state의 타입을 RootState로 지정
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    };

    return (
        <div>
            <Counter 
                count={count}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onIncreaseBy={onIncreaseBy}
            />
        </div>
    )
}

export default CounterContainer
