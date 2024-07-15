function getPodcastKey(podcast: string) {
  return podcast.replace(/\s+/g, '-').toLowerCase();
}

export { getPodcastKey };
