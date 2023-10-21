import React from 'react';
import { Link } from 'react-router-dom';


export function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the form builder!</h1>
      <p className="text-xl">Start building your custom online forms quickly and easily.</p>
      <Link to="/builder">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Create New Form
        </button>
      </Link>
    </div>
  );
}