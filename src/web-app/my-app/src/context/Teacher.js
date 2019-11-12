import React, {createContext, useState} from 'react';

export const TeacherContext = createContext();

export default props => {
    const [count, setNumberQuestions] = useState(0);
    const [tags, setTags] = useState([]);
    const [questions, setQuestions] = useState([]);
    return (
        <TeacherContext.Provider value = {{
                                         tags, setTags,
                                         count, setNumberQuestions,
                                         questions, setQuestions
                                         }}>
            {props.children}
        </TeacherContext.Provider>
    )
}