import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/home"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Portfolio",
        path: "/portfolio"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];
const links = navLinks.map(data => <li className=' hover:bg-amber-500 p-2 text-center rounded-sm'><a key={data.id} href={data.path}>{data.name}</a></li>);


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleSignIn = () => {
        console.log("sign in clicked");
    }
    return (
        <nav className=' flex justify-between mx-6'>
            <span className='flex gap-3' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}


                <ul className={`md:hidden  absolute duration-1000 ${menuOpen? 'top-10' : '-top-65'} bg-amber-300 p-5`}>
                    {links}
                </ul>

                <h1>My Logo</h1>
            </span>
            <ul className='md:flex hidden gap-5 '>
                {links}
                {/* <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li> */}



            </ul>
            <button className='btn btn-primary' onClick={handleSignIn}>Sign In</button>
        </nav>
    );
};

export default NavBar;