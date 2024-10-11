import React from 'react';

const BottomNavbar: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-2">
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="text-xs">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M21 11H6.414l5.293-5.293-1.414-1.414L3.586 12l6.707 6.707 1.414-1.414L6.414 13H21v-2z" />
          </svg>
          <span className="text-xs">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 7.77L18.39 12 12 16.23 5.61 12 12 7.77M12 2L1 12l11 10L23 12 12 2z" />
          </svg>
          <span className="text-xs">Explore</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-xs">Profile</span>
        </a>
      </div>
    </div>
  );
};

export default BottomNavbar;
