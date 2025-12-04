export default function Tabs({ active, onChange }) {
  const tabs = ["All", "Movies", "TV Shows"];

  return (
    <div className="flex gap-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab.toLowerCase())}
          className={`pb-1 transition-colors cursor-pointer select-none ${
            active === tab.toLowerCase()
              ? "border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
