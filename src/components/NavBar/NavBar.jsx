import React from 'react';

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

const NavBar = () => {
    return (
        <nav>
            <ul className='flex gap-5'>
                {navLinks.map(data => <li><a key={data.id} href={data.path}>{data.name}</a></li>)}
                {/* <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li> */}
    
            </ul>
        </nav>
    );
};

export default NavBar;