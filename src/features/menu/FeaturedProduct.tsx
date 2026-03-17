import { Typography } from 'antd';
import { Featured, Background, StyledCard } from './styles/FeaturedProduct';
import type { Product } from '../../types';

const { Title, Paragraph, Text } = Typography;

export function FeaturedProduct({ product }: { product: Product }) {
  return (
    <Featured>
      <Background image={product.imageUrl} />
      <StyledCard>
        <Title style={{ color: 'white' }}>{product.name}</Title>
        {product.description && <Paragraph style={{ color: 'rgba(255,255,255,0.8)' }}>{product.description}</Paragraph>}
        <Text strong style={{ fontSize: '2rem', color: 'white' }}>
          R$ {product.price.toFixed(2)}
        </Text>
      </StyledCard>
    </Featured>
  );
}
