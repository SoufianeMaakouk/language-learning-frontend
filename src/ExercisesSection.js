import React, { useState } from 'react';
import ExercisesPanel from './ExercisesPanel';

const units = [
  { id: 1, title: "Unit 1" },
  { id: 2, title: "Unit 2" },
  { id: 3, title: "Unit 3" },
  { id: 4, title: "Unit 4" },
  { id: 5, title: "Unit 5" },
  { id: 6, title: "Unit 6" },
  { id: 7, title: "Unit 7" }
];

export default function ExercisesSection() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <div className="section">
      <h2>📝 Exercises</h2>
      <ul>
        {units.map(unit => (
          <li key={unit.id}>
            <button onClick={() => setSelectedUnit(unit)}>{unit.title}</button>
          </li>
        ))}
      </ul>

      {selectedUnit && <ExercisesPanel unitId={selectedUnit.id} />}
    </div>
  );
}
