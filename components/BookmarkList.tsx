"use client";

import { Bookmark } from "@/types/bookmark";
import { ExternalLink, Trash2 } from "lucide-react";

export default function BookmarkList({
  bookmarks,
  onRemove,
}: {
  bookmarks: Bookmark[];
  onRemove: (index: number) => void;
}) {
  if (!bookmarks.length) {
    return (
      <div
        className="
        border border-dashed border-white/10
        rounded-2xl
        p-10
        text-center
        text-gray-400
        bg-white/[0.03]
      "
      >
        No bookmarks added yet.
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {bookmarks.map((bookmark, index) => {
        let domain = "";

        try {
          domain = new URL(bookmark.url).hostname;
        } catch {
          domain = bookmark.url;
        }

        return (
          <li key={index}>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                flex items-center justify-between
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                p-5
                transition-all duration-300
                hover:border-green-500/40
                hover:bg-white/[0.08]
                hover:scale-[1.01]
              "
            >
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                  alt={bookmark.name}
                  className="w-12 h-12 rounded-xl"
                />

                <div className="min-w-0 text-left">
                  <h3 className="text-lg font-bold truncate">
                    {bookmark.name}
                  </h3>

                  <p className="text-sm text-gray-400 truncate">{domain}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ExternalLink
                  size={18}
                  className="
                    text-gray-400
                    transition
                    group-hover:text-white
                  "
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onRemove(index);
                  }}
                  className="
                    opacity-0
                    group-hover:opacity-100
                    transition
                    rounded-xl
                    border border-red-500/20
                    bg-red-500/10
                    p-2
                    hover:bg-red-500/20
                  "
                >
                  <Trash2 size={18} className="text-red-400" />
                </button>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
