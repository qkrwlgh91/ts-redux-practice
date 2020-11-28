import { getUserProfileAsync, GET_USER_PROFILE } from './actions';
import { getUserProfile, GithubProfile } from '../../api/github';
import { call, put, takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../../lib/createAsyncSaga';

// 액션의 타입은 RetrunType을 통해서 유추
// 현재까지는 Generator를 사용할 경우, yield call를 통해서 프로미스를 만드는 특정 함수를 호출했을 경우 프로미스의 결과값에 대한 타입을 유추해내지 못함
// 때문에 프로미스 결과값은 force type을 통해 타입을 지정해주어야함

/*
function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
    try {
        const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
        yield put(getUserProfileAsync.success(userProfile));
    } catch (e) {
        yield put(getUserProfileAsync.failure(e))
    }
}
*/

// 위 코드를 lib/createAstncSaga.ts 를 통해서 아래와 같이 간결한 코드를 작성할 수 있다.
const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
