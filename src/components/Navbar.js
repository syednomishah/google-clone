import React from 'react'
import SearchBox from './SearchBox'

export default function Navbar({darkTheme, toggleDarkTheme}) {
  return (
    <nav className="flex justify-between items-baseline  p-4 pb-0 text-white">
        <div className="logo mr-1 p-1 px-2 bg-blue-500 rounded-xl cursor-pointer sm:text-xl">Goggl 🔎</div>
        <SearchBox />
        <div className="themeMode bg-gray-600 cursor-pointer shadow-sm hover:shadow-lg p-1 px-2 rounded-xl" onClick={e=>toggleDarkTheme(!darkTheme)}>
            {darkTheme ? '💡 Light' : '🌙 Dark'}
        </div>
    </nav>
  )
}
