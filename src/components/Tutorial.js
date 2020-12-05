import React from 'react';
import '../index.css';

export default function  Tutorial({ tutorial, refreshTutorials }) {

    const registerTutorial = async () => {
        try {
            console.log(tutorial.capacity);
            await fetch("/.netlify/functions/register", {
                method: "PUT", 
                body: JSON.stringify({ id: tutorial.id, capacity: tutorial.capacity}),
            });
            console.log(tutorial.capacity);
          console.log(tutorial.id);
            refreshTutorials();
        } catch(err) {
            console.log(err);
        }
    };
   
    return (
        <div className="list-group-item">
            <h4 className="list-group-item-heading">{tutorial.name}</h4> 
            <ul>
                <li>Taught by {tutorial.tutor}</li>
                <li>Times: {tutorial.time} </li>
                {tutorial.capacity < tutorial.maxCapacity ? ([
                <li>Capacity: {tutorial.capacity}/{tutorial.maxCapacity}</li>,
                <button  className="btn btn-sm btn-primary" onClick={registerTutorial}> Register</button>
                ]
                ) :
                (
                <li>Capacity: <b className = "full" >FULL</b></li>
                    )
                }
            </ul>
 
        </div>
    );
}
