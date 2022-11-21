import React from 'react';

function Button({
  showTitle,
  handleClick,
  isSelected
}: {
  showTitle: string;
  handleClick: (showTitle: string) => void;
  isSelected: boolean;
}) {
  return (
    <button
      className={isSelected ? 'selected' : ''}
      onClick={() => {
        handleClick(showTitle);
      }}
    >
      {showTitle}
    </button>
  );
}

export default Button;
