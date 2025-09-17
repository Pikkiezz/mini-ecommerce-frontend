'use client';

interface MenuItem {
  name: string;
  price: number;
  description: string;
  image?: string;
  emoji?: string;
}

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard = ({ item, index }: MenuItemCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-stone-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-stone-700 font-poppins">
          {item.name}
        </h3>
        <span className="text-xl font-bold bg-gradient-to-r from-stone-600 to-amber-600 bg-clip-text text-transparent">
          ${item.price}
        </span>
      </div>

      {/* Product Image */}
      <div className="w-full h-48 mb-4 rounded-xl overflow-hidden shadow-lg">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stone-200 to-amber-200 flex items-center justify-center">
            <span className="text-8xl animate-pulse">
              {item.emoji || '🍽️'}
            </span>
          </div>
        )}
      </div>
      
      <p className="text-stone-600 text-sm font-quicksand leading-relaxed">
        {item.description}
      </p>
      <button className="mt-4 w-full bg-gradient-to-r from-stone-600 to-amber-600 text-white font-bold py-2 px-4 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItemCard;
