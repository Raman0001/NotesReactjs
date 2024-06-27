import React from 'react'

const Footer = ({items}) => {
  return (
    <footer className='bg-blue-700 fixed inset-x-0 bottom-0 font-bold text-center h-8 text-xl'>
       <h1>{items.length}</h1> 
    </footer>
  )
}

export default Footer
