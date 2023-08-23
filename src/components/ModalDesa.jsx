import React from 'react'

const ModalDesa = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="bg-white p-6 rounded-lg shadow-md w-[600px] h-[600px] relative">
        <button
          className="absolute top-2 right-2 text-black  hover:text-gray-700"
          onClick={() => { onClose() }}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalDesa