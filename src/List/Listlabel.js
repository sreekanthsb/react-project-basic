import React, { Component } from 'react';
import "./label.css"

export default class Listlabel extends Component {
  render() {
    const props = this.props;
    const style = props.isActive ? {background:'green'} : {background:'orange'}
    console.log("val", props);
    return <span onClick={()=>{props.onAction();}} className='ListlabelItem' style={style}>{props.isActive ? 'Active' : 'Non Active'}</span>
  }
}
