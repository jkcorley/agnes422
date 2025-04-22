"use client";
import { useState } from "react";

export default function Filter({ onFilter }: { onFilter: (value: string) => void }) {
  const [keyword, setKeyword] = useState("");
  const apply = () => onFilter(keyword);
  return (
    <div className="mb-4">
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Filter products..."
        className="px-2 py-1 border rounded mr-2"
      />
      <button onClick={apply} className="px-3 py-1 bg-blue-600 text-white rounded">
        Apply
      </button>
    </div>
  );
}
