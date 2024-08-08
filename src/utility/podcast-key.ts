function getPodcastKey(podcast: string) {
  const lowered = podcast.replace(/\s+/g, '-').toLowerCase();
  const noPeriod = lowered.split('.').join('');
  const noQuotesNoPeriod = noPeriod.split('"').join('');

  return noQuotesNoPeriod;
}

export { getPodcastKey };
