import { List, Typography } from 'antd';
import { ListItem, Section, CategoryTitle, ImageContainer, ProductImage, Placeholder, TextProduct } from './styles/MenuList.styles';
import type { MenuData } from '../../types';
const { Paragraph } = Typography;

export function MenuList({ menu, showCategories }: { menu: MenuData; showCategories: boolean }) {
  return (
    <div>
      {menu.categories.map((category) => (
        <Section key={category.id}>
          {showCategories && <CategoryTitle level={3}>{category.title}</CategoryTitle>}
          <List
            dataSource={category.products}
            renderItem={(product) => (
              <ListItem>
                <ImageContainer>
                  {product.imageUrl ? (
                    <ProductImage src={product.imageUrl} alt={product.name} />
                  ) : (
                    <Placeholder>🍔</Placeholder>
                  )}
                </ImageContainer>
                <TextProduct
                  title={
                    <span>
                      <strong>{product.name}</strong> <span style={{ color: 'rgba(255,255,255,0.7)' }}>R$ {product.price.toFixed(2)}</span>
                    </span>
                  }
                  description={<Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>}
                />
              </ListItem>
            )}
          />
        </Section>
      ))}
    </div>
  );
}
