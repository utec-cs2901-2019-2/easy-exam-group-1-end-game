import React, {createContext, useState} from 'react';

export const TeacherContext = createContext();

export default props => {
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [disable, setDisable] = useState(true)
    const [info, setInfo] = useState({name:'',last:'',univ:'',exam:''})

    return (
        <TeacherContext.Provider value = {{
                                         tags, setTags,
                                         count, setCount,
                                         questions, setQuestions,
                                         disable, setDisable,
                                         info, setInfo
                                         }}>
            {props.children}
        </TeacherContext.Provider>
    )
}