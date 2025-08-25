import React, { useEffect, useState } from 'react';

export default function ExercisesPanel({ unitId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(`https://language-learning-backend-419f.onrender.com/exercises/${unitId}`)
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
            {ex.examples.map((exText, idx) => (
              <input key={idx} placeholder={exText} />
            ))}
          </div>
        );
      case 'matching':
        return (
          <div key={ex.id}>
            <p>{ex.instruction}</p>
            <ul>
              {ex.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        );
      case 'dialogue':
        return (
          <div key={ex.id}>
            <p>{ex.instruction}</p>
            {ex.example.map((line, idx) => (
              <p key={idx}><strong>{line.speaker}:</strong> {line.text}</p>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Exercises for Unit {unitId}</h2>
      {exercises.map(renderExercise)}
    </div>
  );
}
