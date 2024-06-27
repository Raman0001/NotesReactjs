import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <div>
       <form className='flex m-2 p-0' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder='Search'
        className='flex border-black outline-none w-[100%] border-[4px] h-10 rounded-md pl-2 m-[2px] placeholder:text-black placeholder:font-bold '
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
    </div>
  )
}

export default SearchItem
