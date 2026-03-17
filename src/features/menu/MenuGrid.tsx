import { Col, Row } from 'antd';
import { Section, CategoryTitle } from './styles/MenuGrid';
import type { MenuData } from '../../types';
import { ProductCard } from './ProductCard';

export function MenuGrid({ menu, showCategories }: { menu: MenuData; showCategories: boolean }) {
  return (
    <div>
      {menu.categories.map((category) => (
        <Section key={category.id}>
          {showCategories && <CategoryTitle level={3}>{category.title}</CategoryTitle>}
          <Row gutter={[16, 16]}>
            {category.products.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={12} lg={8} xl={6}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Section>
      ))}
    </div>
  );
}
