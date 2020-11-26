/*
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';


    Thunk Action의 Generics로 다음 값들을 순서대로 넣어주어야 한다.
    <TReturnType, TState, TExtraThunkArg, TBasicAction>
    TReturnType: thunk함수에서 반환하는 값의 타입을 설정
    TState: 스토어의 상태에 대한 타입을 설정
    TExtraThunkArg: redux-thunk미들웨어의 Extra Argument의 타입을 설정
    TBasicAction: dispatch 할 수 있는 액션들의 타입 설정

    TReturnType의 경우 아무것도 반환하지 않는다면 void라고 넣는다.
    현재 thunk함수에서 async를 사용하고 있으므로 promise<void>가 더 정확하지만 void라고 해도 문제 없음


export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
    return async dispatch => {
        const { request, success, failure } = getUserProfileAsync;
        dispatch(request());
        try {
            const userProfile = await getUserProfile(username);
            dispatch(success(userProfile));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

*/

// 위의 코드를 리팩토링을 통하여 (lib/createAsyncThunk)아래와 같이 작성할 수 있다.
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);