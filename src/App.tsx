import { MenuBoard } from './features/menu/MenuBoard';
import { ThemeContextProvider } from './context';
import { LayoutProvider } from './context/LayoutContext';

export default function App() {
  return (
    <ThemeContextProvider>
      <LayoutProvider>
        <MenuBoard />
      </LayoutProvider>
    </ThemeContextProvider>
  );
}
