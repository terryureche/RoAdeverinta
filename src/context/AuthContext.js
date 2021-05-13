import createDataContext from './createDataContext';

const state = {
    userData:{
        name: null,
        birthdate: null,
        placeOfBirth: null,
        homeAddress: null,
        residence: null,
        signature: null,
        commonReason:null
    },
    didOnboarding: false,
    cacuta: false,
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'update_user_data':
            return {...state, userData: action.payload};
        case 'no_user':
            return {...state, userData: null};
        case 'onboarding':
            return {...state, didOnboarding: action.payload};
    }
}

const updateUserData = dispatch => async (payload) => {
    dispatch({type: 'update_user_data', payload});
}

const noUser = dispatch => async () => {
    dispatch({type: 'no_user', payload: null});
}

const didOnboarding = dispatch => async payload => {
    debugger
    dispatch({type: 'onboarding', payload});
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {updateUserData, noUser, didOnboarding},
    state
);
