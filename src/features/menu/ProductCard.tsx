import { Card, Typography } from 'antd';
import { StyledCard, ProductImage, Placeholder, ImageContainer, Badge } from './styles/ProductCard';
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
            <Placeholder>
              <img
                src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sem imagem"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Placeholder>
          )}
          {product.badge && (
            <Badge color={product.badge === 'promo' ? 'volcano' : product.badge === 'new' ? 'green' : 'default'}>
              {product.badge === 'promo' ? 'Promoção' : product.badge === 'new' ? 'Novo' : 'Esgotado'}
            </Badge>
          )}
        </ImageContainer>
      }
      styles={{ body: { padding: 16 } }}
    >
      <Card.Meta
        title={<span style={{ color: 'inherit' }}>{product.name}</span>}
        description={
          <>
            {product.description && (
              <Paragraph 
                ellipsis={{ rows: 2 }} 
                style={{ color: 'inherit', margin: 0 }}
              >
                {product.description}
              </Paragraph>
            )}
            <Text 
              strong 
              style={{ 
                display: 'block', 
                marginTop: 8, 
                fontSize: '1.2rem',
                color: 'inherit'
              }}
            >
              R$ {product.price.toFixed(2)}
            </Text>
          </>
        }
      />
    </StyledCard>
  );
}
