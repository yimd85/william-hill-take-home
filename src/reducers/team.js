import _ from 'lodash';
import { FETCH_TEAM_INFORMATION } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TEAM_INFORMATION:
            if (action.payload.status === 200) {
                return {
                    ...state,
                    team_info: action.payload.data.teams[0]
                };
            } else {
                return {
                    ...state,
                    team_info: {}
                }
            }
        default:
            return {
                ...state
            };
    }
}