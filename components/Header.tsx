import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">
          Brayden Wayman
        </h1>

        <NavLinks />
      </div>
    </header>
  );
}