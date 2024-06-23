import { useState } from 'react';

const ArrowIcon = ({ isOpen }) => (
  <svg
    className={
      `w-3 h-3 text-gray-700 inline-block align-middle transition-transform transform
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
      strokeWidth="3"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export function InfoDropdown({ headingHtml, contentHtml }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-1">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center py-1"
      >
        <div className='mr-2 mb-[2px]'>
          <ArrowIcon isOpen={isOpen} />
        </div>
        {headingHtml}
      </div>
      {isOpen && (
        <div
          className="px-2 py-2 pb-2 tracking-wide shadow-[inset_0_8px_1px_-8px_rgba(0,0,0,0.3)]"
        >
          {contentHtml}
        </div>
      )}
    </div>
  );
};