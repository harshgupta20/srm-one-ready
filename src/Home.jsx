import React from 'react'; 
import {NavLink} from 'react-router-dom';

//Breadcrump
import './Home.css';
import Navbar from './Navbar';
export default function Home() {
    return (
        <div>
            <div className='h-head'>
                <Navbar />

                <div className='h-content'>
                    <div>
                    <p className='h-para'>Tired of finding your college notes?<br/>Well! not anymore</p>
                    <NavLink className='h-btn-NavLink' to='/Notes'><button className='h-btn'>Get Your Notes</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}