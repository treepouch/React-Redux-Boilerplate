import {combineReducers} from 'redux';
import nav from './nav';
import {tier1promos} from './tier1promos';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    nav,
    tier1promos
});

export default allReducers
