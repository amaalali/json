import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-16 my-8">
      <div className="flex flex-row justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Tools for validating, checking and formatting JSON</h1>
      </div>

      <div className="my-8">
        <p className="text-xl">Tools available</p>
        <ul className="my-4 mx-4">
          <li>
            <Link className="transition-colors hover:text-foreground text-foreground/80" href="/validate" >
              Validate JSON
            </Link>
          </li>
          <li className="mt-4">
            <Link className="transition-colors text-foreground/80 hover:text-foreground/50" href="#">
              Format JSON
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
