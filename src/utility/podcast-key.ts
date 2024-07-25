function getPodcastKey(podcast: string) {
  const lowered = podcast.replace(/\s+/g, '-').toLowerCase();
  const noPeriod = lowered.split('.').join('');

  return noPeriod;
}

export { getPodcastKey };
