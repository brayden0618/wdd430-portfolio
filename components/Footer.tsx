export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-12">
      <div className="text-center">
        <p>
          © {new Date().getFullYear()} Brayden Wayman | Software Development
          Portfolio
        </p>
      </div>
    </footer>
  );
}