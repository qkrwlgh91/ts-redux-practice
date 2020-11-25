// 여러 reducer가 있는 경우 root reducer를 만들어 주어야 한다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import github from './github';

const rootReducer = combineReducers({
    counter,
    todos,
    github
});

export default rootReducer;

// reducer의 root를 생성할때 typescript없이 사용할 때와 거의 동일하지만 typescript를 사용할때는 RootState라는 타입을 만들어서 내보내주어야 한다.
// RootState타입은 컨테이너 컴포넌트에서 스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용할 때 필요하다.
export type RootState = ReturnType<typeof rootReducer>;
