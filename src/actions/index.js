import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
    console.log('emailChanged', text);
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}