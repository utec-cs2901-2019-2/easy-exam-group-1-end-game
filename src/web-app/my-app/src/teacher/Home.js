import React from "react";
import  TeacherContextProvider from '../context/Teacher';
import Teacher from './Teacher';

export default props => {
    return(
        <div>
            <TeacherContextProvider>
                <Teacher/>
            </TeacherContextProvider>
        </div>
    )
}