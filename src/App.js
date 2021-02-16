import React, { useEffect, useState } from 'react';
import './App.css';
import TutorialList from './components/TutorialList';


function App() {
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true)



    const loadTutorials = async () => {
        setTimeout(() => setLoading(false), 6000)
        //TODO:load the courses
        // some comment
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
      <>
      {tutorials && tutorials.length ? (
      <div className="container mt-5">
      <h1 className="mb-5 text-center">Tutorials</h1>
      <TutorialList tutorials={tutorials} refreshTutorials={loadTutorials} />
      </div>
        ) : (
          <div className="container mt-5">
          <h1 className="mb-5 text-center">Loading</h1>
          </div>
        )}
        </>
    ); 
}

export default App;
