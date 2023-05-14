import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;