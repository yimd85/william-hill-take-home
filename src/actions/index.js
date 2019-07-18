
import axios from 'axios';
export const FETCH_TEAM_INFORMATION = 'FETCH_TEAM_INFORMATION';

export const teamInformation = () => {
    const request = axios.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_giants')
    return {
        type: FETCH_TEAM_INFORMATION,
        payload: request
    };
}

