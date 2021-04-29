import React from 'react'

import Navbar from '../Navbar';
import './Sem1.css'

import YF from './YF.png';
import PF from './PF.svg';

import{NavLink} from 'react-router-dom';
export default function Sem1(){
    return (
        <>
            <div className="sem1-head">
                <Navbar />
                <div className='sem1-list'>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem1/Basic_eng'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Basic Eng.</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem1/Biology'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Biology</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem1/C'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">C</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem1/EVS'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">EVS</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem1/Material_science'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Material Science</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem1/Mathematics'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Mathematics</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem1/Workshops'><img className='sem-card-img' src={PF} alt="folder"/><p className="sem1-card-text">Workshops</p></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}