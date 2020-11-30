import React, { useEffect, useState } from 'react';
import './App.css';
import TutorialList from './components/TutorialList';


function App() {
    const [tutorials, setTutorials] = useState([]);

    const loadTutorials = async () => {
        //TODO:load the courses
        try {
            const res = await fetch('/.netlify/functions/tutorials');
            const tutorials = await res.json();
            console.log(tutorials);
            setTutorials(tutorials);
        }
        catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadTutorials();
    }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Tutorials</h1>
      <TutorialList tutorials={tutorials} refreshTutorials={loadTutorials} />
    </div>
  );
}

export default App;
