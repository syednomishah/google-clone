import React from 'react'

import { NavLink } from 'react-router-dom';
const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/images', text: '📸 Images' },
    { url: '/videos', text: '📺 Videos' },
  ];
  
export default function Links() {
  return (
    <ul className="links flex justify-center sm:justify-start sm:ml-64 dark:text-white text-gray-800">
        {
            links.map((link,index)=>{
                return (
                    <NavLink key={index+1} to={link.url} className={({isActive})=> isActive? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 px-3": "px-3"}>{link.text}</NavLink>
                )
            })
        }
    </ul>
)
}
