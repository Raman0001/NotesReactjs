import React from 'react'
import Item from './Item';
const ItemList = ({ items, checkedbox, deleteTask }) => {

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        checkedbox={checkedbox}
                        deleteTask={deleteTask}
                        />
                ))}
            </ul>
        </div>
    )
}

export default ItemList
