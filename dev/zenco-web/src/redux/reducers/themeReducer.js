import {
    CHANGE_THEME_TO_DARK,
} from '../actions/themeActions';

const initialState = {
    className: 'theme-dark',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME_TO_DARK:
            return {className: 'theme-dark'};
        default:
            return state;
    }
}
