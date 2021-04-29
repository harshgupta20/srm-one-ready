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
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/BasicEng-2'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Basic Eng. 2</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/Chemistry'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Chemistry</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/Java'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Java</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/Mathematics-2'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Mathematics</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/PD'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">PD</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/Physics'><img className='sem-card-img' src={YF} alt="folder"/><p className="sem1-card-text">Physics</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/Eng-Graphics'><img className='sem-card-img' src={PF} alt="folder"/><p className="sem1-card-text">Eng. Graphics</p></NavLink>
                    </div>
                    <div className='s1-sub-card'>
                        <NavLink className='sem1-navlink' to='/Notes/Sem2/ValueEducation'><img className='sem-card-img' src={PF} alt="folder"/><p className="sem1-card-text">Value Education</p></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
