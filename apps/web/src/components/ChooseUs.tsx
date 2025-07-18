import features from "../json/features.json";

export default function ChooseUs() {
  return (
    <div className="px-4 py-10">
      <h2 className="mb-10 text-xl font-semibold text-center lg:mb-28 sm:text-2xl">
        Pourquoi choisir <span className="text-primary">WPHost</span>
      </h2>

      <div className="grid justify-center max-w-6xl gap-8 mx-auto sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-none">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 text-center bg-white border border-gray-200 shadow-sm rounded-2xl ${
              index === 1
                ? "sm:row-span-2 lg:row-span-1 flex flex-col justify-center"
                : ""
            }`}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-[#c0f4ec] p-3 rounded-xl inline-block">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6"
                />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
