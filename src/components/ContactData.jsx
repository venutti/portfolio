export default function ContactData({ data }) {
  const renderedContactData = data.map((item) => (
    <a
      key={item.link}
      href={item.link}
      className="text-4xl text-cyan-900 hover:scale-110"
      target="_blank"
    >
      {item.icon}
    </a>
  ));

  return renderedContactData;
}
