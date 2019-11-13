import React, { createContext, useState } from 'react';

export const QuestionsContext = createContext();

export default props => {
    const [arr, setArr] = useState([]);
    const [num, setNum] = useState(0);
    return (
        <QuestionsContext.Provider value = {{arr, setArr, num, setNum}}>
        {props.children}
        </QuestionsContext.Provider>
    )
}