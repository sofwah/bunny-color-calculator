import { useState } from 'react';

const ArrowIcon = ({ isOpen }) => (
  <svg
    className={
      `w-2.5 h-2.5 text-gray-700 inline-block align-middle transition-transform transform
      ${isOpen ? 'rotate-90' : ''}`
    }
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
        className="cursor-pointer flex items-center py-1 shadow-[inset_0_-8px_1px_-8px_rgba(0,0,0,0.2)]"
      >
        <ArrowIcon isOpen={isOpen} />
        <span
          className="ml-2 font-medium tracking-wide" dangerouslySetInnerHTML={{ __html: label }}
        ></span>
      </div>
      {isOpen && (
        <div className="pl-5 py-1 pb-2 text-sm text-gray-900 tracking-wide bg-[rgba(0,0,0,0.01)]">
          {content.map((item, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: item }}></div>
          ))}
        </div>
      )}
    </div>
  );
};