import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // e.g., "localhost"
  user: process.env.DB_USER,      // your MySQL username
  password: process.env.DB_PASS,  // your MySQL password
  database: process.env.DB_NAME,  // "schoolmanagement"
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, address, city, state, contact, email_id, image } = body;

    // Validate required fields
    if (!name || !email_id) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 }
      );
    }

    // Insert into DB (correct column order)
    const [result] = await pool.query(
      "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, image, email_id]
    );

    return NextResponse.json({
      message: "School added successfully!",
      id: result.insertId,
    });
  } catch (err) {
  console.error("🔥 DB Error:", err); // full error object
  return NextResponse.json(
    { error: "Database error", details: err.message },
    { status: 500 }
  );
}
}
