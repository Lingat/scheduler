import React from 'react';
import '../index.css';
export default function  Tutorial({ tutorial, refreshTutorials }) {
   
    return (
        <div className="list-group-item">
            <h4 className="list-group-item-heading">{tutorial.name}</h4> 
            <ul>
                <li>Taught by {tutorial.tutor}</li>
                <li>Times: {tutorial.time} </li>
                {tutorial.capacity < tutorial.maxCapacity ? (
                <li>Capacity: {tutorial.capacity}/{tutorial.maxCapacity}</li>
                ) :
                (
                <li>Capacity: <b className = "full">FULL</b></li>
                    )
                }
            </ul>
 
        </div>
    );
}
