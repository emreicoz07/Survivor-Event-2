import React from 'react';
import { CourseSection } from '../types';
import { Flag, Timer, Award } from 'lucide-react';

const courseSections: CourseSection[] = [
  {
    name: 'Su Parkuru',
    description: 'Su üzerinde denge ve çeviklik gerektiren engeller',
    difficultyLevel: 'Zor'
  },
  {
    name: 'Tırmanma Duvarı',
    description: '4 metre yüksekliğinde tırmanma duvarı',
    difficultyLevel: 'Orta'
  },
  {
    name: 'Denge Köprüsü',
    description: 'Hareketli platformlar üzerinde denge parkuru',
    difficultyLevel: 'Kolay'
  }
];

export function CourseInfo() {
  return (
    <section id="course" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Parkur Bilgisi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courseSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition duration-300">
              <div className="flex items-center gap-2 mb-4">
                {section.difficultyLevel === 'Kolay' && <Flag className="text-green-500" />}
                {section.difficultyLevel === 'Orta' && <Timer className="text-yellow-500" />}
                {section.difficultyLevel === 'Zor' && <Award className="text-red-500" />}
                <h3 className="text-xl font-semibold">{section.name}</h3>
              </div>
              <p className="text-gray-600">{section.description}</p>
              <span className={`mt-4 inline-block px-3 py-1 rounded-full text-sm ${
                section.difficultyLevel === 'Kolay' ? 'bg-green-100 text-green-800' :
                section.difficultyLevel === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {section.difficultyLevel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}