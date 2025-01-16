import React from 'react';

const AnimatedHeading = () => {
  const words = ['Welcome', 'to', 'the', 'Future!']; // Customize your words
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <h1 className="text-4xl font-bold text-gray-900 space-x-2">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block opacity-0 animate-[fadeIn]`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedHeading;
