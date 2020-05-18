import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    loading: false,
    token: null,
    userId: null,
    authMsg: null,
    signupMsg: null,
    toBeRedirected: false
}

const authStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}
const authFail = (state, action) => {
   return {
        ...state,
        error: action.error,
        loading: false
   }
}

const authSignUp = (state, action) => {
    return {
        ...state,
        error:null,
        loading:false,
        toBeRedirected: true,
        signupMsg: action.signupMsg

    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        token: action.token,
        userId: action.userId,
        role: action.role,
        authMsg: action.authMessage
    }
}

const authLogout = (state, action) => {
    return {
        ...state,
        token: null,
        userId: null,
        role: null,
        authMsg: null
    }
}
const reducer = (state=initialState, action) => {
    switch( action.type ){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_FAIL : return authFail(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.SIGNUP: return authSignUp(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}


export default reducer;