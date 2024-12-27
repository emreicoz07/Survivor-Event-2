import React from 'react';
import { Trophy } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-6 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy size={32} />
          <h1 className="text-2xl font-bold">Survivor Parkur 2024</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#course" className="hover:text-orange-200 transition">Parkur Bilgisi</a></li>
            <li><a href="#register" className="hover:text-orange-200 transition">Kayıt Ol</a></li>
            <li><a href="#participants" className="hover:text-orange-200 transition">Katılımcılar</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}