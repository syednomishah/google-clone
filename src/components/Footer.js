import React from 'react'

export default function Footer() {
  return (
    <footer className='p-6 border-t dark:border-gray-700 flex justify-center border-gray-300'>
        {(/\d{4}/.exec(Date())[0])} Goggl, Inc
    </footer>
  )
}
