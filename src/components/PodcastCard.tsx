import React from 'react';

import { Podcast } from '../types';

function PodcastCard({ podcast }: { podcast: Podcast }) {
  const { Date, Podcast, Title, Links } = podcast;

  return (
    <li>
      <a href={Links}>
        {Title} | {Podcast} | {Date}
      </a>
    </li>);
}

export default PodcastCard;
