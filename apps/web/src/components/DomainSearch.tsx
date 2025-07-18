import options from "../json/options.json";

export default function DomainSearch() {
  return (
    <div
      className="bg-[#27DEBF] text-white p-6 sm:p-8 rounded-3xl text-center"
      id="domain"
    >
      <h2 className="mb-6 text-xl font-medium md:text-2xl">
        Réserver, enregistrer un nom de domaine :
      </h2>

      <div className="flex flex-col flex-wrap items-center justify-center w-full max-w-2xl gap-3 px-4 py-3 mx-auto mb-6 bg-white shadow-md rounded-2xl sm:rounded-full sm:flex-row">
        <input
          type="text"
          placeholder="Entrez votre nom de domaine"
          className="w-full px-4 py-2 text-base text-gray-400 bg-transparent outline-none sm:flex-1"
        />

        <div className="flex items-center justify-center w-full gap-1 pt-2 border-t sm:border-t-0 sm:border-l sm:w-auto sm:pt-0 sm:pl-4">
          <span className="text-[#27DEBF] font-semibold text-base">.net</span>
          <svg
            className="w-4 h-4 text-[#27DEBF]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <button className="w-full sm:w-auto bg-[#27DEBF] hover:bg-[#27dec0b9] cursor-pointer text-white font-semibold rounded-full px-5 py-2 transition">
          Rechercher
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
        {options.map((item, index, arr) => (
          <div key={item.ext} className="flex items-center gap-4">
            <div className="text-center">
              <span className="font-semibold">{item.ext}</span> <br />
              {item.price}
            </div>
            {index < arr.length - 1 && (
              <div className="self-center hidden h-6 border-l border-white sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
