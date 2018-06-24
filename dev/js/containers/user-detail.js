import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        const {thumbnail, first, last, age, description} = this.props.user;
        return (
            <div>
                <img src={thumbnail} />
                <h2>{first} {last}</h2>
                <h3>Age: {age}</h3>
                <h3>Description: {description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
