import React, { Component } from 'react'

export default class AddNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            titleInput:''
        }
    }
    handelChange = (event) =>{
        const value = event.target.value;
        this.setState({
            titleInput:value
        })
    }
    handelClick = () => {
        console.log(this.state.titleInput);
    }
  render() {
    
    return (
      <div>
        <input type="text" onChange={this.handelChange} />
        <span>hi</span>
        <button type='button' value={this.state.titleInput} onClick={this.handelClick}>add</button>
      </div>
    )
  }
}
