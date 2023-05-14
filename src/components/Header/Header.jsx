import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import logoimg from '/src/assets/food-time.png'
import './Header.css'

const Header = () => {
    return (
        <div className='py-2 container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className="text-3xl font-semibold primary-text-color"><img src={logoimg} alt="" /></Link>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><NavLink className='font-semibold' to='/'>Home</NavLink></li>
                    <li><NavLink className='font-semibold' to='/blog'>Blog</NavLink></li>
                    <li><NavLink className='font-semibold' to='/aboutUs'>About us</NavLink></li>

                    <li tabIndex={0}>
                        <NavLink className='font-semibold' to='/en'>
                        EN
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </NavLink>
                        <ul className="p-2">
                        <li><a>Page 1</a></li>
                        <li><a>Page 2</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn mr-5 primary-bg-color rounded-full px-10 capitalize ">Login</Link>
                    <div className='primary-bg-color text-white p-3 rounded-full'><FaShoppingCart className='text-xl' />
                    </div>
                    <div className="badge bg-orange-500 border-white badge-md absolute lg:right-20 lg:top-2 md:right-0 md:top-2 sm:right-0 top-2">44</div>
                </div>
            </div>
        </div>
    );
};

export default Header;