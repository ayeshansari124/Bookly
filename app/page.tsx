"use client";
import { useEffect, useState } from "react";
import BookmarkForm from "@/components/BookmarkForm";
import BookmarkList from "@/components/BookmarkList";
import { Bookmark } from "@/types/bookmark";

export default function HomePage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark: Bookmark) => setBookmarks([...bookmarks, bookmark]);
  const removeBookmark = (i: number) => setBookmarks(bookmarks.filter((_, idx) => idx !== i));

  return (
    <main className="flex flex-col items-center text-center w-full sm:max-w-md mx-auto 
      bg-black/60 backdrop-blur-md text-white mt-16 rounded-xl p-6 sm:p-12 shadow-xl">
      <h1 className="text-3xl font-bold mb-4">Bookmark Manager</h1>
      <BookmarkForm onAdd={addBookmark} />
      <h2 className="text-xl font-semibold mt-8">Your Bookmarks</h2>
      <BookmarkList bookmarks={bookmarks} onRemove={removeBookmark} />
    </main>
  );
}
