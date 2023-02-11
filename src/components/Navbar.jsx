export default function Navbar() {
  const links = [
    { label: "Acerca de mi" },
    { label: "Portfolio" },
    { label: "Contacto" },
  ];

  const renderedLinks = links.map((link) => (
    <li key={link.label}>
      <a className="cursor-pointer hover:underline">{link.label}</a>
    </li>
  ));

  return (
    <header className="bg-cyan-700 text-white p-4">
      <div className="flex justify-between items-center flex-col gap-2 mx-auto max-w-3xl sm:flex-row">
        <h2 className="font-semibold text-3xl">Lucas Venutti</h2>
        <nav>
          <ul className="flex gap-4">{renderedLinks}</ul>
        </nav>
      </div>
    </header>
  );
}
