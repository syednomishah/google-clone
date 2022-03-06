import React from 'react';
import Links from './Links';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout =({children, darkTheme, toggleDarkTheme}) =>{
    
    return(
        <>
            <div className="bg-gray-100 dark:bg-gray-800 flex flex-col h-full min-h-screen dark:text-white text-gray-900">
                <div className="border-b dark:border-gray-700 border-gray-300">
                    <Navbar darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
                    <Links />
                </div>
                
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
           
        </>
    )
}

export default Layout;