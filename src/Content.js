import React from 'react'
import ItemList from './ItemList'
const Content = ({items, checkedbox, deleteTask }) => {
    return (
        <>
            {items.length === 0 ? <p className="text-black text-center text-2xl font-bold">Empty List</p> : <ItemList
                items={items}
                checkedbox={checkedbox}
                deleteTask={deleteTask}
                
            />}
        </>
    )
}

export default Content
