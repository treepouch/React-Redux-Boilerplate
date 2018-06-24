import React from 'react';
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
import UserDetail2 from '../containers/user-detail2'
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetail />
         <hr />
        <h2>User Details 2</h2>
        <UserDetail2 />
    </div>
);

export default App;
