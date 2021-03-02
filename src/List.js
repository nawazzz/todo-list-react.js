import React from 'react'

class List extends React.Component{
  constructor(props){
    super(props);
  }
  
    render(){
      // console.log(this.props)
        return (
            <div className="listParentContainer">
                <div>
                    <ul>
                        {this.props.todos.map((elm, index) => {
                          return (
                            <div className="divStyle">
                              <div className="listCheckBox">
                                <input type="checkbox" onClick={() => this.props.markAsComplete(elm.id)} />
                              </div>
                              <li className="listStyling" style={{
                                // display: 'flex',
                                // justifyContent: 'space-between',
                                textDecoration: `${elm.isCompleted === true ? 'line-through' : 'none'}`

                              }} onClick={() => this.props.updateList(elm.text, elm.id)}>
                                
                                <span>{elm.text}</span>
                                <span className="deleteListButton" onClick={() => this.props.deleteListElement(elm.id)}>x</span>
                                
                              </li> 
                            </div>                           
                          )
                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default List;

// - dynamically add three elements for "All", "Completed", "Remaining".
// - Add event listeners on all three elements
// - The "All" event listener should display the whole list.
// - "Completed" element should display the list elements that have this.state.isCompleted as "True".
// - "Remaining" element should display the list elements that have this.state.isCompleted as "False"
// - Filter method can be used to display completed and remaining list elements