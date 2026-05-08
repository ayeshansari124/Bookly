"use client";

import { useEffect, useState } from "react";
import BookmarkForm from "@/components/BookmarkForm";
import BookmarkList from "@/components/BookmarkList";
import { Bookmark } from "@/types/bookmark";

export default function HomePage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");

    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks((prev) => [...prev, bookmark]);
  };

  const removeBookmark = (index: number) => {
    setBookmarks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center px-4 py-10">
      <main
        className="
        w-full max-w-2xl
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_80px_rgba(0,0,0,0.7)]
        p-6 sm:p-10
        text-white
      "
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Bookmark Manager
            </h1>

            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Save and access your favorite websites instantly.
            </p>
          </div>

          <BookmarkForm onAdd={addBookmark} />

          <div className="w-full mt-10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Your Bookmarks</h2>

              <span className="text-sm text-gray-400">
                {bookmarks.length} Saved
              </span>
            </div>

            <BookmarkList bookmarks={bookmarks} onRemove={removeBookmark} />
          </div>
        </div>
      </main>
    </div>
  );
}
