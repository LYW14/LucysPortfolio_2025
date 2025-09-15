import React from 'react';

export const WelcomeWindow: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-center mb-4">Welcome to Lucy's Kitchen!</h3>
      
      <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
        <p className="text-center text-lg mb-4">
          This is an interactive personal website where you can explore projects I've worked on and more!
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-gray-800">Ways you can explore:</h4>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start space-x-2">
            <span className="text-red-500 font-bold">1.</span>
            <span>Find out what's cooking by clicking the <strong>stovetop</strong> and <strong>oven</strong> to discover projects</span>
          </div>
          
          <div className="flex items-start space-x-2">
            <span className="text-red-500 font-bold">2.</span>
            <span>Learn other things about me by hovering over the other items scattered around the kitchen</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-red-500 font-bold">3.</span>
            <span>Select any of the <strong>menu items</strong> on the refridgerator to the left</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-red-500 font-bold">4.</span>
            <span><strong>Drag windows around</strong> and resize them to organize your workspace</span>
          </div>
          
          <div className="flex items-start space-x-2">
            <span className="text-red-500 font-bold">5.</span>
            <span>Look for the <strong>red X</strong> in the upper right corner of the window to close</span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-sm">
        <p className="text-center">
          <strong>Tip:</strong> For some items, you may want to turn your sound on for the full experience. Happy exploring!
        </p>
      </div>
    </div>
  );
};