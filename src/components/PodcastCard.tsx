import React from 'react';

import { Podcast } from '../types';

function PodcastCard({ podcast }: { podcast: Podcast }) {
  const { Date, Podcast, Title, Links } = podcast;

  return (
    <li>
      <h3>
        <a href={Links}>{Title}</a>
      </h3>
      <div className="podcast">{Podcast}</div>
      <div className="date">{Date}</div>
    </li>
  );
}

export default PodcastCard;
