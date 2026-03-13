import styled from 'styled-components';
import { Card, Tag } from 'antd';

export const StyledCard = styled(Card)`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  display: flex;
  flex-direction: column;

  .ant-card-body {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .ant-card-meta-title {
    font-size: 1.15rem;
    font-weight: 700;
  }

  .ant-card-meta-description {
    color: rgba(255, 255, 255, 0.85);
    flex: 1;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  height: 160px;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 160px;
  overflow: hidden;
`;

export const Badge = styled(Tag)`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`;