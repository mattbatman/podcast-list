import React, { useState } from 'react';
import Button from './Button';

import { Podcast } from '../types';

function ShowFilter({
  podcasts,
  includedShows,
  handleShowClick
}: {
  podcasts: Podcast[];
  includedShows: string[];
  handleShowClick: (showTitle: string) => void;
}) {
  const uniqueShows = podcasts
    .map(function ({ Podcast }) {
      return Podcast;
    })
    .filter(function unique(value, index, self) {
      return self.indexOf(value) === index;
    });

  return (
    <>
      <ul className="ShowFilter">
        {uniqueShows.map((show) => {
          const isSelected = includedShows.indexOf(show) > -1;

          return (
            <li key={show}>
              <Button
                showTitle={show}
                handleClick={handleShowClick}
                isSelected={isSelected}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShowFilter;
