import React, { createContext, useState } from 'react';

export const QuestionsContext = createContext();

export default props => {
    const [arr, setArr] = useState([]);
    return (
        <QuestionsContext.Provider value = {{arr, setArr}}>
        {props.children}
        </QuestionsContext.Provider>
    )
}