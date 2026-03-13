import styled from 'styled-components';
import { Typography } from 'antd';

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