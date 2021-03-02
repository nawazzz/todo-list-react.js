import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Header from './Header'
import List from './List'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputVal: "",
      todos: []
    }
    // console.log(this.state)

    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  mutateArray = (e) => {
    // console.dir(e)
    if (this.state.inputVal.length < 1) {
      return
    }
    const newListObj = {
      text: this.state.inputVal,
      isCompleted: false,
      id: Math.floor(Math.random()*90000) + 10000
    }
    if (e.type === "click" || e.which === 13) {
      this.setState({
        todos: [...this.state.todos, newListObj]
      })
    }
    this.setState({
      inputVal: ""
    })
    
    // console.log(this.todos)
  }

  handleInputChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  updateList = (text, id) => {
    this.setState({
      inputVal: text
    })
    this.deleteListElement(id)
  }

  markAsComplete = (id) => {
    const updatedTodos = this.state.todos.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          isCompleted: !obj.isCompleted
        }
      }
      return obj;
    })

    this.setState({ 
      todos: updatedTodos
    })

    // console.log(this.state.todos)
  }

  deleteListElement = (id) => {
    console.log(id)

    // const filteredTodo = this.state.todos.filter(elm => elm !== selectedItem)
    const filteredTodos = this.state.todos.filter((elm, index) => {
      if (id !== elm.id){
        return true;
      }
    })

    this.setState({ 
      todos: filteredTodos
    }) 
  }

  render() {

    return (
      <div className="divContainer">
          <Header />
        <div className="header" >
          <button className="submitButton" onClick={this.mutateArray}>Submit</button>
          <input placeholder="What needs to be done?" className="searchBox" onKeyPress={this.mutateArray} type="text" value={this.state.inputVal} onChange={this.handleInputChange}/>
        </div>
        <List todos={this.state.todos}  deleteListElement={this.deleteListElement}  updateList={this.updateList} markAsComplete={this.markAsComplete}  />
      </div>
    )
  }
}


export default App;