import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </header>
      <main>
        <nav>
          <Link href="week-2">Click me for Week 2</Link>
        </nav>
        <nav>
          <Link href="week-3">Click me for Week 3</Link>
        </nav>
      </main>
    </>
  );
}