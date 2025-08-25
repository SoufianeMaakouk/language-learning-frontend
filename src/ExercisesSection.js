import React from 'react';
import Exercises from './Exercises';

const units = [1,2,3,4,5,6,7];

export default function ExercisesSection({ selectedUnit, onSelectUnit }) {
  return (
    <div className="section">
      <h2>📝 Exercises</h2>
      <div>
        {units.map((unit) => (
          <button
            key={unit}
            onClick={() => onSelectUnit(unit)}
            style={{
              margin: "5px",
              backgroundColor: selectedUnit === unit ? "#4caf50" : "#eee",
            }}
          >
            Unit {unit}
          </button>
        ))}
      </div>

      {/* Render Exercises for selected unit */}
      <Exercises unitId={selectedUnit} />
    </div>
  );
}
