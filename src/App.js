import React, { useState } from 'react';
import CoursesSection from './CoursesSection';
import ExercisesSection from './ExercisesSection';
import './app.css';

function App() {
  const [selectedUnit, setSelectedUnit] = useState(1); // default unit 1

  return (
    <div className="container">
      <h1>Language Learning App</h1>
      <div className="sections">
        <CoursesSection />
        <ExercisesSection
          selectedUnit={selectedUnit}
          onSelectUnit={setSelectedUnit}
        />
      </div>
    </div>
  );
}

export default App;
