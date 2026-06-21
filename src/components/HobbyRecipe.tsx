import React, { useState } from 'react';

interface Hobby {
  title: string;
  rating: string;
  totalTime: string;
  yields: string;
  needs: string[];
  image: string;
  imageAlt: string;
}

const HOBBIES: Hobby[] = [
  {
    title: 'Classical Piano',
    rating: '★★★★★',
    totalTime: '10+ years',
    yields: 'the ability to learn nearly any piece of music, finger dexterity, and an indomitable love and appreciation for music and the people who make it',
    needs: ['A desire to learn', 'Patience', 'A piano', 'A great teacher'],
    image: 'https://placehold.co/600x400?text=Classical+Piano',
    imageAlt: 'Lucy playing classical piano',
  },
  {
    title: 'Whittling',
    rating: '★★★★★',
    totalTime: '?',
    yields: 'unique spoons, handmade gifts, and the occasional splinter',
    needs: ['Wood', 'A knife', 'Creativity'],
    image: 'https://placehold.co/600x400?text=Whittling',
    imageAlt: 'Lucy whittling wood',
  },
  {
    title: 'Ballroom Dance',
    rating: '★★★★★',
    totalTime: '3 years',
    yields: 'connecting with strangers through physical movement, feeling like a Disney princess in a gown, and calf strength',
    needs: ['A place to dance', 'A partner (optional)'],
    image: 'https://placehold.co/600x400?text=Ballroom+Dance',
    imageAlt: 'Lucy ballroom dancing',
  },
  {
    title: 'Running',
    rating: '★★★★★',
    totalTime: '10 seasons of track and field',
    yields: 'extensive knowledge of the best running shoes, a Strava account, and daydreams of running a marathon',
    needs: ['A pair of sneakers', 'Deodorant (recommended)'],
    image: 'https://placehold.co/600x400?text=Running',
    imageAlt: 'Lucy running',
  },
  {
    title: 'Baking',
    rating: '★★★★★',
    totalTime: '10+ years',
    yields: 'endless sweet treats',
    needs: ['Hungry family + friends!'],
    image: 'https://placehold.co/600x400?text=Baking',
    imageAlt: 'Lucy baking',
  },
];

/**
 * Self-contained hobby recipe component. Manages its own index state so the
 * "Next Hobby" button works without touching window state at all.
 */
export const HobbyRecipe: React.FC = () => {
  const [index, setIndex] = useState(0);
  const hobby = HOBBIES[index];

  const next = () => setIndex(i => (i + 1) % HOBBIES.length);

  return (
    <div className="font-serif">
      {/* Header */}
      <div className="bg-[#673147] p-6 text-center rounded-t-lg -m-4 mb-0">
        <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-sm">{hobby.title}</h1>
        <div className="text-xl text-yellow-500 drop-shadow-sm">{hobby.rating}</div>
      </div>

      {/* Hero photo */}
      <div className="w-full -mx-4" style={{ width: 'calc(100% + 2rem)' }}>
        <img
          src={hobby.image}
          alt={hobby.imageAlt}
          className="w-full object-cover"
          style={{ maxHeight: '260px' }}
        />
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg mb-6 mt-4">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Total Time</div>
          <div className="text-base text-gray-800">{hobby.totalTime}</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Yields</div>
          <div className="text-base text-gray-800">{hobby.yields}</div>
        </div>
      </div>

      {/* What You'll Need */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-400">
          What You'll Need
        </h2>
        <ul className="space-y-2">
          {hobby.needs.map((need, i) => (
            <li key={i} className="flex items-start space-x-3 py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span className="text-base text-gray-700">{need}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {index + 1} of {HOBBIES.length}
        </div>
        <button
          onClick={next}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Next Hobby →
        </button>
      </div>
    </div>
  );
};