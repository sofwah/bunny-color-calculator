

export function InfoSymbol({ setInfoIsOpen }) {
  return (
    <div
      onClick={() => setInfoIsOpen(() => true)}
      className='top-0 end-0 absolute mx-2 my-1 sm:mx-3 sm:my-2 text-2xl sm:text-2xl md:text-3xl
      text-gray-800 hover:text-gray-500 font-medium cursor-pointer'
    >
      &#9432;
    </div>
  )
}