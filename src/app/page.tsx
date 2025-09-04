import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-3xl font-bold">School Management</h1>
      <Link href="/addschool" className="px-4 py-2 bg-blue-500 text-white rounded">
        ➕ Add School
      </Link>
      <Link href="/showschools" className="px-4 py-2 bg-green-500 text-white rounded">
        📋 Show Schools
      </Link>
    </main>
  );
}
