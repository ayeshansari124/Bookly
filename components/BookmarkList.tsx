"use client";
import { Bookmark } from "@/types/bookmark";

export default function BookmarkList({
  bookmarks,
  onRemove,
}: {
  bookmarks: Bookmark[];
  onRemove: (index: number) => void;
}) {
  if (!bookmarks.length) return <p className="mt-3 text-gray-300">No bookmarks yet</p>;

  return (
    <ul className="space-y-3 w-full mt-4">
      {bookmarks.map((b, i) => (
        <li key={i} className="bg-black/20 rounded-lg shadow p-4 flex justify-between items-center">
          <a href={b.url} target="_blank" className="font-bold">
            {b.name}
          </a>
          <button
            onClick={() => onRemove(i)}
            className="bg-red-900 text-white font-bold px-3 py-2 rounded-lg hover:bg-red-800 transition"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
