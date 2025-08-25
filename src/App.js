import React, { useState, useEffect } from 'react';
import UnitsList from './UnitsList';
import ExercisesPanel from './ExercisesPanel';

function App() {
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/units')
      .then(res => res.json())
      .then(data => setUnits(data));
  }, []);

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ width: '30%', marginRight: '20px' }}>
        <UnitsList units={units} onSelectUnit={setSelectedUnit} />
      </div>
      <div style={{ width: '70%' }}>
        {selectedUnit ? (
          <ExercisesPanel unitId={selectedUnit.id} />
        ) : (
          <p>Wählen Sie eine Einheit, um zu beginnen.</p>
        )}
      </div>
    </div>
  );
}

export default App;
