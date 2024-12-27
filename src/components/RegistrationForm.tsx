import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="register" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <UserPlus className="mx-auto h-12 w-12 text-orange-600" />
          <h2 className="text-3xl font-bold mt-4">Kayıt Formu</h2>
          <p className="text-gray-600 mt-2">Survivor Parkur etkinliğine katılmak için formu doldurun</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Yaş</label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </section>
  );
}