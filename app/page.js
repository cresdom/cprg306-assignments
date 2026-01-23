import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>CPRG 306: Web Development 2 - Assignments</header>
      <nav>
        <Link href="week-2">Click me for Week 2</Link>
      </nav>
    </>
  );
}