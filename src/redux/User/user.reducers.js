import userTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    signInSuccess: false,
    signUpSuccess: false,
    signUpError: [],
    resetPasswordSuccess: false,
    resetPasswordError: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            break;

        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                signInSuccess: action.payload
            }
            break;

        case userTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpSuccess: action.payload
            }
            break;

        case userTypes.SIGN_UP_ERROR:
            return {
                ...state,
                signUpError: action.payload
            }
            break;

        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
            break;

        case userTypes.RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPasswordError: action.payload
            }
            break;

        case userTypes.RESET_AUTH_FORMS:
            return {
                ...state,
                signInSuccess: false,
                signUpSuccess: false,
                signUpError: [],
                resetPasswordSuccess: false,
                resetPasswordError: [],
            }
            break;

        default:
            return state;
            break;
    }
}

export default userReducer;