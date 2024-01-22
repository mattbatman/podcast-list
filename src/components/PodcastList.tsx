import React from 'react';
import PodcastCard from './PodcastCard';

import { Podcast } from '../types';

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  return (
    <ul className="PodcastList">
      {podcasts.map((podcast: Podcast) => (
        <PodcastCard
          podcast={podcast}
          key={`${podcast.Podcast}-${podcast.Title}`}
        />
      ))}
    </ul>
  );
}

export default PodcastList;
