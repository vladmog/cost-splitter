import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';


const FormDiv = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;
    const InputsDiv = styled.div`
        width: 100%;
        margin: auto;
    `;
        const NameDiv = styled.div`
            height: 35px;
            display: flex;
            justify-content: center;
            margin-bottom: 2px;
        `;
            const NameInput = styled.input`
                width: 66%;
                text-align: center;
                border: solid gray 1px;
            `;
        const InputPairDiv = styled.div`
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: space-evenly;
            // background-color: black;
            margin-bottom: 2px;
        `;
            const ExpenseInput = styled.input`
                width: 49%;
                border: solid gray 1px;

            `;
            const CostInput = styled.input`
                width: 49%;
                border: solid gray 1px;
            `;
        const AddFriendButton = styled.button`
            height: 30px;
            width: 100%;
            margin: auto;
        `;




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
        let cost1 = (this.state.cost1 ? this.state.cost1 : 0)
        let cost2 = (this.state.cost2 ? this.state.cost2 : 0)
        let cost3 = (this.state.cost3 ? this.state.cost3 : 0)
        let cost4 = (this.state.cost4 ? this.state.cost4 : 0)
        let cost5 = (this.state.cost5 ? this.state.cost5 : 0)
        let friend = {
            friendId: this.state.friendId,
            name: (this.state.name ? this.state.name : `Friend ${this.state.friendIncrement}` ),
            expense1: (this.state.expense1 ? this.state.expense1 : "Expense 1"),
            expense2: (this.state.expense2 ? this.state.expense2 : "Expense 2"),
            expense3: (this.state.expense3 ? this.state.expense3 : "Expense 3"),
            expense4: (this.state.expense4 ? this.state.expense4 : "Expense 4"),
            expense5: (this.state.expense5 ? this.state.expense5 : "Expense 5"),
            cost1: cost1,
            cost2: cost2,
            cost3: cost3,
            cost4: cost4,
            cost5: cost5,
            totalCosts:(parseFloat(cost1) +
                parseFloat(cost2) +
                parseFloat(cost3) +
                parseFloat(cost4) +
                parseFloat(cost5)),
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
        this.props.addingToggleTrue()
    }

    

    render() {
        return(
            <FormDiv>
                <NameDiv>
                    <NameInput
                        name = "name"
                        placeholder = "Name"
                        value = {this.state.name}
                        onChange = {this.changeHandler}
                    />
                </NameDiv>
                <InputsDiv>
                    <InputPairDiv>
                        <ExpenseInput 
                            name = "expense1"
                            type = "text"
                            placeholder = "Expense"
                            value = {this.state.expense1}
                            onChange = {this.changeHandler}
                        />
                        <CostInput 
                            name = "cost1"
                            placeholder = "Cost" 
                            type = "number" 
                            value = {this.state.cost1}
                            onChange = {this.changeHandler}
                        />
                    </InputPairDiv>
                    
                    <InputPairDiv>
                        <ExpenseInput  
                            name = "expense2"
                            type = "text"
                            placeholder = "Expense"
                            value = {this.state.expense2}
                            onChange = {this.changeHandler}
                        />
                        <CostInput 
                            name = "cost2"
                            placeholder = "Cost" 
                            type = "number" 
                            value = {this.state.cost2}
                            onChange = {this.changeHandler}
                        />
                    </InputPairDiv>

                    <InputPairDiv>
                        <ExpenseInput  
                            name = "expense3"
                            type = "text"
                            placeholder = "Expense"
                            value = {this.state.expense3}
                            onChange = {this.changeHandler}
                        />
                        <CostInput
                            name = "cost3"
                            placeholder = "Cost" 
                            type = "number" 
                            value = {this.state.cost3}
                            onChange = {this.changeHandler}
                        />
                    </InputPairDiv>

                    <InputPairDiv>
                        <ExpenseInput  
                            name = "expense4"
                            type = "text"
                            placeholder = "Expense"
                            value = {this.state.expense4}
                            onChange = {this.changeHandler}
                        />
                        <CostInput
                            name = "cost4"
                            placeholder = "Cost" 
                            type = "number" 
                            value = {this.state.cost4}
                            onChange = {this.changeHandler}
                        />
                    </InputPairDiv>

                    <InputPairDiv>
                        <ExpenseInput  
                            name = "expense5"
                            type = "text"
                            placeholder = "Expense"
                            value = {this.state.expense5}
                            onChange = {this.changeHandler}
                        />
                        <CostInput
                            name = "cost5"
                            placeholder = "Cost" 
                            type = "number" 
                            value = {this.state.cost5}
                            onChange = {this.changeHandler}
                        />
                    </InputPairDiv>
                </InputsDiv>
                <AddFriendButton onClick = {this.addFriend}>Add friend</AddFriendButton>
            </FormDiv>
        )
    }
}

export default FriendForm;