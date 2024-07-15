import React from 'react';

function Button({
  showTitle,
  handleClick,
  isSelected,
  podcastClass
}: {
  showTitle: string;
  handleClick: (showTitle: string) => void;
  isSelected: boolean;
  podcastClass: string;
}) {
  return (
    <button
      className={isSelected ? `${podcastClass} selected` : `${podcastClass}`}
      onClick={() => {
        handleClick(showTitle);
      }}
    >
      {showTitle}
    </button>
  );
}

export default Button;
