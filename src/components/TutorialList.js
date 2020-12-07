import React, {useState} from 'react';
import Tutorial from './Tutorial';

export default function TutorialList({tutorials, refreshTutorials }) {
    const [searchedValue, setSearchedValue] = useState('');

    const onSearch = (event) => {
       setSearchedValue(event.target.value);
    }
    
    return (
        <div>

            <div className="list-group">
            <input className="search-bar" onChange={onSearch} value={searchedValue} placeholder="Search for class here"></input>
                {tutorials
                    .filter((tutorial) => (tutorial.name ? tutorial.name.includes(searchedValue) : false ) && tutorial.tutor !== "none")
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
