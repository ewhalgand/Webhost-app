import Image from "next/image";
import Banner_host from "/public/banner_host.png";

export default function Home() {
  return (
    <section className="mt-24 p-6">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="font-semibold capitalize text-3xl">
          La meilleur solution d'hébergement
        </h1>
        <p className="">
          WPHost, la meilleur solution d’hébergement au meilleur prix. Commence
          ton essaie gratuit dès maintenant
        </p>
        <a href="#">Commencer</a>
      </div>
      <Image src={Banner_host} alt="webhost banner" />
    </section>
  );
}
