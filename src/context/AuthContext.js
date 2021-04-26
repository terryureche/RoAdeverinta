import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'user_configured':
            return {...state, userData: action.payload};
        case 'no_user':
            return {...state, userData: null};
    }
}

const userConfigured = dispatch => async ({userName, password}) => {
        dispatch({ type: 'user_configured', payload: "test"});
}

const noUser = dispatch => async () => {
    dispatch({type: 'no_user', payload: null});
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {userConfigured, noUser},
    { userData: null }
);