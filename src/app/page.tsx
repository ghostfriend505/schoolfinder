import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-gradient-to-b from-indigo-400 to-blue-200 p-6">
      {/* Banner Image */}
      <div className="w-full max-w-4xl flex justify-center">
        <Image
          src="/hero.jpg"    // Your JPG image placed in public/banner.jpg
          alt="School Finder Banner"
          width={800}          // Adjust width and height as needed
          height={400}
          priority
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900">
        School Management System
      </h1>

      {/* Navigation Buttons */}
      <div className="space-x-4">
        <Link
          href="/addschool"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ➕ Add School
        </Link>
        <Link
          href="/showschools"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          📋 Show Schools
        </Link>
      </div>
    </main>
  );
}
