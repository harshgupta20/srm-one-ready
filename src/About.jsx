import React from 'react';

import Navbar from './Navbar';
import AboutImg from './img/About.png';

import './About.css';

export default function About() {
    return (
        <>
            <div>
                <Navbar />
                <div className='about-box'>
                <p className='about-text'><h1 className='about-heading'>About</h1><br />Isn’t it too much effort asking seniors or even classmates for notes each time you have an exam?

Now, with semesters online most of the content you’d have to otherwise jot down is made available online in google classrooms across sections.

🤔 Why can’t it be consolidated in one place?<br/><br/>

Made available on request, sorted into semesters and ready to go instead of having to download all files to your device. 🥵

We have built ‘SRM One’ keeping all this in mind. Your one stop destination to avail all study material (Notes, PDFs and Books) to get that 9 CGPA this semester.

SRM One is a Notes, PDFs, and Book viewer Web app made for students of SRM.</p>
                <img className='about-img' src={AboutImg} alt="LadyWithBallon"/>
            </div>
            </div>
        </>
    )
}
