const INIT_STATE = {
    info: {}
}

const userInfo = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "USER_LOGED_IN":
            return { ...state, info: action.payload }
        default:
            return state;
    }
}
export default userInfo