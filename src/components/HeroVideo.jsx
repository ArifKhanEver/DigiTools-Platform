import React from 'react';

/**
 * Simple video placeholder for the Hero section.
 * Props:
 *   - src: video source URL (string)
 *   - poster: image shown before play (string)
 */
const HeroVideo = ({ src = '#', poster = '' }) => {
  return (
    <video
      className="w-full max-w-[600px] rounded-xl shadow-lg"
      controls
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;

// Code styling and structural review completed.
