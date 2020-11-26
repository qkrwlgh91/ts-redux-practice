// API 요청에 과련된 상태의 경우 { loading, error, data } 형태로 관리하고 있는데 이것을 좀더 쉽게 만들 수 있는 유틸 함수들을 만들기 위한 reducer 리팩토링

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