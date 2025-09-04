"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchSchools() {
      try {
        const res = await fetch("/api/showschools");
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        console.error("Error fetching schools:", err);
      }
    }
    fetchSchools();
  }, []);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">All Schools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div key={school.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{school.name}</h2>
            <p>{school.address}, {school.city}, {school.state}</p>
            <p>📞 {school.contact}</p>
            <p>✉️ {school.email_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
