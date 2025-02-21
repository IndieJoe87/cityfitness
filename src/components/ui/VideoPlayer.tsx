'use client';

import { useEffect, useRef } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay might be blocked by browser
              console.log('Autoplay prevented');
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-background">
      <video 
        ref={videoRef}
        className="w-full h-full object-cover bg-background"
        controls
        muted
        preload="none"
        poster="https://WebWerkmitte.b-cdn.net/City%20Fitness/video-thumbnail.jpg"
        onLoadedMetadata={(e) => {
          const video = e.target as HTMLVideoElement;
          video.volume = 0;
        }}
      >
        <source src="https://WebWerkmitte.b-cdn.net/City%20Fitness/Smarte%20Workouts%20Wie%20funktioniert%20EGYM.mp4" type="video/mp4" />
        Ihr Browser unterstützt das Video-Format leider nicht.
      </video>
    </div>
  );
}