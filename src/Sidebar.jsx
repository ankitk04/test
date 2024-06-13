import React from "react";
import propTypes from 'prop-types';

// const Sidebar = ()=>{
//     return <h1>Sidebar is working fine.</h1>
//     <div>
//         hello {user} Your name is
//     </div>
// }
// export default Sidebar;


export default function Sidebar(props) {
    return (
        <h1>Hey {props.user} your id is{props.id}</h1>
    )
}

Sidebar.propTypes = {
    user: propTypes.string.isRequired,
    id: propTypes.number,
}

