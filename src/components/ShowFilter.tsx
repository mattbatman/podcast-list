import React from 'react';
import Button from './Button';

import { Podcast } from '../types';

function ShowFilter({ podcasts }: { podcasts: Podcast[] }) {
  const uniqueShows = podcasts
    .map(function ({ Podcast }) {
      return Podcast;
    })
    .filter(function unique(value, index, self) {
      return self.indexOf(value) === index;
    });

  return (
    <ul className="ShowFilter">
      {uniqueShows.map((show) => (
        <li key={show}>
          <Button showTitle={show} />
        </li>
      ))}
    </ul>
  );
}

export default ShowFilter;
