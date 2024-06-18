import { useState } from 'react';

const ArrowIcon = ({ isOpen }) => (
  <svg
    className={`w-2.5 h-2.5 text-gray-700 inline-block align-middle transition-transform transform ${isOpen ? 'rotate-90' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="20"
    height="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export function ColorDropdown({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center"
      >
        <ArrowIcon isOpen={isOpen} /> {/* Use the SVG component */}
        <span className="ml-2 font-medium">{label}</span>
      </div>
      {isOpen && (
        <div className="pl-5 py-1 pb-1 rounded-b-lg text-sm text-gray-800">
          {content.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};