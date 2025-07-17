export default function PricingPlans() {
  const plans = [
    {
      title: "STARTER",
      price: "8,49€",
      per: "/mois",
      features: [
        "1 Site Web",
        "50 Go de stockage SSD",
        "1 Compte Email",
        "100 Go Bande passante",
        "2 Bases de données",
        "SSL gratuit",
        "DNS protégé par Cloudflare",
        "Sauvegardes hebdomadaires",
        "1 compte FTP",
        "Assistance 7j/7",
        "Garantie de remboursement pendant 30 jours",
      ],
      highlight: false,
    },
    {
      title: "PREMIUM",
      price: "15,99€",
      per: "/mois",
      features: [
        "100 Sites web",
        "100 Go de stockage SSD",
        "Email illimité",
        "Bande passante illimitée",
        "Bases de données illimitées",
        "SSL gratuit",
        "DNS protégé par Cloudflare",
        "Sauvegardes hebdomadaires",
        "Comptes FTP illimités",
        "Assistance 7j/7",
        "Garantie de remboursement pendant 30 jours",
      ],
      highlight: true,
    },
    {
      title: "PRO",
      price: "20,99€",
      per: "/mois",
      features: [
        "100 Sites web",
        "200 Go de stockage SSD",
        "Email illimité",
        "Bande passante illimitée",
        "Bases de données illimitées",
        "SSL gratuit",
        "DNS protégé par Cloudflare",
        "Sauvegardes hebdomadaires",
        "Comptes FTP illimités",
        "Assistance 7j/7",
        "Garantie de remboursement pendant 30 jours",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="px-4 py-10">
      <h2 className="mb-10 text-xl font-semibold text-center sm:text-2xl">
        Choisissez un plan pour votre site web
      </h2>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`w-full max-w-sm p-6 rounded-3xl text-center shadow-xl ${
              plan.highlight
                ? "bg-[#27DEBF] text-white"
                : "bg-white text-[#121212]"
            }`}
          >
            <h3 className="mb-2 text-lg font-bold">{plan.title}</h3>
            <p className="text-3xl font-semibold">
              {plan.price}
              <span className="text-base font-normal">{plan.per}</span>
            </p>
            <p className="my-3 text-sm opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="mt-6 mb-8 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-full font-semibold transition ${
                plan.highlight
                  ? "bg-white text-[#27DEBF] hover:bg-[#f0f0f0]"
                  : "bg-[#27DEBF] text-white hover:bg-[#27dec0d5]"
              }`}
            >
              Commander
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
