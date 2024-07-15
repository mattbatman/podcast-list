import React from 'react';
import Button from './Button';
import { getPodcastKey } from '../utility/podcast-key';

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
    <div className="accordion">
      <div className="accordion-label-container">
        <input type="checkbox" id="podcast-filters" />
        <label className="accordion-label" htmlFor="podcast-filters">
          Podcasts
        </label>
        <i></i>
      </div>
      <div className="accordion-content">
        <ul className="ShowFilter">
          {uniqueShows.map((show) => {
            const isSelected = includedShows.indexOf(show) > -1;

            return (
              <li key={show}>
                <Button
                  showTitle={show}
                  handleClick={handleShowClick}
                  isSelected={isSelected}
                  podcastClass={getPodcastKey(show)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShowFilter;
