import React from 'react';
import {Component} from 'react';
import Message from './Message';

class Friend extends Component {
    state = {
        owesToggle: false,
        evenToggle: false
    }

    componentDidMount(){
        if (this.props.evenPayment > this.props.friend.totalCosts){
            this.setState({
                owesToggle: true
            })
        } else if (this.props.evenPayment < this.props.friend.totalCosts) {
            this.setState({
                owesToggle: false
            })
        } else if (this.props.evenPayment === this.props.friend.totalCosts) {
            this.setState({
                evenToggle: true
            })
        }
    }

    render() {
        let friendOwes = parseFloat(this.props.evenPayment) - parseFloat(this.props.friend.totalCosts)
        return(
            <div>
                <h3>{this.props.friend.name}</h3>
                {this.props.friend.cost1 === 0 ? (<></>) : (<div>{this.props.friend.expense1}: ${this.props.friend.cost1}</div>)}
                {this.props.friend.cost2 === 0 ? (<></>) : (<div>{this.props.friend.expense2}: ${this.props.friend.cost2}</div>)}
                {this.props.friend.cost3 === 0 ? (<></>) : (<div>{this.props.friend.expense3}: ${this.props.friend.cost3}</div>)}
                {this.props.friend.cost4 === 0 ? (<></>) : (<div>{this.props.friend.expense4}: ${this.props.friend.cost4}</div>)}
                {this.props.friend.cost5 === 0 ? (<></>) : (<div>{this.props.friend.expense5}: ${this.props.friend.cost5}</div>)}
                <div>Total costs: ${this.props.friend.totalCosts}</div>
                {this.state.evenToggle ? (<div>You're even!</div>) : (this.state.owesToggle ? (this.props.owed.map(owed => {
                    return (
                        <div key = {Math.random()}>
                            <Message 
                                friend = {this.props.friend} 
                                totalCosts = {this.props.friend.totalCosts}
                                evenPayment = {this.props.evenPayment}
                                friendOwes = {friendOwes}
                                owed = {owed}
                            />
                        </div>
                    )
                })
                ) : (
                    <div>You are owed ${(parseFloat(this.props.friend.totalCosts) - parseFloat(this.props.evenPayment)).toFixed(2)}</div>
                ))}
                <hr/>
            </div>
        )
    }
}

export default Friend;