import React from 'react';
import './App.css';
import {Component} from 'react';
import FriendForm from './FriendForm';
import FriendsList from './FriendsList';
import styled from 'styled-components';


class App extends Component {
  state = {
    friends: [],
    owed: [],
    total: 0,
    evenPayment: 0,
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
    // console.log(typeof this.state.friends[0].cost1)
    let total = this.state.friends.reduce((total, friend) => {
      return total + parseFloat(friend.cost1) + parseFloat(friend.cost2) + parseFloat(friend.cost3) + parseFloat(friend.cost4) + parseFloat(friend.cost5);
    }, 0)

    this.setState((prevState) => ({
      total: total
    }))
    this.calculateEvenPayment(total)
  }

  calculateEvenPayment = total => {
    console.log("total: ", total)
    console.log("friends#: ", this.state.friends.length)
    let evenPayment = total / this.state.friends.length
    this.setState((prevState) => ({
      evenPayment: evenPayment.toFixed(2)
    }))
    console.log("evenPaayment: ", evenPayment)
    this.createOwedList(evenPayment)
  }

  createOwedList = (evenPayment) => {
    let owed = this.state.friends.filter(friend => {
      return (parseFloat(friend.cost1) +
        parseFloat(friend.cost2) +
        parseFloat(friend.cost3) +
        parseFloat(friend.cost4) +
        parseFloat(friend.cost5)) > evenPayment
        // parseFloat(friend.cost5)) > this.state.evenPayment
    })
    console.log("owed: ", owed)
    let cumulativeOwed = owed.reduce((cumulativeOwed, friend) => {
      return parseFloat(cumulativeOwed) + (parseFloat(friend.cost1) +
      parseFloat(friend.cost2) +
      parseFloat(friend.cost3) +
      parseFloat(friend.cost4) +
      parseFloat(friend.cost5) - parseFloat(evenPayment))
      // parseFloat(friend.cost5) - parseFloat(this.state.evenPayment))
    }, 0)
    let owedWithPercentage = owed.map(friend => {
      friend.percentageOwed = (
        ((parseFloat(friend.cost1) +
        parseFloat(friend.cost2) +
        parseFloat(friend.cost3) +
        parseFloat(friend.cost4) +
        parseFloat(friend.cost5)) - evenPayment) / cumulativeOwed
        // parseFloat(friend.cost5)) - this.state.evenPayment) / cumulativeOwed
      )
      return friend
    })
    console.log("owedWithPercentage: ", owedWithPercentage)
    this.setState((prevState) => ({
      owed: owedWithPercentage
    }))
  }

  render(){
      return (
        <div className="App">
          <div>
            <FriendForm addFriendToList = {this.addFriendToList} />
            <FriendsList 
              friends = {this.state.friends} 
              evenPayment = {this.state.evenPayment} 
              owed = {this.state.owed}
              />
            <button onClick = {this.getTotalCosts}>Calculate</button>
            <div>Total: {this.state.total}</div>
            <div>Even Payment: {this.state.evenPayment}</div>
          </div>
        </div>
      );
  }
}

export default App;
