import React from 'react'
import { MdDelete } from "react-icons/md";
const Item = ({ item, checkedbox, deleteTask }) => {
    return (
        <li
            className='border-2 border-black p-4 m-2'
        >
            <input
                className='h-8 w-8 m-1'
                type="checkbox"
                readOnly
                onChange={() => checkedbox(item.id)}
                checked={item.checked}
            />
            <label onDoubleClick={() => checkedbox(item.id)}
                className='text-center text-xl relative top-[-10px]'
            >{item.item}</label>
            <MdDelete className='h-10 w-10 float-end hover:text-red-500'
                type='button'
                onClick={() => deleteTask(item.id)} />
        </li>
    )
}

export default Item
