import React from 'react';
import PodcastList from './components/PodcastList';
import data from './data/podcasts.json';

function App() {
  return (
    <div className="App">
      <PodcastList podcasts={data} />
    </div>
  );
}

export default App;
