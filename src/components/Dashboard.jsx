import React from 'react';
import Note from './Note';
import InputForm from './InputForm';
import ButtonAppBar from "./Navbar";
const Dashboard = () => {
    
    return (
        <div>
            <ButtonAppBar/>
            <InputForm/>
            <Note/>
        </div>
    );
};

export default Dashboard;