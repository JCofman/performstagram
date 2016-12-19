import {firebaseAuth} from './firebase';
import * as actions from '../../actions/actionCreator';

export function initAuth(dispatch) {
    debugger;
    return new Promise((resolve, reject) => {
        const unsub = firebaseAuth.onAuthStateChanged((user) => {
            dispatch(actions.initAuth(user));
            unsub();
            resolve();
        }, (error) => reject(error));
    });
}
export function getAuth(state) {
    debugger;
    return state.auth;
}

export function isAuthenticated(state) {
    debugger;
    return getAuth(state).authenticated;
}