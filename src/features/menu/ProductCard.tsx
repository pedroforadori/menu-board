import { Card, Tag, Typography } from 'antd';
import { StyledCard, ProductImage, Placeholder, ImageContainer, Badge } from './styles/ProductCard.styles';
import type { Product } from '../../types';

const { Text, Paragraph } = Typography;

export function ProductCard({ product }: { product: Product }) {
  return (
    <StyledCard
      cover={
        <ImageContainer>
          {product.imageUrl ? (
            <ProductImage src={product.imageUrl} alt={product.name} />
          ) : (
            <Placeholder>🍔</Placeholder>
          )}
          {product.badge && (
            <Badge color={product.badge === 'promo' ? 'volcano' : product.badge === 'new' ? 'green' : 'default'}>
              {product.badge === 'promo' ? 'Promoção' : product.badge === 'new' ? 'Novo' : 'Esgotado'}
            </Badge>
          )}
        </ImageContainer>
      }
      bodyStyle={{ padding: 16 }}
    >
      <Card.Meta
        title={product.name}
        description={
          <>
            {product.description && <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>}
            <Text strong style={{ display: 'block', marginTop: 8, fontSize: '1.2rem' }}>
              R$ {product.price.toFixed(2)}
            </Text>
          </>
        }
      />
    </StyledCard>
  );
}
