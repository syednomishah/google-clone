import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';
import { useStateContext } from '../contexts/StateContextProvider';
export default function SearchBox() {
    const { setSearchTerm } = useStateContext();
    const [text, setText] = useState('Elon Musk');
    const [debouncedValue] = useDebounce(text, 500);

    useEffect(()=>{
        if (debouncedValue.trim()) setSearchTerm(debouncedValue.trim());
        else setSearchTerm('');
    },[debouncedValue])
    return (
        <div className="searchBox relative sm:w-1/3 sm:-ml-96 sm:mr-40 flex flex-col">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Search Goggle' className="rounded-full p-2 pl-4 shadow-sm hover:shadow-lg mb-3 text-gray-800 focus:outline-none"  />
                {
                    text!=''?(
                        <button className="absolute text-gray-700 top-1 right-1 text-xl px-2 bg-white rounded-full " onClick={e=>setText('')}>x</button>
                    ):null
                }            
        </div>
    )
}
