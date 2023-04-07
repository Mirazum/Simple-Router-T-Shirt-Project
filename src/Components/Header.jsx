import React, { useState } from 'react';
import { ShoppingBagIcon,XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen]= useState(false)
    return (
        <div className='bg-gray-300 flex items-center justify-between h-10 p-2'>
            <div>
            <ShoppingBagIcon className="h-6 w-6 text-blue-500" />
            </div>
           
        <ul className='items-center space-x-8 lg:flex hidden'> 
        {/* small device er jonno hidden */}
            <li>
                <NavLink to='/' className={({isActive})=>
            (isActive?'bg-blue-400':'default:')}> Home</NavLink>
            </li>
            <li>
                <NavLink to='/orders' className={({isActive})=>
            (isActive?'bg-blue-400':'default:')}> Order Review</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive})=>
            (isActive?'bg-blue-400':'default:')}> About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({isActive})=>
            (isActive?'bg-blue-400':'default:')}> Contact</NavLink>
            </li>
        </ul>
        {/* mobile nav bar */}
        <div onClick={()=>setOpen(!open)} className='lg:hidden ' title='close menu'>
                <span>
                    {
                        open === true? <XMarkIcon className="h-6 w-6 text-blue-500" />
                        :<Bars3Icon className="h-6 w-6 text-blue-500"/>
                        
                    }
                </span>
        </div>
        <ul className={`md:flex absolute md:static duration-500 ${open?'top-6':'-top-48'} space-y-4 lg:hidden mt-8 p-4`}>
            {/* big device er jonno hidden */}
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/orders'>Orders</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
        </ul>
            
        </div>
    );
};

export default Header;