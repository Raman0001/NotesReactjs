import React, { useRef } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";

const AddItem = ({ text, setText, handleSubmit }) => {
  const ref = useRef();
  return (
    <form className='flex m-2 p-0' onSubmit={handleSubmit}>
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        autoComplete='off'
        ref={ref}
        type="text"
        id="addItem"
        placeholder='Add Item'
        className='flex border-black outline-none w-[100%] border-[5px] rounded-md pl-2 m-[2px] placeholder:text-black placeholder:font-bold '
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>
        <FaRegPlusSquare className='text-5xl hover:text-green-500' />
      </button>
    </form>
  )
}

export default AddItem
