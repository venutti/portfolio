import { GrGithub } from "react-icons/gr";

export default function ProjectList({ pages }) {
  const renderedPages = pages.map((page) => (
    <a href={page.link} target="_blank" className="hover:scale-105">
      <div
        key={page.title}
        className="max-w-xs rounded overflow-hidden shadow-lg"
      >
        <img
          className="w-full border-gray-500 border-b-2"
          src={page.img}
          alt={page.title}
        />
        <div className="px-6 py-4 bg-white text-gray-700">
          <h4 className="text-black font-bold text-xl mb-2">{page.title}</h4>
          <p>{page.description}</p>
          <div className="flex items-center justify-end gap-4">
            <a
              className="text-2xl hover:animate-spin"
              href={page.ghLink}
              target="_blank"
            >
              <GrGithub />
            </a>
          </div>
        </div>
      </div>
    </a>
  ));

  return (
    <div className="flex gap-4 flex-wrap justify-center items-start">
      {renderedPages}
    </div>
  );
}
