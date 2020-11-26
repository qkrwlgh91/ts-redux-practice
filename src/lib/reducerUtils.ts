// API 요청에 과련된 상태의 경우 { loading, error, data } 형태로 관리하고 있는데 이것을 좀더 쉽게 만들 수 있는 유틸 함수들을 만들기 위한 reducer 리팩토링

import { AnyAction } from 'redux';
import { getType, AsyncActionCreatorBuilder } from 'typesafe-actions';

export type AsyncState<T, E = any> = {
    data: T | null;
    loading: boolean;
    error: E | null;
};

export const asyncState = {
    // 다음 코드는 화살표 함수에 Generic을 설정 한 것입니다.
    initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
        loading: false,
        data: initialData || null,
        error: null
    }),
    load: <T, E = any>(data?: T): AsyncState<T, E> => ({
        loading: true,
        data: data || null,
        error: null
    }),
    success: <T, E = any>(data: T): AsyncState<T, E> => ({
        loading: false,
        data,
        error: null
    }),
    error: <T, E>(error: E): AsyncState<T, E> => ({
        loading: false,
        data: null,
        error: error
    })
};

// AnyAsyncActionCreator는 createAsyncThunk에서 사용한 타입과 동일. types.ts파일로 추출해서 분리가능

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
export function createAsyncReducer<S, AC extends AnyAsyncActionCreator, K extends keyof S>(
    asyncActionCreator: AC,
    key: K
) {
    return (state: S, action: AnyAction) => {
        // 각 액션 생성함수의 type을 추출해줍니다.
        const [request, success, failure] = [
            asyncActionCreator.request,
            asyncActionCreator.success,
            asyncActionCreator.failure
        ].map(getType);
            switch (action.type) {
                case request:
                    return {
                        ...state,
                        [key]: asyncState.load()
                    };
                case success:
                    return {
                        ...state,
                        [key]: asyncState.success(action.payload)
                    };
                case failure:
                    return {
                        ...state,
                        [key]: asyncState.error(action.payload)
                    }
                default:
                    return state;
            }
    }
}