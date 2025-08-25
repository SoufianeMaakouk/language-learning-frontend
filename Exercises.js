import React, { useEffect, useState } from "react";
import ExerciseRenderer from "./ExerciseRenderer";

export default function Exercises({ unitId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(`https://your-backend.onrender.com/exercises/${unitId}`)
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, [unitId]);

  return (
    <div>
      <h2>Exercises for {unitId}</h2>
      {exercises.length === 0 ? (
        <p>No exercises yet.</p>
      ) : (
        exercises.map((ex) => (
          <ExerciseRenderer key={ex.id} exercise={ex} />
        ))
      )}
    </div>
  );
}
