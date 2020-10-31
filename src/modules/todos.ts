// 액션 type
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// 액션 생성 함수
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: text
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
});

// 액션들의 타입스크립트 타입
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>;

// state type 선언
// 컴포넌트에서 불러 사용할 것이기때문에 export~!!
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodosState = Todo[];

// 초기값 선언

const initialState: TodosState = [
    { id: 1, text: '타입스크립트 배우기', done: true },
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
    { id: 3, text: '투두리스트 만들기', done: false },
];
