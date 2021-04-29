import React from 'react'
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';
import './Notes.css';



export default function Notes() {
    return (
        <>
            <div className='n-head'>
                <Navbar />
                <div className="n-sem-list">
                    <NavLink exact to='/notes/sem1'><div className="n-sem n-sem1"></div></NavLink>
                    <NavLink exact to='/notes/sem2'><div className="n-sem n-sem2"></div></NavLink>
                    <div className="n-sem n-sem3 n-sem-disable"></div>  
                    <div className="n-sem n-sem4 n-sem-disable"></div>
                    <div className="n-sem n-sem5 n-sem-disable"></div>
                    <div className="n-sem n-sem6 n-sem-disable"></div>
                    <div className="n-sem n-sem7 n-sem-disable"></div>
                    <div className="n-sem n-sem8 n-sem-disable"></div>
                </div>
            </div>
        </>
    )
}
