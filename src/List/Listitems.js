import React, { Component } from 'react';
import List from './list';
import SimpleList from './SimpleList';
import Tools from './Tools';

const arr = [
    {
        id: "1",
        title: "Lorem Ipsum is simply dummy",
        dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        isActive: false,
    },
    {
        id: "2",
        title: "Lorem Ipsum is simply dummy",
        dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        isActive: true,
    },
    {
        id: "3",
        title: "Lorem Ipsum is simply dummy",
        dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        isActive: false,
    }
]

export default class listitems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: arr,
            activeState: 'All'
        }
    }
    handelDelete = (items) =>{
        console.log("handelDelete", items);
        const newList = this.state.data.filter((element)=> element.id !== items.id);
        this.setState({
            data:newList
        })
    }
    onListChange = (e) => {
        const value = e.target.value;
        // const newList = arr.filter((item) => {
        //     if (value === 'All') {
        //         return true;
        //     }
        //     else if (value === 'Active') {
        //         return item.isActive === true
        //     }
        //     else if (value === 'InActive') {
        //         return item.isActive === false
        //     }
        //     return false;
        // })
        // this.setState({
        //     data:newList
        // })
        this.setState({
            activeState: value
        })
    }
    render() {
        const { data, activeState } = this.state;
        const newList = data.filter((item) => {
            if (activeState === 'All') {
                return true;
            }
            else if (activeState === 'Active') {
                return item.isActive === true
            }
            else if (activeState === 'InActive') {
                return item.isActive === false
            }
            return false;
        })
        return (
            <Tools onAction={this.onListChange}>
               <SimpleList data={newList} onAction={this.handelDelete} />
            </Tools>
        )
    }
}

