import React from 'react';
import NavContainer from '../containers/navContainer';
import Tier1promosContainer from '../containers/tier1promosContainer';
import {FormContainer} from '../containers/allContainer';


require('../../scss/mtv.scss');

const AppMTV = () => 
    <div id="container">
       
        <NavContainer />
        <Tier1promosContainer />
        <FormContainer />

    </div>



export default AppMTV;

