import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    votesNum: 0,
    activeVotes: null,
    pinNum: 0
}

const initDashboardSummary = (state, action) => {
    return{
        ...state,
        loading: true   
    }
}

const getSUmmarySuccess = (state, action) => {
    return {
        ...state,
        votesNum: action.votesNum,
        activeVotes: action.activeVotes,
        pinNum: action.pinNum
    }
}

const getSUmmaryFailed = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}


const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_DASHBOARD_SUMMARY: return initDashboardSummary(state, action);
        case actionTypes.DASHBOARD_SUMMARY_SUCCESS: return getSUmmarySuccess(state, action);
        case actionTypes.DASHBOARD_SUMMARY_FAILED: return getSUmmaryFailed(state, action);
        default:
            return state;
    }
}

export default reducer;