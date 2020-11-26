// 액션 생성함수와 Promise를 만들어주는 함수를 파라미터로 가져와서 thunk를 만들어줌

import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

// F extends (...params: any[]) => Promise<any> 는 F를 Generics로 받아오는데 해당 타입은 프로미스를 리턴하는 함수형태만 받아 올 수 있도록 설정해줌
// type Params = Parameters<F>; 는 함수의 파리미터들의 타입을 추론해줌. 이를 통하여 F 함수의 파라미터와 thunk함수의 파라미터가 동일하게끔 설정해줄 수 있음

export default function createAsyncThunk<A extends AnyAsyncActionCreator, F extends (...params: any[]) => Promise<any>>(
    asyncActionCreator: A,
    promiseCreator: F
) {
    type Params = Parameters<F>;
    return function thunk(...params: Params) {
        return async (dispatch: Dispatch) => {
            const { request, success, failure } = asyncActionCreator;
            dispatch(request(undefined)); // 파라미터를 비우면 타입 에러가 나기 때문에 undefined 전달
            try {
                const result = await promiseCreator(...params);
                dispatch(success(result));
            } catch (e) {
                dispatch(failure(e));
            }
        };
    };
}