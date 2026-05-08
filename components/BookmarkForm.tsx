"use client";

import { useState } from "react";
import { Bookmark } from "@/types/bookmark";
import { Plus } from "lucide-react";

export default function BookmarkForm({
  onAdd,
}: {
  onAdd: (b: Bookmark) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    url: "",
  });

  const handleSubmit = () => {
    if (!form.name.trim() || !form.url.trim()) {
      return alert("Please fill all fields");
    }

    let formattedURL = form.url;

    if (
      !formattedURL.startsWith("http://") &&
      !formattedURL.startsWith("https://")
    ) {
      formattedURL = `https://${formattedURL}`;
    }

    onAdd({
      name: form.name,
      url: formattedURL,
    });

    setForm({
      name: "",
      url: "",
    });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter Bookmark Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="
          w-full
          rounded-2xl
          border border-white/10
          bg-white/5
          px-5 py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-green-500
          focus:ring-2 focus:ring-green-500/30
        "
      />

      <input
        type="url"
        placeholder="Enter Bookmark URL"
        value={form.url}
        onChange={(e) =>
          setForm({
            ...form,
            url: e.target.value,
          })
        }
        className="
          w-full
          rounded-2xl
          border border-white/10
          bg-white/5
          px-5 py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-green-500
          focus:ring-2 focus:ring-green-500/30
        "
      />

      <button
        onClick={handleSubmit}
        className="
    w-fit
    mx-auto
    flex items-center justify-center gap-2
    rounded-xl
    bg-green-700
    hover:bg-green-600
    px-6 py-3
    font-semibold
    text-base
    transition-all duration-300
    hover:scale-[1.02]
    active:scale-[0.98]
  "
      >
        <Plus size={18} />
        Add Bookmark
      </button>
    </div>
  );
}
