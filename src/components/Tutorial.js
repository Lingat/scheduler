import React from 'react';

export default function  Tutorial({ tutorial, refreshTutorials }) {
   
    return (
        <div className="list-group-item">
            <h4 className="list-group-item-heading">{tutorial.name}</h4> 
            <ul>
                <li>Taught by {tutorial.tutor}</li>
                <li>Times: {tutorial.time} </li>
                <li>Capacity: {tutorial.capacity}/{tutorial.maxCapacity}</li>
            </ul>
 
        </div>
    );
}
