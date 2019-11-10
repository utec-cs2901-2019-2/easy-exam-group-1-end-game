import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

export default props => {
    return(
        <div><Link to="student/challenge">Go Challenge</Link></div>
    )
}