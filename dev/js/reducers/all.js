import {combineReducers} from 'redux';
import SideNavigation from './reducer-side-navigation';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allVH1Reducers = combineReducers({
    sidenavigation: SideNavigation
});

export default allVH1Reducers
