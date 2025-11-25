"use client";
import { useState } from "react";
import { Bookmark } from "@/types/bookmark";

export default function BookmarkForm({ onAdd }: { onAdd: (b: Bookmark) => void }) {
  const [form, setForm] = useState({ name: "", url: "" });

  const handleSubmit = () => {
    if (!form.name || !form.url) return alert("Please enter both name and valid URL");
    onAdd(form);
    setForm({ name: "", url: "" });
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {["name", "url"].map((field) => (
        <input
          key={field}
          type={field === "url" ? "url" : "text"}
          value={form[field as keyof typeof form]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          placeholder={`Enter Bookmark ${field === "name" ? "Name" : "URL"}`}
          className="w-full sm:w-4/5 p-2 rounded-lg border border-gray-400 bg-black/20 font-medium"
        />
      ))}
      <button
        onClick={handleSubmit}
        className="w-full font-bold sm:w-[150px] px-6 py-2 rounded-lg bg-green-900 text-white hover:bg-green-800 transition"
      >
        Add
      </button>
    </div>
  );
}
