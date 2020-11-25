import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
    userProfile: {
        loading: boolean;
        error: Error | null;
        data: GithubProfile | null
    };
};

// github 리덕스 모듈에서 관리 할 상태에 대한 타입 선언