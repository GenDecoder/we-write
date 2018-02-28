import {
    combineReducers
} from 'redux';

import {
    reducer as form
} from 'redux-form';

import {
    localeReducer as locale
} from 'react-localize-redux';

export default combineReducers({
    form, // redux-form support
    locale // localization support
});