import React from 'react'
import Listlabel from './Listlabel'

function List(props) {
    return (
        <div className='list-label'>
            <hr />
            <div className='list-title'>

                <h4>{props.title}</h4>
                <label onClick={props.onDelete}>Delete</label>
            </div>
            <div className="list-descr">
                {props.dis}
            </div>
            <Listlabel onAction={()=>{
                console.log('parent');
            }} isActive={props.isActive} />
            <hr />
        </div>
    )
}

export default List