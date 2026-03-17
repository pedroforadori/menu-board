import styled from 'styled-components';
import { Card, Tag } from 'antd';

export const StyledCard = styled(Card)`
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: background 0.3s ease, border-color 0.3s ease;

  .ant-card-body {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text} !important;
  }

  .ant-card-meta {
    color: ${({ theme }) => theme.colors.text} !important;
  }

  .ant-card-meta-title {
    font-size: 1.15rem !important;
    font-weight: 700 !important;
    color: ${({ theme }) => theme.colors.text} !important;
  }

  .ant-card-meta-title h4,
  .ant-card-meta-title > * {
    color: ${({ theme }) => theme.colors.text} !important;
  }

  .ant-card-meta-description,
  .ant-card-meta-description p,
  .ant-card-meta-description > * {
    font-weight: 500 !important;
    color: ${({ theme }) => theme.colors.text} !important;
  }

  .ant-typography,
  .ant-typography p,
  .ant-typography span {
    color: ${({ theme }) => theme.colors.text} !important;
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
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 2rem;
  transition: background 0.3s ease, color 0.3s ease;
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