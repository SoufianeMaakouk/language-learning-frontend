import React, { useState, useEffect } from "react";

function Exercises({ unitId }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (!unitId) return;

    // Fetch from your Render backend
    fetch(`https://language-learning-backend-419f.onrender.com/exercises/unit${unitId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched exercises:", data); // Debugging
        setExercises(data);
      })
      .catch((err) => console.error("Error fetching exercises:", err));
  }, [unitId]);

  return (
    <div>
      <h2>Exercises for Unit {unitId}</h2>
      {exercises && exercises.length > 0 ? (
        exercises.map((ex) => (
          <div key={ex.id} style={{ marginBottom: "20px" }}>
            <p><strong>{ex.instruction}</strong></p>

            {ex.type === "multiple_choice" && (
              <ul>
                {ex.options.map((opt, i) => (
                  <li key={i}>
                    <button>{opt}</button>
                  </li>
                ))}
              </ul>
            )}

            {ex.type === "fill_in_the_blank" && (
              <input type="text" placeholder="Type your answer..." />
            )}

            {ex.type === "matching" && (
              <ul>
                {ex.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {ex.type === "repeat" && (
              <ul>
                {ex.phrases.map((phrase, i) => (
                  <li key={i}>{phrase}</li>
                ))}
              </ul>
            )}

            {ex.type === "dialogue" && (
              <div>
                {ex.example.map((line, i) => (
                  <p key={i}><strong>{line.speaker}:</strong> {line.text}</p>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No exercises yet.</p>
      )}
    </div>
  );
}

export default Exercises;
