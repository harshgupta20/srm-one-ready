import React from 'react'
import Navbar from '../../Navbar';

//
import './Basic_eng.css';
import PDFimg from '../../img/PDF-img.svg';

import Sem1_objects from './Sem1_objects';
//
export default function Workshops() {
    return (
        <>
        <Navbar />
        <div className='s1-be-container'>
            <div className='s1-above-map'>
            {Sem1_objects[0].workshops.map((curElement)=>{
                return <div className='s1-pdf'>
                    <a href={curElement.fileLink} target='_blank' rel="noreferrer"><img className='s1-img' src={PDFimg} alt="PDF-img"/></a>
                    <p className='s1-p'>{curElement.name}</p>
                </div>
            })}
            </div>
        </div>
        </>
    )
}
