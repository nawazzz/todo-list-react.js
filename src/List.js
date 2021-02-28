import React from 'react'

class List extends React.Component{
  constructor(props){
    super(props);
  }
  
    render(){
      // console.log(this.props)
        return (
            <div style={{
              width: '300px',
              margin: '0 auto'
            }}>
                <div>
                    <ul>
                        {this.props.todos.map((elm, index) => {
                          return (
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              width: "100%"
                            }}>
                                <input style={{
                              width: "20%"
                            }} type="checkbox" onClick={() => this.props.markAsComplete(elm.id)} />
                              <li style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                              }} onClick={() => this.props.updateList(elm.text, elm.id)}>
                                
                                <span>{elm.text}</span>
                                <span style={{
                                  color: 'red'
                                }} onClick={() => this.props.deleteListElement(elm.id)}>x</span>
                                
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