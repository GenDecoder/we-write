import { 
    createStore,
    applyMiddleware
} from 'redux';

import {
    createEpicMiddleware
} from 'redux-observable';

import epic from './epic';
import reducer from './reducer';

const epicMiddleware = createEpicMiddleware(epic);

export default createStore(
    reducer,
    applyMiddleware(epicMiddleware)
);