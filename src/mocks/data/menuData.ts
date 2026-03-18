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
                    imageUrl: 'https://images.unsplash.com/photo-1760533536738-f0965fd52354?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    badge: 'new',
                },
                {
                    id: 'prod-003',
                    name: 'Veggie Burger',
                    description: 'Hambúrguer vegetariano com abacate e molho especial.',
                    price: 24.9,
                    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    id: 'prod-004',
                    name: 'Double Cheese Burger',
                    description: 'Dois hambúrgueres com queijo duplo e bacon.',
                    price: 32.5,
                    imageUrl: 'https://plus.unsplash.com/premium_photo-1668025335051-98c22e32cbba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    id: 'prod-005',
                    name: 'Bacon Burger',
                    description: 'Hambúrguer com bacon crocante e queijo cheddar.',
                    price: 30.0,
                    imageUrl: 'https://plus.unsplash.com/premium_photo-1675283476222-6a1a01d6a0ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    id: 'prod-006',
                    name: 'Spicy Burger',
                    description: 'Hambúrguer apimentado com jalapeños e molho picante.',
                    price: 29.5,
                    imageUrl: 'https://images.unsplash.com/photo-1600271644420-f2a77271b6f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                    imageUrl: 'https://images.unsplash.com/photo-1575596510825-f748919a2bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    badge: 'promo',
                },
                {
                    id: 'prod-012',
                    name: 'Coca-Cola',
                    description: 'Refrigerante clássico.',
                    price: 8.5,
                    imageUrl: 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    id: 'prod-013',
                    name: 'Orange Juice',
                    description: 'Suco de laranja natural.',
                    price: 10.0,
                    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
            ],
        },
        {
            id: 'cat-3',
            title: 'Sobremesas',
            order: 3,
            products: [
                                {
                    id: 'prod-011',
                    name: 'Milkshake de Ovomaltine',
                    description: 'Delicioso milkshake cremoso com crocante.',
                    price: 18.0,
                    imageUrl: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    id: 'prod-021',
                    name: 'Sorvete',
                    description: 'Sorvete cremoso e saboroso, varios sabores.',
                    price: 15.0,
                    imageUrl: 'https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    id: 'prod-012',
                    name: 'Tortinha',
                    description: 'Tortinha cremosa, varios sabores.',
                    price: 8.5,
                    imageUrl: 'https://plus.unsplash.com/premium_photo-1692833835930-4b721be7f4f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
            ],
        },
    ],
};
