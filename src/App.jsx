import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './Home';
import Notes from './Notes/Notes';
import About from './About'
import Sem1 from './Notes/Sem1';
import Sem2 from './Notes/Sem2';
import Sem3 from './Notes/Sem3';
import Sem4 from './Notes/Sem4';
import Sem5 from './Notes/Sem5';
import Sem6 from './Notes/Sem6';
import Sem7 from './Notes/Sem7';
import Sem8 from './Notes/Sem8';
//SEMESTER-1
import S1_BasicEng from './Notes/Sem1/Basic_eng';
import S1_Biology from './Notes/Sem1/Biology';
import S1_C_Language from './Notes/Sem1/C_Language';
import EVS from './Notes/Sem1/EVS';
import Material_Science from './Notes/Sem1/Material_science';
import Mathematics from './Notes/Sem1/Mathematics';
import Workshops from './Notes/Sem1/Workshops';
//SEMESTER-2
import S2_BasicEng2 from './Notes/Sem2/BasicEng2';
import S2_Chemistry from './Notes/Sem2/Chemistry';
import S2_EngGraphics from './Notes/Sem2/EngGraphics';
import S2_Java from './Notes/Sem2/Java';
import S2_Mathematics from './Notes/Sem2/Mathematics';
import S2_PD from './Notes/Sem2/PD';
import S2_Physics from './Notes/Sem2/Physics';
import S2_ValueEducation from './Notes/Sem2/ValueEducation';


import './App.css';
export default function App() {
    return (
        <>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Notes' component={Notes} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Notes/Sem1' component={Sem1} />
            <Route exact path='/Notes/Sem2' component={Sem2} />
            <Route exact path='/Notes/Sem3' component={Sem3} />
            <Route exact path='/Notes/Sem4' component={Sem4} />
            <Route exact path='/Notes/Sem5' component={Sem5} />
            <Route exact path='/Notes/Sem6' component={Sem6} />
            <Route exact path='/Notes/Sem7' component={Sem7} />
            <Route exact path='/Notes/Sem8' component={Sem8} />
            {/* SEMESTER1 */}
            <Route exact path='/Notes/Sem1/Basic_eng' component={S1_BasicEng} />
            <Route exact path='/Notes/Sem1/Biology' component={S1_Biology} />
            <Route exact path='/Notes/Sem1/C' component={S1_C_Language} />
            <Route exact path='/Notes/Sem1/EVS' component={EVS} />
            <Route exact path='/Notes/Sem1/Material_science' component={Material_Science} />
            <Route exact path='/Notes/Sem1/Mathematics' component={Mathematics} />
            <Route exact path='/Notes/Sem1/Workshops' component={Workshops} />
            {/* SEMESTER2 */}
            <Route exact path='/Notes/Sem2/BasicEng-2' component={S2_BasicEng2} />
            <Route exact path='/Notes/Sem2/Chemistry' component={S2_Chemistry} />
            <Route exact path='/Notes/Sem2/Eng-Graphics' component={S2_EngGraphics} />
            <Route exact path='/Notes/Sem2/Java' component={S2_Java} />
            <Route exact path='/Notes/Sem2/Mathematics-2' component={S2_Mathematics} />
            <Route exact path='/Notes/Sem2/PD' component={S2_PD} />
            <Route exact path='/Notes/Sem2/Physics' component={S2_Physics} />
            <Route exact path='/Notes/Sem2/ValueEducation' component={S2_ValueEducation} />
            <Redirect exact to='/'/>
        </Switch>

        </>
    )
}
