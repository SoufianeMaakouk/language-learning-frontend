import React from 'react';
import ExercisesPanel from './ExercisesPanel';

const units = [1, 2, 3, 4, 5, 6, 7];

export default function ExercisesSection({ selectedUnit, onSelectUnit }) {
  return (
    <div className="section">
      <h2>📝 Exercises</h2>
      <div className="unit-buttons">
        {units.map(unit => (
          <button
            key={unit}
            onClick={() => onSelectUnit(unit)}
            className={selectedUnit === unit ? 'active-btn' : ''}
          >
            Unit {unit}
          </button>
        ))}
      </div>

      {/* Render Exercises for selected unit */}
      <ExercisesPanel unitId={selectedUnit} />
    </div>
  );
}
