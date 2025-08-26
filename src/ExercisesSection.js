import React from "react";
import ExercisesPanel from "./ExercisesPanel";

const units = [1, 2, 3, 4, 5, 6, 7];

export default function ExercisesSection({ selectedUnit, onSelectUnit }) {
  return (
    <div className="section" style={{ padding: 16 }}>
      <h2 style={{ color: "#1e3a8a" }}>📝 Exercises</h2>

      <div style={{ marginBottom: 16 }}>
        {units.map((unit) => (
          <button
            key={unit}
            onClick={() => onSelectUnit(unit)}
            style={{
              margin: "4px",
              padding: "8px 16px",
              borderRadius: 8,
              border: "none",
              color: "#fff",
              backgroundColor: selectedUnit === unit ? "#4caf50" : "#007bff",
              cursor: "pointer",
              transition: "0.2s",
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
