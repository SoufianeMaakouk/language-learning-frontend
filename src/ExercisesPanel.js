import React, { useEffect, useState } from 'react';
import { fetchExercises } from './api';

export default function ExercisesPanel({ unitId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (!unitId) return;
    fetchExercises(unitId).then(data => setExercises(data));
  }, [unitId]);

  const renderExercise = (ex) => {
    switch (ex.type) {
      case 'multiple_choice':
        return (
          <div key={ex.id} className="exercise">
            <p>{ex.instruction}</p>
            {ex.options.map((opt, idx) => (
              <button key={idx}>{opt}</button>
            ))}
          </div>
        );
      case 'fill_in_the_blank':
        return (
          <div key={ex.id} className="exercise">
            <p>{ex.instruction}</p>
            {ex.examples?.map((txt, idx) => (
              <input key={idx} placeholder={txt} />
            ))}
          </div>
        );
      default:
        return (
          <div key={ex.id} className="exercise">
            <p>{ex.instruction} (type: {ex.type})</p>
          </div>
        );
    }
  };

  if (!unitId) return <p>Select a unit to see exercises.</p>;

  return (
    <div className="exercises-panel">
      <h3>Exercises for Unit {unitId}</h3>
      {exercises.length === 0 ? <p>No exercises yet.</p> : exercises.map(renderExercise)}
    </div>
  );
}
