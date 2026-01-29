export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search meals e.g. Pizza, Chicken..."
        className="w-full max-w-xl px-4 py-3 rounded-lg outline-none text-gray-400 border-1 border-solid border-blue-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
    </div>
  );
}
