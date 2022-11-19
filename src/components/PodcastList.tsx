import React from 'react';

interface Podcast {
  Date: string;
  Podcast: string;
  Title: string;
  Links: string;
}

function PodcastList({ data }: any) {
  return (<>{
    data.map((podcast: Podcast) => (
      <div key={podcast.Title}>{
        JSON.stringify(podcast)
      }</div>
    ))
  }</>);
}

export default PodcastList;
