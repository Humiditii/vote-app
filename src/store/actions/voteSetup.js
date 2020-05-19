import * as actionTYpes from './actionTypes';
import axios from '../../axios-instance';

export const initDashboardSUmmary = () => {
    return {
        type: actionTYpes.INIT_DASHBOARD_SUMMARY
    }
}

export const getDashboardSummary = (token) => {
    return {
        type: actionTYpes.DASHBOARD_SUMMARY,
    }
}

export const getDashboardSummaryFailed = (err) => {
    return {
        type: actionTYpes.DASHBOARD_SUMMARY_FAILED,
        error: err
    }
}

export const getDashboardSummarySuccess = (votesNumber, activeVotes, pinNum) => {
    return {
        type: actionTYpes.DASHBOARD_SUMMARY_SUCCESS,
        votesNum: votesNumber,
        activeVotes: activeVotes,
        pinNum: pinNum
    }
}

export const dashboardProcess = (token) => {
    return dispatch => {
        dispatch(initDashboardSUmmary());
        const endpoint = '/setupVote';
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + token
            }
        }
        axios.get(endpoint, config).then( response => {
            console.log(response)
            //dispatch( getDashboardSummarySuccess() )
        }).catch( err => {
            console.log(err)
            //dispatch( getDashboardSummaryFailed() )
        })
    }
}