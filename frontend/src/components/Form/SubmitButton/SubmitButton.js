import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-12"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
