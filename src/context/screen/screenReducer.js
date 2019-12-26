import { CHANGE_SCREEN } from "../types";

const handlers = {
    [CHANGE_SCREEN]: (state, payload) => payload,
    DAFAULT: state => state
}

export const ScreenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DAFAULT;
    return handler(state, action.payload);
};
