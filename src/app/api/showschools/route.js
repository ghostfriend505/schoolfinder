import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM schools");
    return NextResponse.json(rows);
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}


