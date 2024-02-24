import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {NewWrapper} from "./components/pages/_styles";
import {Model} from "./components/pages/Model";



const PATH ={
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    // PAGE4: '/Model',
    ERORR: '/error404',
} as const


function App() {

    return (

        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NewWrapper><NavLink to={PATH.PAGE1} >ADIDAS</NavLink></NewWrapper>
                    <NewWrapper><NavLink to={PATH.PAGE2} >PUMA</NavLink></NewWrapper>
                    <NewWrapper><NavLink to={PATH.PAGE3} >ABIBAS</NavLink></NewWrapper>


                </div>
                <div className={styles.content}>
                    <span>Hello</span>
                    <Routes>
                        < Route path="/" element={<Navigate to={'/page1'}/>}/>

                        < Route path={PATH.PAGE1} element={<Adidas/>} />
                        < Route path={PATH.PAGE2} element={<Puma/>} />
                        < Route path={PATH.PAGE3} element={<Abibas/>} />
                        < Route path={'/adidas/:id'} element={<Model/>} />

                        {/*< Route path={PATH.ERORR} element={<Error404/>} />*/}

                        {/*< Route path="/*" element={<Navigate to={PATH.ERORR}/>} />*/}
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;


