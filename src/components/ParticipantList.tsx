import React from 'react';
import { Users } from 'lucide-react';
import { Participant } from '../types';

// Örnek katılımcı verileri
const participants: Participant[] = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    age: 25,
    email: 'ahmet@example.com',
    phone: '555-0001',
    registrationDate: '2024-03-15'
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    age: 28,
    email: 'ayse@example.com',
    phone: '555-0002',
    registrationDate: '2024-03-16'
  }
];

export function ParticipantList() {
  return (
    <section id="participants" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Users className="mx-auto h-12 w-12 text-orange-600" />
          <h2 className="text-3xl font-bold mt-4">Katılımcı Listesi</h2>
          <p className="text-gray-600 mt-2">Şu ana kadar kayıt olan katılımcılar</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Ad Soyad</th>
                <th className="py-3 px-4 text-left">Yaş</th>
                <th className="py-3 px-4 text-left hidden md:table-cell">E-posta</th>
                <th className="py-3 px-4 text-left hidden md:table-cell">Kayıt Tarihi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {participants.map((participant) => (
                <tr key={participant.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{participant.name}</td>
                  <td className="py-3 px-4">{participant.age}</td>
                  <td className="py-3 px-4 hidden md:table-cell">{participant.email}</td>
                  <td className="py-3 px-4 hidden md:table-cell">
                    {new Date(participant.registrationDate).toLocaleDateString('tr-TR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}