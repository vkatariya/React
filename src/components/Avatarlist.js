import React, {Component} from 'react'

const Avatarlist= (props) => {
    return(
        <div className="avatar ma4 pa5 bg-light-purple dib grow shadow-4">
   
        <img className="" src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
       <h1 className="tc">{props.name}</h1>
       <p className="tc">{props.work}</p>
       </div>
    );
}
export default Avatarlist;