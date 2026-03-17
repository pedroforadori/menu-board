import styled from 'styled-components';
import { Card } from 'antd';

export const Featured = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
`;

export const Background = styled.div<{ image?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  filter: blur(20px) brightness(0.65);
  z-index: -1;
`;

export const StyledCard = styled(Card)`
  max-width: 680px;
  width: 100%;
  background: ${({ theme }) => theme.mode === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.52)'};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.3s ease, border-color 0.3s ease;

  .ant-card-body {
    padding: 28px;
  }
`;