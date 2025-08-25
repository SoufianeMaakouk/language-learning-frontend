import React from 'react';

const units = [
  { id: 1, title: "Unit 1", pdf: "/pdfs/unit1.pdf" },
  { id: 2, title: "Unit 2", pdf: "/pdfs/unit2.pdf" },
  { id: 3, title: "Unit 3", pdf: "/pdfs/unit3.pdf" },
  { id: 4, title: "Unit 4", pdf: "/pdfs/unit4.pdf" },
  { id: 5, title: "Unit 5", pdf: "/pdfs/unit5.pdf" },
  { id: 6, title: "Unit 6", pdf: "/pdfs/unit6.pdf" },
  { id: 7, title: "Unit 7", pdf: "/pdfs/unit7.pdf" }
];

export default function CoursesSection() {
  return (
    <div className="section">
      <h2>📘 Courses</h2>
      <ul>
        {units.map(unit => (
          <li key={unit.id}>
            <a href={unit.pdf} target="_blank" rel="noopener noreferrer">
              {unit.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
