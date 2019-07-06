import React from 'react';
import {Component} from 'react';
import Friend from './Friend';

class FriendsList extends Component {
    state = {

    }

    render() {
        return(
            <div>
                {this.props.friends.map(friend => {
                    return(
                        <div key = {Math.random()}>
                            <Friend 
                                friend = {friend} 
                                evenPayment = {this.props.evenPayment}
                                owed = {this.props.owed}
                                addingToggle = {this.props.addingToggle}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;