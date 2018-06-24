import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail2 extends Component {
    render() {
        if (!this.props.user2) {
            return (<div>Select a user...</div>);
        }
        const {thumbnail, first, last, age, description} = this.props.user2;
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
        user2: state.activeUser2
    };
}

export default connect(mapStateToProps)(UserDetail2);