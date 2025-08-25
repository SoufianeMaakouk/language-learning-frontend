import React from 'react';
import CoursesSection from './CoursesSection';
import ExercisesSection from './ExercisesSection';
import './app.css';

function App() {
  return (
    <div className="container">
      <h1>Language Learning App</h1>
      <div className="sections">
        <CoursesSection />
        <ExercisesSection />
      </div>
    </div>
  );
}

export default App;
