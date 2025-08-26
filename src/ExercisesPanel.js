import React, { useEffect, useState } from 'react';

const BACKEND_URL = "https://your-backend.onrender.com"; // 👈 replace with Render backend URL

export default function ExercisesPanel({ unitId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/exercises/${unitId}`)
      .then(res => res.json())
      .then(data => setExercises(data));
  }, [unitId]);

  const renderExercise = (ex) => {
    switch (ex.type) {
      case 'multiple_choice':
        return (
          <div key={ex.id}>
            <p>{ex.instruction}</p>
            {ex.options.map((opt, idx) => (
              <button key={idx}>{opt}</button>
            ))}
          </div>
        );
      case 'repeat':
        return (
          <div key={ex.id}>
            <p>{ex.instruction}</p>
            {ex.phrases.map((phrase, idx) => (
              <button key={idx}>{phrase}</button>
            ))}
          </div>
        );
      case 'fill_in_the_blank':
        return (
          <div key={ex.id}>
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

  return (
    <div>
      <h3>Exercises for Unit {unitId}</h3>
      {exercises.length === 0 ? <p>No exercises yet.</p> : exercises.map(renderExercise)}
    </div>
  );
}
