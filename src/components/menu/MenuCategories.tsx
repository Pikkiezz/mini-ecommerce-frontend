'use client';

import { useState } from 'react';
import { MenuItemCard, CategoryHeader, CategoryFilter } from './ui';

// Mock data for menu items
const menuCategories = [
  {
    id: 1,
    name: 'Croissants & Pastries',
    emoji: '🥐',
    items: [
      { name: 'Classic Butter Croissant', price: 4.50, description: 'Flaky, buttery layers baked to perfection', emoji: '🥐', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop&crop=center' },
      { name: 'Chocolate Croissant', price: 5.00, description: 'Rich chocolate filling in our signature croissant', emoji: '🍫', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop&crop=center' },
      { name: 'Almond Croissant', price: 5.50, description: 'Toasted almonds and sweet filling', emoji: '🥜' },
      { name: 'Ham & Cheese Croissant', price: 6.00, description: 'Savory ham and melted cheese', emoji: '🧀' },
    ]
  },
  {
    id: 2,
    name: 'Fresh Breads',
    emoji: '🥖',
    items: [
      { name: 'Sourdough Loaf', price: 8.00, description: 'Traditional sourdough with crispy crust', emoji: '🍞', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop&crop=center' },
      { name: 'Whole Wheat Bread', price: 7.50, description: 'Healthy whole wheat with seeds', emoji: '🌾' },
      { name: 'Baguette', price: 3.50, description: 'Classic French baguette, fresh daily', emoji: '🥖', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=300&fit=crop&crop=center' },
      { name: 'Focaccia', price: 6.50, description: 'Italian herb focaccia with olive oil', emoji: '🫓' },
    ]
  },
  {
    id: 3,
    name: 'Coffee & Beverages',
    emoji: '☕',
    items: [
      { name: 'Espresso', price: 2.50, description: 'Rich, bold espresso shot', emoji: '☕' },
      { name: 'Cappuccino', price: 3.50, description: 'Perfect balance of espresso, milk, and foam', emoji: '☕' },
      { name: 'Latte', price: 4.00, description: 'Smooth espresso with steamed milk', emoji: '☕' },
      { name: 'Americano', price: 3.00, description: 'Espresso with hot water', emoji: '☕' },
      { name: 'Hot Chocolate', price: 3.50, description: 'Rich, creamy hot chocolate', emoji: '🍫' },
    ]
  },
  {
    id: 4,
    name: 'Cakes & Desserts',
    emoji: '🍰',
    items: [
      { name: 'Chocolate Cake Slice', price: 4.50, description: 'Rich chocolate cake with ganache', emoji: '🍰' },
      { name: 'Cheesecake', price: 5.00, description: 'Creamy New York style cheesecake', emoji: '🧀' },
      { name: 'Tiramisu', price: 5.50, description: 'Classic Italian tiramisu', emoji: '🍰' },
      { name: 'Fruit Tart', price: 4.00, description: 'Fresh seasonal fruits on pastry cream', emoji: '🥧' },
    ]
  }
];



const MenuCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Filter categories based on selection
  const filteredCategories = selectedCategory 
    ? menuCategories.filter(category => category.id === selectedCategory)
    : menuCategories;

  // Extract categories for filter buttons
  const categoriesForFilter = menuCategories.map(category => ({
    id: category.id,
    name: category.name,
    emoji: category.emoji
  }));

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <CategoryFilter
          categories={categoriesForFilter}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Filtered Categories */}
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-16">
            {/* Category Header */}
            <CategoryHeader 
              name={category.name} 
              emoji={category.emoji} 
            />

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <MenuItemCard
                  key={index}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategories;
