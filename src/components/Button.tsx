import React, { useState } from 'react';

function Button({ showTitle }: { showTitle: string }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={isClicked ? 'selected' : ''}
      onClick={() => setIsClicked(!isClicked)}
    >
      {showTitle}
    </button>
  );
}

export default Button;
