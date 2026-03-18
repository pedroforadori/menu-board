import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const Section = styled.section`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const CategoryTitle = styled(Title)`
  margin-bottom: 1rem !important;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text} !important;
  transition: background 0.3s ease, color 0.3s ease;
`;

export const ListItem = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  margin-bottom: 12px;
  padding: 16px;
  display: flex;
  gap: 16px;
  transition: background 0.3s ease, border-color 0.3s ease;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  height: 120px;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 120px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 2rem;
  transition: background 0.3s ease, color 0.3s ease;
`;

export const ImageContainer = styled.div`
  min-width: 200px;
  position: relative;
  height: 120px;
  overflow: hidden;
`;

export const TextProduct = styled.div`
  margin-left: 12px;
  flex: 1;
`;

export const ProductDescription = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 1.4;
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  display: block;
  margin-top: 8px;
`;