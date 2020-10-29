// 리덕스 액션 안에 들어가게 될 type 선언(typescript의 type이 아님)
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// as const 는 const assertions라는 typescript의 문법이다.
// 이 문법의 용도는 만약 액션 객체를 만들었을 때 type의 typescript 타입이 string이 아니라 실제값(예: 'counter/INCREASE')을 가르키게 된다.

// 액션함수 선언
// FSA 규칙 :
// 값의 이름을 payload로 바꿔줌으로써 액션 객체의 구조를 일관성 있게 가져갈 수 있고 리듀서에서 액션을 다룰 때 좀 더 편리하며, 읽기 쉽고 액션에 관련된 라이브러리를 사용할수도 있게 해줌
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff
});

