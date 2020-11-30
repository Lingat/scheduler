import React from 'react';
import Tutorial from './Tutorial';

export default function TutorialList({tutorials, refreshTutorials }) {
    return (
        <div>
            <div className="list-group">
                {tutorials
                    .filter((tutorial) => tutorial.tutor !== "none")
                    .map((tutorial) => (
                        <Tutorial
                            tutorial={tutorial}
                            key={tutorial.id}
                            refreshTutorials={refreshTutorials}
                        />
                    ))} 
            </div>
          
        </div>
    );
}
