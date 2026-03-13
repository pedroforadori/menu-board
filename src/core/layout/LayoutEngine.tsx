import { LayoutRoot, ContentArea } from './LayoutEngine.styles';
import type { LayoutConfig, MenuData, Product } from '../../types';
import { MenuGrid } from '../../features/menu/MenuGrid';
import { MenuList } from '../../features/menu/MenuList';
import { FeaturedProduct } from '../../features/menu/FeaturedProduct';

export function LayoutEngine({
  config,
  menu,
  featuredProduct,
}: {
  config: LayoutConfig;
  menu: MenuData;
  featuredProduct?: Product;
}) {
  return (
    <LayoutRoot orientation={config.orientation}>
      <ContentArea>
        {config.mode === 'grid' && <MenuGrid menu={menu} showCategories={config.showCategories} />}
        {config.mode === 'list' && <MenuList menu={menu} showCategories={config.showCategories} />}
        {config.mode === 'featured' && featuredProduct ? (
          <FeaturedProduct product={featuredProduct} />
        ) : (
          config.mode === 'featured' && <MenuGrid menu={menu} showCategories={config.showCategories} />
        )}
      </ContentArea>
    </LayoutRoot>
  );
}
