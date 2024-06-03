import React from 'react';

function ImageButton({ src, alt, onClick }) {
  const handleClick = () => {
    alert('You clicked on the button'); // Use alert for a simple prompt
    onClick && onClick(); // Call the provided onClick handler if it exists
  };

  return (
    <button type="button" onClick={handleClick} style={{ background: 'none', border: 'none', padding: 0 }}>
      <img src={src} alt={alt} />
    </button>
  );
}

export default ImageButton;
