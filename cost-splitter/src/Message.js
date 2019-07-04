import React from 'react';
import {Component} from 'react';

class Message extends Component {
    state = {}

    // function = () => {
    //     message = `You owe `
    //     amount = 0
    //     // let friendOwes = parseFloat(this.props.evenPayment) - parseFloat(this.props.totalCosts)
    //     // console.log("friendOwes: ", friendOwes)
    //     this.props.owed.forEach(friend => {
    //         message += `${friend.name} ${(parseFloat(friendOwes) * parseFloat(friend.percentageOwed)).toFixed(2)} dollars, and ` 
    //     })
    // }

    render(){
        return(
            <div>
                <p>You owe {this.props.owed.name} ${(parseFloat(this.props.friendOwes) * parseFloat(this.props.owed.percentageOwed)).toFixed(2)}, </p>
            </div>
        )
    }
}

export default Message;