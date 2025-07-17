import Image from "next/image";
import Banner_host from "/public/banner_host.png";
import DomainSearch from "@/components/DomainSearch";
import PricingPlans from "@/components/PricingPlans";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-8 p-6 mt-24 lg:flex-row lg:justify-between lg:px-20 lg:mt-12">
        <div className="flex flex-col items-center text-center gap-4 md:w-[600px] lg:items-start lg:text-start xl:gap-8">
          <h1 className="text-3xl font-semibold capitalize lg:text-4xl xl:text-5xl">
            La meilleur solution d'hébergement
          </h1>
          <p className="text-[rgba(1,120,100,0.41)] leading-8 xl:text-lg">
            WPHost, la meilleur solution d’hébergement au meilleur prix.
            Commence ton essaie gratuit dès maintenant
          </p>
          <a
            href="#"
            className="bg-[#27DEBF] text-white font-semibold uppercase py-3 px-5 rounded-full shadow-2xl transition-all duration-200 hover:px-6 hover:tracking-widest"
          >
            Commencer
          </a>
        </div>
        <Image src={Banner_host} alt="webhost banner" priority={false} />
      </section>
      <section className="p-6 mt-24 lg:px-20 lg:mt-12">
        <DomainSearch />
      </section>
      <section className="mt-24 lg:mt-12">
        <PricingPlans />
      </section>
    </>
  );
}
