import React from 'react';
import {Component} from 'react';
import Message from './Message';
import styled from 'styled-components';

const FriendDiv = styled.div`
    border: solid grey 1px;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-bottom: 10px;
`;

const NameDiv = styled.div`
    height: 35px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const FiftyFiftyDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ExpensesDiv = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const CalculationsDiv = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const TotalCostsDiv = styled.div`
    color: blue;
`;


class Friend extends Component {
    state = {
        owesToggle: null,
        evenToggle: null
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
        } else {
            this.setState({
                evenToggle: true
            })
        }
    }

    render() {
        let friendOwes = parseFloat(this.props.evenPayment) - parseFloat(this.props.friend.totalCosts)
        return(
            <FriendDiv>
                <NameDiv>
                    <h3>{this.props.friend.name}</h3>
                </NameDiv>
                <FiftyFiftyDiv>
                    <ExpensesDiv>
                        {this.props.friend.cost1 === 0 ? (<></>) : (<div>{this.props.friend.expense1}: ${this.props.friend.cost1}</div>)}
                        {this.props.friend.cost2 === 0 ? (<></>) : (<div>{this.props.friend.expense2}: ${this.props.friend.cost2}</div>)}
                        {this.props.friend.cost3 === 0 ? (<></>) : (<div>{this.props.friend.expense3}: ${this.props.friend.cost3}</div>)}
                        {this.props.friend.cost4 === 0 ? (<></>) : (<div>{this.props.friend.expense4}: ${this.props.friend.cost4}</div>)}
                        {this.props.friend.cost5 === 0 ? (<></>) : (<div>{this.props.friend.expense5}: ${this.props.friend.cost5}</div>)}
                        <TotalCostsDiv>Total costs: ${this.props.friend.totalCosts}</TotalCostsDiv>
                    </ExpensesDiv>
                    {(this.props.addingToggle
                        ? <></>
                        :<CalculationsDiv>
                            {this.state.evenToggle 
                                ? (<div>You're even!</div>) 
                                : (this.state.owesToggle 
                                    ? (this.props.owed.map(owed => {
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
                                    })) 
                                    : (<div>You are owed ${(parseFloat(this.props.friend.totalCosts) - parseFloat(this.props.evenPayment)).toFixed(2)}</div>)
                            )}
                        </CalculationsDiv>
                    )}
                </FiftyFiftyDiv>
            </FriendDiv>
        )
    }
}

export default Friend;