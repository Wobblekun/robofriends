import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
//state means description of your app. an object that describes your application
//this state describes the robot and what is enter is searchbox
//state can change value, value in the searchbox, what is displayed
//props are simply things that come out of state.
//parent feeds state to child component. then it becomes the property of the child.

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
//comment
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {this.setState({ robots: users })});
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
      const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
      if (this.state.robots.length === 0) {
        return <h1>Loading...</h1>
      } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
  }
}
}
  
export default App;