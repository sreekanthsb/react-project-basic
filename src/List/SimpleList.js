import React from 'react'
import List from './list';

function SimpleList(props) {
    const {data, onAction} = props
    return (
        <div className='list-items'>
            {
                data.map((obj) => {
                    return <List
                        key={obj.id}
                        title={obj.title}
                        dis={obj.dis}
                        isActive={obj.isActive}
                        onDelete={() => { onAction(obj); }} />
                })
            }
        </div>
    )
}

export default SimpleList