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