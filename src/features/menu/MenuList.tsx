import { ListItem, Section, CategoryTitle, ImageContainer, ProductImage, Placeholder, TextProduct, ProductDescription, ProductPrice } from './styles/MenuList';
import type { MenuData } from '../../types';

export function MenuList({ menu, showCategories }: { menu: MenuData; showCategories: boolean }) {
  return (
    <div>
      {menu.categories.map((category) => (
        <Section key={category.id}>
          {showCategories && <CategoryTitle level={3}>{category.title}</CategoryTitle>}
          <div>
            {category.products.map((product) => (
              <ListItem key={product.id}>
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
                </ImageContainer>
                <TextProduct>
                  <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
                    <span>
                      <strong>{product.name}</strong> 
                    </span>
                  </div>
                  <div>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>
                  </div>
                  <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                </TextProduct>
              </ListItem>
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
