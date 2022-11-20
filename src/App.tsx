import React from 'react';
import PodcastList from './components/PodcastList';
import ShowFilter from './components/ShowFilter';
import data from './data/podcasts.json';

function App() {
  return (
    <div className="container">
      <h1>A List of Interesting Podcast Episodes</h1>
      <ShowFilter podcasts={data} />
      <PodcastList podcasts={data} />
    </div>
  );
}

export default App;
