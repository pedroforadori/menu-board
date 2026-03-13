import { useEffect, useMemo, useState } from 'react';
import { Root, Slide, Video, Image } from './MediaCarousel.styles';
import type { MediaSlide } from '../../types';

export function MediaCarousel({ slides }: { slides: MediaSlide[] }) {
  const sorted = useMemo(() => [...slides].sort((a, b) => a.order - b.order), [slides]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!sorted.length) return undefined;

    const intervalId = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % sorted.length);
    }, sorted[current]?.durationSeconds * 1000 || 8000);

    return () => window.clearInterval(intervalId);
  }, [sorted, current]);

  if (!sorted.length) return null;

  return (
    <Root>
      {sorted.map((slide, index) => (
        <Slide key={slide.id} active={index === current}>
          {slide.type === 'video' ? (
            <Video src={slide.url} autoPlay muted loop playsInline />
          ) : (
            <Image src={slide.url} alt="Promotional" />
          )}
        </Slide>
      ))}
    </Root>
  );
}
