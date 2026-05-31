import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';

const plantData = [
  // Category 1: Tropical
  {
    id: 'tp1', name: 'Monstera Deliciosa', price: 649, category: 'Tropical',
    thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=70',
  },
  {
    id: 'tp2', name: 'Bird of Paradise', price: 899, category: 'Tropical',
    thumbnail: 'https://images.unsplash.com/photo-1612363148978-5ea4dd7bfedd?w=300&q=70',
  },
  {
    id: 'tp3', name: 'Fiddle Leaf Fig', price: 749, category: 'Tropical',
    thumbnail: 'https://images.unsplash.com/photo-1592170551380-e1a2dab5f3cb?w=300&q=70',
  },
  {
    id: 'tp4', name: 'Philodendron Pink Princess', price: 1199, category: 'Tropical',
    thumbnail: 'https://images.unsplash.com/photo-1566055909643-a51b4271d542?w=300&q=70',
  },
  {
    id: 'tp5', name: 'Calathea Orbifolia', price: 549, category: 'Tropical',
    thumbnail: 'https://images.unsplash.com/photo-1610587908065-71de783b3a58?w=300&q=70',
  },
  {
    id: 'tp6', name: 'Anthurium', price: 599, category: 'Tropical',
    thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=300&q=70',
  },
  // Category 2: Succulents
  {
    id: 'sc1', name: 'Echeveria Elegans', price: 199, category: 'Succulents',
    thumbnail: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=300&q=70',
  },
  {
    id: 'sc2', name: 'Aloe Vera', price: 249, category: 'Succulents',
    thumbnail: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=300&q=70',
  },
  {
    id: 'sc3', name: 'Jade Plant', price: 299, category: 'Succulents',
    thumbnail: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&q=70',
  },
  {
    id: 'sc4', name: 'Haworthia Zebra', price: 179, category: 'Succulents',
    thumbnail: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=300&q=70',
  },
  {
    id: 'sc5', name: 'Agave Blue Glow', price: 349, category: 'Succulents',
    thumbnail: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=300&q=70',
  },
  {
    id: 'sc6', name: 'String of Pearls', price: 399, category: 'Succulents',
    thumbnail: 'https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?w=300&q=70',
  },
  // Category 3: Air Purifiers
  {
    id: 'ap1', name: 'Peace Lily', price: 449, category: 'Air Purifiers',
    thumbnail: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300&q=70',
  },
  {
    id: 'ap2', name: 'Snake Plant', price: 499, category: 'Air Purifiers',
    thumbnail: 'https://images.unsplash.com/photo-1572688484438-313a6a50be7b?w=300&q=70',
  },
  {
    id: 'ap3', name: 'Spider Plant', price: 299, category: 'Air Purifiers',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=70',
  },
  {
    id: 'ap4', name: 'Pothos Golden', price: 249, category: 'Air Purifiers',
    thumbnail: 'https://images.unsplash.com/photo-1585232352617-a0a78e9bc5b3?w=300&q=70',
  },
  {
    id: 'ap5', name: 'Boston Fern', price: 349, category: 'Air Purifiers',
    thumbnail: 'https://images.unsplash.com/photo-1599598425947-5202edd56fdf?w=300&q=70',
  },
  {
    id: 'ap6', name: 'Rubber Plant', price: 579, category: 'Air Purifiers',
    thumbnail: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=300&q=70',
  },
];

const categories = ['Tropical', 'Succulents', 'Air Purifiers'];

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const inCart = cartItems.some(i => i.id === plant.id);

  const handleAdd = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-card">
      <img src={plant.thumbnail} alt={plant.name} className="product-img" />
      <div className="product-info">
        <div className="product-name">{plant.name}</div>
        <div className="product-price">₹{plant.price}</div>
        <button
          className="add-to-cart-btn"
          onClick={handleAdd}
          disabled={inCart}
        >
          {inCart ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Our Plants</h2>
        <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
          Curated houseplants delivered to your door
        </p>
      </div>
      {categories.map(cat => (
        <div className="category-section" key={cat}>
          <h3 className="category-title">{cat}</h3>
          <div className="products-grid">
            {plantData
              .filter(p => p.category === cat)
              .map(plant => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
