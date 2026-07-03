"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { getYoutubeId, getYoutubeThumbnail } from "@/lib/youtube";

interface VideoEmbedProps {
  videoUrl: string;
  title: string;
}

export default function VideoEmbed({ videoUrl, title }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYoutubeId(videoUrl);
  const thumbnail = getYoutubeThumbnail(videoUrl);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-950">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=0&playsinline=1&color=white`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play demo video for ${title}`}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl"
    >
      <Image
        src={thumbnail}
        alt={`${title} demo preview`}
        fill
        unoptimized
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-1 h-6 w-6 fill-black text-black" />
        </div>
      </div>
    </button>
  );
}