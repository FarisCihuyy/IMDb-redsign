export default function Tabs({ active, onChange }) {
  const tabs = ["All", "Movies", "TV Shows"];

  return (
    <div className="flex gap-6 text-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-2 transition-all ${
            active === tab
              ? "border-b-2 border-white font-semibold"
              : "text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
