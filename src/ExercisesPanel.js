import React, { useEffect, useState } from 'react';

const BACKEND_URL = "https://language-learning-backend-419f.onrender.com";

export default function ExercisesPanel({ unitId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/exercises/${unitId}`)
      .then(res => res.json())
      .then(data => {
        // Ensure it's always an array
        setExercises(Array.isArray(data) ? data : data.exercises || []);
      })
      .catch(err => {
        console.error(err);
        setExercises([]);
      });
  }, [unitId]);

  const renderExercise = (ex) => {
    switch (ex.type) {
      case 'multiple_choice':
        return (
          <div key={ex.id} className="exercise-card">
            <p>{ex.instruction}</p>
            {ex.options.map((opt, idx) => (
              <button key={idx}>{opt}</button>
            ))}
          </div>
        );
      case 'fill_in_the_blank':
        return (
          <div key={ex.id} className="exercise-card">
            <p>{ex.instruction}</p>
            {ex.examples.map((txt, idx) => (
              <input key={idx} placeholder={txt} />
            ))}
          </div>
        );
      default:
        return <p key={ex.id}>{ex.instruction} (type: {ex.type})</p>;
    }
  };

  const exercisesArray = Array.isArray(exercises) ? exercises : [];

  return (
    <div>
      <h3>Exercises for Unit {unitId}</h3>
      {exercisesArray.length === 0 ? (
        <p>No exercises yet.</p>
      ) : (
        exercisesArray.map(renderExercise)
      )}
    </div>
  );
}
