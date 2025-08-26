import React, { useEffect, useState } from 'react';
import { fetchExercises } from './api';

export default function ExercisesPanel({ unitId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (!unitId) return;

    fetchExercises(unitId)
      .then(data => {
        // Ensure we always get an array
        if (Array.isArray(data)) setExercises(data);
        else if (data.exercises && Array.isArray(data.exercises)) setExercises(data.exercises);
        else setExercises([]);
      })
      .catch(err => {
        console.error('Failed to fetch exercises:', err);
        setExercises([]);
      });
  }, [unitId]);

  const renderExercise = ex => {
    switch (ex.type) {
      case 'multiple_choice':
        return (
          <div key={ex.id} className="exercise-card">
            <p>{ex.instruction}</p>
            {ex.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => alert(opt === ex.answer ? '✅ Correct!' : '❌ Wrong!')}
              >
                {opt}
              </button>
            ))}
          </div>
        );
      case 'fill_in_the_blank':
        return (
          <div key={ex.id} className="exercise-card">
            <p>{ex.instruction}</p>
            {ex.examples.map((txt, idx) => (
              <input
                key={idx}
                placeholder={txt}
                onBlur={e =>
                  alert(e.target.value === ex.answer[idx] ? '✅ Correct!' : `❌ Wrong! Correct: ${ex.answer[idx]}`)
                }
              />
            ))}
          </div>
        );
      default:
        return <p key={ex.id}>{ex.instruction} (type: {ex.type})</p>;
    }
  };

  if (!exercises || exercises.length === 0) return <p>No exercises yet.</p>;

  return <div>{exercises.map(renderExercise)}</div>;
}
