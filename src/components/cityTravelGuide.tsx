// CityTravelGuide.tsx
import React, { useEffect, useState } from 'react';
import { CITIES } from './cityData';
import { createAudioInstance, playAudio, stopAudio } from './utils';

// Import audio files
import rocky_music from "../assets/rocky-music.mp3";
import eagle_sound from "../assets/eagle-sounds.mp3";

// Import city-specific images
import ritas from "../assets/ritas_water_ice.png";
import love_statue from "../assets/Love-statue.png";
import wawa from "../assets/wawa_logo.svg";
import hershey_chocolate from "../assets/hershey_chocolate.webp";
import cheesesteak from "../assets/cheesesteak.png";
import soft_pretzel from "../assets/soft_pretzel.png";
import smoke_cloud from "../assets/smoke_cloud.png";

export const CityTravelGuide: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [rockyAudio, setRockyAudio] = useState<HTMLAudioElement | null>(null);

  const selectedCityData = CITIES.find(city => city.id === selectedCity);

  // Animation effects for hardest sell
  useEffect(() => {
    if (currentSlide === 4) {
      const interval = setInterval(() => {
        setAnimationPhase(prev => (prev + 1) % 5);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setAnimationPhase(0);
    }
  }, [currentSlide]);

  // Audio cleanup effect
  useEffect(() => {
    return () => {
      if (rockyAudio) {
        stopAudio(rockyAudio);
      }
    };
  }, [selectedCity, currentSlide, rockyAudio]);

  const playEagleSound = () => {
    const audio = createAudioInstance(eagle_sound);
    playAudio(audio);
  };

  const toggleRockyTheme = () => {
    if (rockyAudio) {
      stopAudio(rockyAudio);
      setRockyAudio(null);
    } else {
      const audio = createAudioInstance(rocky_music, true);
      playAudio(audio);
      setRockyAudio(audio);
    }
  };

  const renderHardSellContent = () => {
    if (currentSlide !== 4) return null;

    switch (selectedCity) {
      case 'city1': // Boston
        return (
          <div className="text-center w-full h-full flex flex-col items-center justify-center">
            <div className="grid grid-cols-6 gap-1 mb-4 max-w-xs">
              {['V', 'I', 'S', 'I', 'T', ' ', 'B', 'O', 'S', 'T', 'O', 'N'].map((letter, i) => (
                <span
                  key={i}
                  className="text-7xl font-bold inline-block animate-bounce font-family-[impact]"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: "1.2s",
                    color: `hsl(${(i * 40) % 360}, 100%, 50%)`
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        );

      case 'city2': // Philadelphia
        return (
          <div className="text-center w-full h-full flex flex-col items-center justify-center">
            <div className="mb-4">
              <span className="text-lg">🔊</span>
              <button onClick={toggleRockyTheme} className="ml-2 text-blue-500 underline text-sm">
                {rockyAudio ? 'Sound Off' : 'Sound On'}
              </button>
            </div>
            
            <div className="mb-4">
              <img 
                src={love_statue}
                alt="Love Statue"
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'inline',
                  verticalAlign: 'middle',
                  position: 'relative',
                  marginRight: '8px'
                }}
              />
              <span className="text-lg">to eat?</span>
            </div>
            
            <div style={{position: 'relative', display: 'inline-block'}}>
              {animationPhase === 0 && (
                <img src={ritas} alt="Rita's Water Ice" style={{ width: '96px', height: '96px', display: 'inline-block', position: 'relative', transition: 'opacity 0.5s' }} />
              )}
              {animationPhase === 1 && (
                <img src={wawa} alt="Wawa" style={{ width: '96px', height: '96px', display: 'inline-block', position: 'relative', transition: 'opacity 0.5s' }} />
              )}
              {animationPhase === 2 && (
                <img src={cheesesteak} alt="cheesesteak" style={{ width: '96px', height: '96px', display: 'inline-block', position: 'relative', transition: 'opacity 0.5s' }} />
              )}
              {animationPhase === 3 && (
                <img src={hershey_chocolate} alt="Hersheys Chocolate" style={{ width: '96px', height: '96px', display: 'inline-block', position: 'relative', transition: 'opacity 0.5s' }} />
              )}
              {animationPhase >= 4 && (
                <img src={soft_pretzel} alt="Soft Pretzel" style={{ width: '96px', height: '96px', display: 'inline-block', position: 'relative', transition: 'opacity 0.5s' }} />
              )}
            </div>
          </div>
        );

      case 'city3': // Washington DC
        return (
          <div className="text-center w-full h-full flex flex-col items-center justify-center space-y-2 relative">
            <div className="space-y-2">
              <div>Want to tour the White House? It's <span className="text-green-600 font-bold text-2xl animate-pulse">FREE</span> 
                <button onClick={playEagleSound} className="ml-2">🦅</button>
              </div>
              <div>Want to check out internationally renowned artwork? National Gallery entry is <span className="text-green-600 font-bold text-2xl animate-pulse">FREE</span> 
                <button onClick={playEagleSound} className="ml-2">🦅</button>
              </div>
              <div>Interested in Outer Space and Flight? National Air and Space Museum, <span className="text-green-600 font-bold text-2xl animate-pulse">FREE</span> 
                <button onClick={playEagleSound} className="ml-2">🦅</button>
              </div>
              <div className="relative">
                This country? <span className="text-red-500 font-bold text-3xl animate-pulse">FREEDOM</span>
                <button onClick={playEagleSound} className="ml-2">🦅</button>
                
                {animationPhase >= 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl animate-bounce">🦅</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'city4': // Pittsburgh
        return (
          <div className="relative text-center">
            <img
              src={smoke_cloud}
              alt="smoke"
              className="w-64 h-64 transition-opacity animate-ping-slow mx-auto duration-1000"
            />
            <div className="relative z-10">
              <h2 className="text-6xl font-bold text-yellow-500 opacity-50 mb-4">
                PITTSBURGH
              </h2>
              <p className="text-lg text-gray-800">
                forged steel, and now silicon. This city knows failure and reinvention better than any other. This city has grit and Aztec gold in its DNA. It's "yinz" at a tailgate, Heinz Ketchup on everything, and Picklesburg's pickle ice cream being pretty good. This isn't a city trying to impress you. It's a city that's too busy building, cheering, creating, and carrying on.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!selectedCity) {
    return (
      <div>
        <h3 className="text-xl font-bold mb-4">🗺️ Places I've Called Home</h3>
        <p className="text-gray-600 mb-6">Let me try to sell you on why each city I've lived in is the best city!</p>

        <div className="space-y-3">
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className="w-full flex items-center space-x-3 p-4 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg transition-all duration-200 text-left group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{city.emoji}</span>
              <span className="font-medium text-gray-800 group-hover:text-green-700">{city.name}</span>
              <span className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => {
            setSelectedCity(null);
            setCurrentSlide(0);
          }}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
        >
          <span>←</span>
          <span>Back to cities</span>
        </button>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">
          {selectedCityData?.emoji} {selectedCityData?.name}
        </h3>
      </div>

      <div className="bg-white rounded-lg border-2 border-green-200 p-6 mb-6 min-h-[200px] flex items-center justify-center">
        {currentSlide === 4 ? (
          renderHardSellContent()
        ) : (
          <p className="text-gray-800 leading-relaxed">
            {selectedCityData?.slides[currentSlide]}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Less Hard Sell</span>
          <span>More Hard Sell</span>
        </div>
        
        <div className="relative w-full">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={currentSlide}
            onChange={(e) => setCurrentSlide(parseInt(e.target.value))}
            className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(
                to right, 
                #10b981 0%, 
                #10b981 ${(currentSlide / 4) * 100}%, 
                #e5e7eb ${(currentSlide / 4) * 100}%, 
                #e5e7eb 100%
              )`
            }}
          />
        </div>
      </div>
    </div>
  );
};