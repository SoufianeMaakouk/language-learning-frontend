import React, { useState, useEffect } from "react";

function Exercises({ unitId }) {
  const [exercises, setExercises] = useState([]);
  const [userAnswers, setUserAnswers] = useState({}); // track user input

  useEffect(() => {
    if (!unitId) return;

    fetch(`https://language-learning-backend-419f.onrender.com/exercises/unit${unitId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched exercises:", data);
        setExercises(data);
        setUserAnswers({});
      })
      .catch((err) => console.error("Error fetching exercises:", err));
  }, [unitId]);

  const handleMCQ = (exId, selectedOption, answer) => {
    setUserAnswers((prev) => ({ ...prev, [exId]: selectedOption }));
    alert(selectedOption === answer ? "✅ Correct!" : `❌ Wrong! Correct answer: ${answer}`);
  };

  const handleFill = (exId, value, answer) => {
    setUserAnswers((prev) => ({ ...prev, [exId]: value }));
    if (value.trim() !== "") {
      alert(value.trim() === answer ? "✅ Correct!" : `❌ Wrong! Correct answer: ${answer}`);
    }
  };

  const handleMatching = (exId, userItems, correctItems) => {
    const isCorrect = JSON.stringify(userItems) === JSON.stringify(correctItems);
    alert(isCorrect ? "✅ Correct!" : `❌ Wrong! Correct order: ${correctItems.join(", ")}`);
  };

  return (
    <div>
      <h2>Exercises for Unit {unitId}</h2>
      {exercises && exercises.length > 0 ? (
        exercises.map((ex) => (
          <div key={ex.id} style={{ marginBottom: "25px", padding: "10px", border: "1px solid #ccc" }}>
            <p><strong>{ex.instruction}</strong></p>

            {/* Multiple Choice */}
            {ex.type === "multiple_choice" && (
              <ul>
                {ex.options.map((opt, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleMCQ(ex.id, opt, ex.answer)}
                      style={{
                        backgroundColor: userAnswers[ex.id] === opt ? "#4caf50" : "#eee",
                        margin: "5px",
                        padding: "5px 10px",
                      }}
                    >
                      {opt}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Fill in the Blank */}
            {ex.type === "fill_in_the_blank" && (
              <div>
                {ex.examples.map((txt, idx) => (
                  <div key={idx}>
                    <input
                      type="text"
                      placeholder={txt}
                      value={userAnswers[ex.id] || ""}
                      onChange={(e) => setUserAnswers((prev) => ({ ...prev, [ex.id]: e.target.value }))}
                      onBlur={(e) => handleFill(ex.id, e.target.value, ex.answer)}
                      style={{ padding: "5px", width: "100%" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Matching */}
            {ex.type === "matching" && (
              <div>
                <ul>
                  {ex.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button onClick={() => handleMatching(ex.id, ex.items, ex.answer)}>
                  Check Matching
                </button>
              </div>
            )}

            {/* Repeat */}
            {ex.type === "repeat" && (
              <ul>
                {ex.phrases.map((phrase, i) => (
                  <li key={i}>{phrase}</li>
                ))}
              </ul>
            )}

            {/* Dialogue */}
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
