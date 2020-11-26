import { createAction, createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE'; // 요청시작됐을때 디스패치되는 액션
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS'; // 요청 성공
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR'; // 요청 실패

/* typesage-actions의 createAsyncAction을 사용하면 아래와 같이 코드를 간략하게 할수 있다.
export const getUserProfile = createAction(GET_USER_PROFILE)();
export const getUserProfileSuccess = createAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
export const getUserProfileError = createAction(GET_USER_PROFILE_ERROR)<AxiosError>();
*/
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<any, GithubProfile, AxiosError>();

