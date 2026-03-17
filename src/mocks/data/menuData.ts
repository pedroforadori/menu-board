import type { MenuData } from '../../types';

export const menuDataMock: MenuData = {
  id: 'menu-1',
  name: 'Menu Principal',
  categories: [
    {
      id: 'cat-1',
      title: 'Comidas',
      order: 1,
      products: [
        {
          id: 'prod-001',
          name: 'Classic Beef Burger',
          description: 'Pão brioche, carne grelhada, queijo, alface, tomate e molho especial.',
          price: 28.9,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
          badge: 'promo',
          isFeatured: true,
        },
        {
          id: 'prod-002',
          name: 'Chicken Crispy',
          description: 'Frango empanado crocante com maionese temperada e alface.',
          price: 26.5,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
          badge: 'new',
        },
        {
          id: 'prod-003',
          name: 'Veggie Burger',
          description: 'Hambúrguer vegetariano com abacate e molho especial.',
          price: 24.9,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-004',
          name: 'Double Cheese Burger',
          description: 'Dois hambúrgueres com queijo duplo e bacon.',
          price: 32.5,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-005',
          name: 'Bacon Burger',
          description: 'Hambúrguer com bacon crocante e queijo cheddar.',
          price: 30.0,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-006',
          name: 'Spicy Burger',
          description: 'Hambúrguer apimentado com jalapeños e molho picante.',
          price: 29.5,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
    {
      id: 'cat-2',
      title: 'Bebidas',
      order: 2,
      products: [
        {
          id: 'prod-010',
          name: 'Lemonade Fresh',
          description: 'Refrescante de limão com hortelã.',
          price: 12.9,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
          badge: 'promo',
        },
        {
          id: 'prod-011',
          name: 'Milkshake de Ovomaltine',
          description: 'Delicioso milkshake cremoso com crocante.',
          price: 18.0,
        },
        {
          id: 'prod-012',
          name: 'Coca-Cola',
          description: 'Refrigerante clássico.',
          price: 8.5,
        },
        {
          id: 'prod-013',
          name: 'Orange Juice',
          description: 'Suco de laranja natural.',
          price: 10.0,
        },
      ],
    },
        {
      id: 'cat-3',
      title: 'Sobremesas',
      order: 3,
      products: [
        {
          id: 'prod-010',
          name: 'Lemonade Fresh',
          description: 'Refrescante de limão com hortelã.',
          price: 12.9,
          imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
          badge: 'promo',
        },
        {
          id: 'prod-011',
          name: 'Milkshake de Ovomaltine',
          description: 'Delicioso milkshake cremoso com crocante.',
          price: 18.0,
        },
        {
          id: 'prod-012',
          name: 'Coca-Cola',
          description: 'Refrigerante clássico.',
          price: 8.5,
        },
        {
          id: 'prod-013',
          name: 'Orange Juice',
          description: 'Suco de laranja natural.',
          price: 10.0,
        },
      ],
    },
  ],
};
