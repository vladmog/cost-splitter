import React from 'react';
import {Component} from 'react';

class FriendForm extends Component {
    state = {
        friendId: 0,
        friendIncrement: 1,
        name: "",
        expense1: "",
        expense2: "",
        expense3: "",
        expense4: "",
        expense5: "",
        cost1: "",
        cost2: "",
        cost3: "",
        cost4: "",
        cost5: "",
    }

    changeHandler = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = (e) => {
        e.preventDefault()
        let friend = {
            friendId: this.state.friendId,
            name: (this.state.name ? this.state.name : `Friend ${this.state.friendIncrement}` ),
            expense1: (this.state.expense1 ? this.state.expense1 : "Expense 1"),
            expense2: (this.state.expense2 ? this.state.expense2 : "Expense 2"),
            expense3: (this.state.expense3 ? this.state.expense3 : "Expense 3"),
            expense4: (this.state.expense4 ? this.state.expense4 : "Expense 4"),
            expense5: (this.state.expense5 ? this.state.expense5 : "Expense 5"),
            cost1: (this.state.cost1 ? this.state.cost1 : 0),
            cost2: (this.state.cost2 ? this.state.cost2 : 0),
            cost3: (this.state.cost3 ? this.state.cost3 : 0),
            cost4: (this.state.cost4 ? this.state.cost4 : 0),
            cost5: (this.state.cost5 ? this.state.cost5 : 0),
        }
        this.props.addFriendToList(friend)

        this.setState((prevState) => ({
            friendId: prevState.friendId + 1,
            friendIncrement: prevState.friendIncrement + 1,
            name: "",
            expense1: "",
            expense2: "",
            expense3: "",
            expense4: "",
            expense5: "",
            cost1: "",
            cost2: "",
            cost3: "",
            cost4: "",
            cost5: "",
        }))
    }

    

    render() {
        return(
            <div>
                <div>
                    <input
                        name = "name"
                        placeholder = "Name"
                        value = {this.state.name}
                        onChange = {this.changeHandler}
                    />
                </div>
                <div>
                    <input 
                        name = "expense1"
                        type = "text"
                        placeholder = "Expense"
                        value = {this.state.expense1}
                        onChange = {this.changeHandler}
                    />
                    <input 
                        name = "cost1"
                        placeholder = "Cost" 
                        type = "number" 
                        value = {this.state.cost1}
                        onChange = {this.changeHandler}
                    />
                </div>
                
                <div>
                    <input 
                        name = "expense2"
                        type = "text"
                        placeholder = "Expense"
                        value = {this.state.expense2}
                        onChange = {this.changeHandler}
                    />
                    <input 
                        name = "cost2"
                        placeholder = "Cost" 
                        type = "number" 
                        value = {this.state.cost2}
                        onChange = {this.changeHandler}
                    />
                </div>

                <div>
                    <input 
                        name = "expense3"
                        type = "text"
                        placeholder = "Expense"
                        value = {this.state.expense3}
                        onChange = {this.changeHandler}
                    />
                    <input 
                        name = "cost3"
                        placeholder = "Cost" 
                        type = "number" 
                        value = {this.state.cost3}
                        onChange = {this.changeHandler}
                    />
                </div>

                <div>
                    <input 
                        name = "expense4"
                        type = "text"
                        placeholder = "Expense"
                        value = {this.state.expense4}
                        onChange = {this.changeHandler}
                    />
                    <input 
                        name = "cost4"
                        placeholder = "Cost" 
                        type = "number" 
                        value = {this.state.cost4}
                        onChange = {this.changeHandler}
                    />
                </div>

                <div>
                    <input 
                        name = "expense5"
                        type = "text"
                        placeholder = "Expense"
                        value = {this.state.expense5}
                        onChange = {this.changeHandler}
                    />
                    <input 
                        name = "cost5"
                        placeholder = "Cost" 
                        type = "number" 
                        value = {this.state.cost5}
                        onChange = {this.changeHandler}
                    />
                </div>
                <button onClick = {this.addFriend}>Add friend</button>
            </div>
        )
    }
}

export default FriendForm;