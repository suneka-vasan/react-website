import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-c-light'>
            <div className='container py-5'>
                <div className='col-md-4 offset-md-4 text-center'>
                    <ul className='list-group list-group-horizontal'>
                        <li className='list-group-item flex-fill'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='list-group-item flex-fill'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='list-group-item flex-fill'>
                            <Link to='/'>Privacy Policy</Link>
                        </li>
                        <li className='list-group-item flex-fill'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className='bg-white' />
                <p className='text-center'>@ React website 2022, Made by ******</p>
            </div>
        </footer>
    )
}

export default Footer;