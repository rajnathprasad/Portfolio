export function getYoutubeId(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : "";
}

export function getYoutubeThumbnail(url: string): string {
  const id = getYoutubeId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}