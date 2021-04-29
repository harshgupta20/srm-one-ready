import React from 'react'

import Navbar from '../Navbar';
import './Sem1.css'

import YF from './YF.png';
import PF from './PF.svg';

import{NavLink} from 'react-router-dom';
export default function Sem1() {
    return (
        <>
            <div className="sem1-head">
                <Navbar />
                <div className='sem1-list'>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={PF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={PF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/'><img className='sem-card-img' src={PF} alt="folder"/><p className="sem1-card-text">Subject1</p></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
