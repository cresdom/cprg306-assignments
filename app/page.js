import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-t from-purple-400 to-fuchsia-100">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-purple-900">CPRG 306: Web Development 2</h1>
        <p>Assignments - Crescia D.</p>
      </header>

      <main className="space-y-4">
        <div className="bg-white px-6 py-4 rounded shadow">
          <Link href="week-2" className="text-purple-600 font-light hover:underline">Week 2 Assignment</Link>
        </div>

        <div className="bg-white px-6 py-4 rounded shadow">
          <Link href="week-3" className="text-purple-600 font-light hover:underline">Week 3 Assignment</Link>
        </div>
      </main>
    </div>

  );
}
