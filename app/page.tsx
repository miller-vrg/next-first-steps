import Link from "next/link";

export const metadata = {
  title : "Project 1",
  description:"Project 1 description",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="text-5xl">
        Hola mundo
      </span>
      <Link href="/about">About page</Link>
    </main>
  );
}
