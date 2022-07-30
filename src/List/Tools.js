import React, { Component } from 'react'
import AddNew from './AddNew'

export default class Tools extends Component {
  render() {
    const {
        children,
        onAction
    } = this.props
    return (
        <div>
            <div className="list-header">
                <select onChange={onAction} name="" id="">
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="InActive">In Active</option>
                </select>
                <AddNew />
            </div>
            {children}
        </div>
    )
  }
}
