const BACKEND_URL = "https://language-learning-backend-8sqf.onrender.com";

export async function fetchExercises(unitId) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/exercises/${unitId}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : []; // ensure array
  } catch (err) {
    console.error("Failed to fetch exercises:", err);
    return [];
  }
}
