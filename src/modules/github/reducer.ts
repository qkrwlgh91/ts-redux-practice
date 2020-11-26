import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import { getUserProfileAsync } from './actions';
// import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from './actions';
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';
/*
const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
};

const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: state => ({
        ...state,
        userProfile: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default github;

*/

// reducer를 lib/reducerUtils.ts를 통하여 리팩토링을하면 아래와 같이 코드를 작성할 수 있따.
const initialState: GithubState = {
    userProfile: asyncState.initial()
};

/*
const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: state => ({
        ...state,
        userProfile: asyncState.load()
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: asyncState.success(action.payload)
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        userProfile: asyncState.error(action.payload)
    })
});
*/

// 위의 코드를 AsyncActionCreatorBuilder를 lib/reducerUtils.ts 사용하여 아래와같이 리팩토링이 가능하다.
const github = createReducer<GithubState, GithubAction>(initialState).handleAction(
    // [getUserProfileAsync.request, getUserProfileAsync.success, getUserProfileAsync.failure],
    transformToArray(getUserProfileAsync),
    createAsyncReducer(getUserProfileAsync, 'userProfile')
);

export default github;