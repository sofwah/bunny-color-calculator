import { useState } from 'react';

const ArrowIcon = ({ isOpen }) => (
  <svg
    className={`w-2.5 h-2.5 inline-block align-middle transition-transform transform ${isOpen ? 'rotate-90' : ''}`}
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
    <div className="my-1">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center"
      >
        <ArrowIcon isOpen={isOpen} /> {/* Use the SVG component */}
        <span className="ml-2">{label}</span>
      </div>
      {isOpen && (
        <div className="pl-2 py-1 rounded-b-lg text-sm bg-[#edededa0]">
          {content.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};