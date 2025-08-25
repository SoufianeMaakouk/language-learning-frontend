import React from 'react';

export default function UnitsList({ units, onSelectUnit }) {
  return (
    <div>
      <h2>Units</h2>
      <ul>
        {units.map(unit => (
          <li key={unit.id}>
            <button onClick={() => onSelectUnit(unit)}>{unit.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
