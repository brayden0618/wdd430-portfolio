import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">Brayden Wayman</h1>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}