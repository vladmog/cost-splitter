import React from 'react';
import './App.css';
import {Component} from 'react';
import FriendForm from './FriendForm';
import FriendsList from './FriendsList';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 95%;
    margin: auto;
`;

class App extends Component {
  state = {
    friends: [],
    owed: [],
    total: null,
    evenPayment: null,
    addingToggle: true,
  }

  addingToggleTrue = () => {
    if(this.state.addingToggle === false){  
      this.setState({
        addingToggle: true
      })}
  }

  addingToggleFalse = () => {
    this.setState({
      addingToggle: false
    })
  }

  addFriendToList = (friend) => {
    this.setState((prevState) => ({
      friends: [
        ...prevState.friends,
        friend
      ]
    }))
  }

  getTotalCosts = e => {
    
    let total = this.state.friends.reduce((total, friend) => {
      return total + parseFloat(friend.totalCosts);
    }, 0)

    this.setState((prevState) => ({
      total: total
    }))
    this.calculateEvenPayment(total)
    this.addingToggleFalse()
  }

  calculateEvenPayment = total => {
    let evenPayment = parseFloat(total / this.state.friends.length)
    this.setState((prevState) => ({
      evenPayment: evenPayment.toFixed(2)
    }))
    this.createOwedList(evenPayment)
  }

  createOwedList = (evenPayment) => {
    let owed = this.state.friends.filter(friend => {
      return (parseFloat(friend.totalCosts)) > evenPayment
    })
    let cumulativeOwed = owed.reduce((cumulativeOwed, friend) => {
      return parseFloat(cumulativeOwed) + (parseFloat(friend.totalCosts) - parseFloat(evenPayment))
    }, 0)
    let owedWithPercentage = owed.map(friend => {
      friend.percentageOwed = (
        ((parseFloat(friend.totalCosts)) - evenPayment) / cumulativeOwed
      )
      return friend
    })
    this.setState((prevState) => ({
      owed: owedWithPercentage
    }))
  }

  render(){
      return (
        <AppContainer>
          <FriendForm 
            addFriendToList = {this.addFriendToList}
            addingToggleTrue = {this.addingToggleTrue}
          />

          <FriendsList 
            friends = {this.state.friends} 
            evenPayment = {this.state.evenPayment} 
            owed = {this.state.owed}
            addingToggle = {this.state.addingToggle}
          />

          {this.state.friends.length === 0 
            ? <></> 
            : <button onClick = {this.getTotalCosts}>Calculate</button>}

          {this.state.addingToggle === true
            ? <></>
            :<div>Total: ${this.state.total}</div>}

          {this.state.addingToggle === true
          ? <></>
          :<div>Even Payment: ${this.state.evenPayment}</div>}
        </AppContainer>
      );
  }
}

export default App;
