import React from 'react';

interface Hobby {
  title: string;
  rating: string;
  totalTime: string;
  yields: string;
  needs: string[];
}

const hobbies: Hobby[] = [
  {
    title: "Classical Piano",
    rating: "★★★★★",
    totalTime: "10+ years",
    yields: "the ability to learn nearly any piece of music, finger dexterity, and an indomitable love and appreciation for music and the people who make it",
    needs: [
      "A desire to learn",
      "Patience",
      "A piano",
      "A great teacher"
    ]
  },
  {
    title: "Whittling",
    rating: "★★★★★",
    totalTime: "?",
    yields: "unique spoons, handmade gifts, and the occaisonal splinter",
    needs: [
      "Wood",
      "A knife",
      "Creativity" 
    ]
  },
  {
    title: "Ballroom Dance",
    rating: "★★★★★",
    totalTime: "3 years",
    yields: "connecting with strangers through physical movement, feeling like a Disney princess in a gown, and calf strength",
    needs: [
      "A place to dance",
      "A partner (optional)",
    ]
  },
  {
    title: "Running",
    rating: "★★★★★",
    totalTime: "10 seasons of track and field",
    yields: "extensive knowledge of the best running shoes, a Strava account, and daydreams of running a marathon",
    needs: [
      "A pair of sneakers",
      "Deodorant (recommended)",
    ]
  }
];

interface UseHobbyRecipeProps {
  handleOpenWindow: (
    id: string,
    title: string,
    content: React.ReactNode,
    theme: "coffee" | "cooking" | "books" | "map" | "shelf" | "tools" | "default"
  ) => void;
  currentHobbyIndex: number;
  setCurrentHobbyIndex: (index: number) => void;
}

export const useHobbyRecipe = ({
  handleOpenWindow,
  currentHobbyIndex,
  setCurrentHobbyIndex
}: UseHobbyRecipeProps) => {
  
  // Generic renderer for any hobby by index
  const renderHobbyContent = (hobbyIndex: number): React.ReactNode => {
    const currentHobby = hobbies[hobbyIndex];

    const nextHobby = () => {
      const newIndex = (hobbyIndex + 1) % hobbies.length;
      setCurrentHobbyIndex(newIndex);

      // Use the same window ID to update existing window instead of creating new one
      handleOpenWindow(
        `hobby-recipe-window`, // same key as original window
        "My Hobbies",
        renderHobbyContent(newIndex),
        "coffee"
      );
    };

    return (
      <div className="font-serif">
        {/* Header */}
        <div className="bg-[#673147] p-6 text-center rounded-t-lg -m-4 mb-6">
          <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-sm">
            {currentHobby.title}
          </h1>
          <div className="text-xl text-yellow-500 mb-4 drop-shadow-sm">
            {currentHobby.rating}
          </div>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg mb-6">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
              Total Time
            </div>
            <div className="text-base text-gray-800">
              {currentHobby.totalTime}
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
              Yields
            </div>
            <div className="text-base text-gray-800">
              {currentHobby.yields}
            </div>
          </div>
        </div>

        {/* Needs List */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-400">
            What You'll Need
          </h2>
          <ul className="space-y-2">
            {currentHobby.needs.map((need, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span className="text-base text-gray-700">{need}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {hobbyIndex + 1} of {hobbies.length}
          </div>
          
          <button
            onClick={nextHobby}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Next Hobby →
          </button>
        </div>
      </div>
    );
  };

  // Open window for the current hobby
  const openHobbyWindow = () => {
    handleOpenWindow(
      `hobby-recipe-window`, // consistent window ID
      "My Hobbies",
      renderHobbyContent(currentHobbyIndex),
      "coffee"
    );
  };

  return { openHobbyWindow };
};