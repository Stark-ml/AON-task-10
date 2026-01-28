export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search for a meal..."
        className="w-full max-w-xl px-4 py-3 rounded-lg outline-none shadow"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
    </div>
  );
}
