import Container from "./Container";

export default function Navbar({ links }) {
  const renderedLinks = links.map((link) => (
    <li
      key={link.label}
      className="cursor-pointer hover:underline"
      onClick={link.onClick}
    >
      {link.label}
    </li>
  ));

  return (
    <header className="bg-cyan-700 text-white p-4">
      <Container className="flex justify-between items-center flex-col gap-2 sm:flex-row">
        <h2 className="font-semibold text-3xl">Lucas Venutti</h2>
        <nav>
          <ul className="flex gap-4">{renderedLinks}</ul>
        </nav>
      </Container>
    </header>
  );
}
