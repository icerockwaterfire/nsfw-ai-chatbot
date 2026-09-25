import React from 'react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold text-purple-400">AI Dream Gallery</h1>
        <p className="text-zinc-400 mt-2">Explore the boundaries of imagination</p>
      </header>
      
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {/* Image slots will be mapped here */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-[3/4] bg-zinc-800 rounded-xl animate-pulse flex items-center justify-center text-zinc-600">
            Loading...
          </div>
        ))}
      </main>
      
      <footer className="mt-12 text-center text-zinc-500 text-sm">
        Powered by Chloe's Magic & Vercel
      </footer>
    </div>
  );
}
