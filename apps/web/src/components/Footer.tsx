import Image from "next/image";
import webhost_logo from "../../public/WPHost_white.png";

export default function Footer() {
  return (
    <footer className="p-12 mt-34 text-center bg-[#27DEBF]">
      <div className="space-y-4 md:flex md:justify-around md:space-y-0">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Image
            className="mb-8 text-lg font-semibold"
            src={webhost_logo}
            alt="webhost logo"
            width={120}
            priority={false}
          />
          <p className="text-[#A8FFF0]">WPHost@mail.fr</p>
          <p className="text-[#A8FFF0]">+000 000-000-00</p>
          <p className="text-[#A8FFF0]">Paris, France</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="mb-8 text-lg font-semibold text-white">Services</h3>
          <p className="text-[#A8FFF0]">Nom de domaine</p>
          <p className="text-[#A8FFF0]">Hébergement</p>
          <p className="text-[#A8FFF0]">Cloud</p>
          <p className="text-[#A8FFF0]">WordPress</p>
        </div>
        <div className="flex flex-col items-center gap-1 md:items-end">
          <h3 className="mb-8 text-lg font-semibold text-white">Liens</h3>
          <p className="text-[#A8FFF0]">À-propos</p>
          <p className="text-[#A8FFF0]">Nous-contactez</p>
          <p className="text-[#A8FFF0]">Plan tarifaire</p>
          <p className="text-[#A8FFF0]">FAQ</p>
        </div>
      </div>
      <p className="mt-10 font-semibold text-sm text-[#A8FFF0]">
        © Copyright 2022, Propulsé par WEBDev
      </p>
    </footer>
  );
}
