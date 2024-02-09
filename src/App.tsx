import React, { useEffect, useState } from 'react';
import PodcastList from './components/PodcastList';
import ShowFilter from './components/ShowFilter';
import rawData from './data/podcasts.json';

import { Podcast } from './types';

const data: Podcast[] = rawData
  .map(function (datum) {
    return {
      ...datum,
      InterpretedDate: new Date(datum.Date)
    };
  })
  .sort(function (a, b) {
    return b.InterpretedDate.getTime() - a.InterpretedDate.getTime();
  });

function App() {
  const [includedShows, setIncludedShows] = useState<string[]>([]);
  const [episodes, setEpisodes] = useState<Podcast[]>(data);

  useEffect(() => {
    if (includedShows.length < 1) {
      setEpisodes(data);

      return;
    }

    const filteredToEpisodes = data.filter(function ({ Podcast }) {
      return includedShows.indexOf(Podcast) > -1;
    });

    setEpisodes(filteredToEpisodes);
  }, [includedShows]);

  function addOrRemoveOnClick(showTitle: string) {
    const isIncludedIndex = includedShows.indexOf(showTitle);

    if (isIncludedIndex === -1) {
      const addedToList = [...includedShows, showTitle];

      setIncludedShows(addedToList);

      return;
    }

    const removedFromList = [
      ...includedShows.slice(0, isIncludedIndex),
      ...includedShows.slice(isIncludedIndex + 1)
    ];

    setIncludedShows(removedFromList);
  }

  return (
    <div className="container">
      <h1>A List of Interesting Podcast Episodes</h1>
      <ShowFilter
        podcasts={data}
        includedShows={includedShows}
        handleShowClick={addOrRemoveOnClick}
      />
      <PodcastList podcasts={episodes} />
    </div>
  );
}

export default App;
