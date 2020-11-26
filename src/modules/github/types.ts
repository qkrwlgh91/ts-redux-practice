
// github 리덕스 모듈에서 관리 할 상태에 대한 타입 선언

import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';

import { AsyncState } from '../../lib/reducerUtils';
export type GithubAction = ActionType<typeof actions>;

/*
export type GithubState = {
    userProfile: {
        loading: boolean;
        error: Error | null;
        data: GithubProfile | null
    };
};
*/

// lib/reducerUtils를 통한 리팩토링으로 위의 코드를 아래와같이 작성하여 매번 loading, data, error의 타입을 직접 일력해줄 필요없이 한줄로 작성 가능
export type GithubState = {
    userProfile: AsyncState<GithubProfile, Error>;
}
