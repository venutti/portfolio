import profileImage from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <main className="bg-gray-200 bg-image grow">
      <div className="h-full backdrop-brightness-50 grid place-content-center place-items-center text-center text-white font-mono">
        <img
          className="w-40 h-40 mb-10 rounded-full"
          src={profileImage}
          alt="Imagen de perfil"
        />
        <h1 className="text-4xl">LUCAS VENUTTI</h1>
        <h3>Desarrollador frontend de páginas web</h3>
      </div>
    </main>
  );
}
