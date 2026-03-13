import styled from 'styled-components';
import { List, Typography } from 'antd';

const { Title } = Typography;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const CategoryTitle = styled(Title)`
  margin-bottom: 1rem !important;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text} !important;
`;

export const ListItem = styled(List.Item)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  margin-bottom: 12px;
  padding: 16px;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  height: 160px;
`;

export const Placeholder = styled.div`
  min-width: 130px;
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

export const TextProduct = styled(List.Item.Meta)`
  margin-left: 12px;  
`;