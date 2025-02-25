import React, { Component } from 'react';

export default class Cell extends React.Component{

  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = {
      color: props.value
    }
  }

handleClick = () => {
  this.setState({
    color: '#333'
  })
}

  render(){
    return (
      <div
      className = 'cell'
      style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}
      >

      </div>
    )
  }
}
