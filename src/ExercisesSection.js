import React, { useState } from 'react';
import ExercisesPanel from './ExercisesPanel';

const units = [1,2,3,4,5,6,7];

export default function ExercisesSection() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <div className="section">
      <h2>📝 Exercises</h2>
      <div className="unit-buttons">
        {units.map((unit) => (
          <button
            key={unit}
            onClick={() => setSelectedUnit(unit)}
            style={{
              margin: "5px",
              backgroundColor: selectedUnit === unit ? "#4caf50" : "#eee",
            }}
          >
            Unit {unit}
          </button>
        ))}
      </div>

      <ExercisesPanel unitId={selectedUnit} />
    </div>
  );
}
