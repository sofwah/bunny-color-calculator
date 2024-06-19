

export function InfoPopup({ setInfoIsOpen }) {

  function closeInfoPopup(e) {
    setInfoIsOpen(false);
  };

  function handleInnerClick(e) {
    // Prevent the click event from bubbling up to the outer div
    e.stopPropagation();
  };

  return (
    <div
      onClick={closeInfoPopup}
      className='absolute inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-start'
    >
      <div
        onClick={handleInnerClick}
        className='bg-gray-100 p-10 rounded-lg shadow-lg w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]
        sticky top-20'
      >
        <div
          onClick={closeInfoPopup}
          className='absolute right-4 top-2 text-2xl text-gray-800 hover:text-gray-500 cursor-pointer'
        >
          &#10005;
        </div>
        <p>Content</p>
        <p>More Content</p>
        <p>Even More Content</p>
      </div>
    </div>
  )
}