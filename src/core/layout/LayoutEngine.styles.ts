import styled from 'styled-components';
import type { LayoutConfig } from '../../types';

export const LayoutRoot = styled.div<{ orientation: LayoutConfig['orientation'] }>`
  display: flex;
  flex-direction: ${({ orientation }) => (orientation === 'portrait' ? 'column' : 'row')};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ContentArea = styled.main`
  flex: 1;
  padding: 18px;
  overflow-y: auto;
`;