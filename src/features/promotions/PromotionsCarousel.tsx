import { useEffect, useMemo, useState, useCallback } from 'react';
import { Root, Slide, Image, Title, Description, Controls, NavButton } from './styles/PromotionsCarousel';
import type { Promotion } from '../../types';
import { BackwardOutlined, ForwardOutlined } from '@ant-design/icons';

export function PromotionsCarousel({ promotions }: { promotions: Promotion[] }) {
  const sorted = useMemo(() => [...promotions].sort((a, b) => a.order - b.order), [promotions]);
  const [current, setCurrent] = useState(0);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % sorted.length);
  }, [sorted.length]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + sorted.length) % sorted.length);
  }, [sorted.length]);

  useEffect(() => {
    if (!sorted.length) return undefined;

    const intervalId = window.setInterval(() => {
      handleNext();
    }, sorted[current]?.durationSeconds * 1000 || 8000);

    return () => window.clearInterval(intervalId);
  }, [sorted, current, handleNext]);

  if (!sorted.length) return null;

  return (
    <Root>
      {sorted.map((promo, index) => (
        <Slide key={promo.id} active={index === current}>
          <Image src={promo.imageUrl} alt={promo.title} />
          <Title>{promo.title}</Title>
          {promo.description && <Description>{promo.description}</Description>}
        </Slide>
      ))}

      <Controls>
        <NavButton onClick={handlePrev} aria-label="Anterior">
          <BackwardOutlined />
        </NavButton>
        <NavButton onClick={handleNext} aria-label="Próximo">
          <ForwardOutlined />
        </NavButton>
      </Controls>
    </Root>
  );
}