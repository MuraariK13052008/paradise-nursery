import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} className="cart-item-img" />
      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">₹{item.price} each</div>
      </div>
      <div className="cart-item-controls">
        <button className="qty-btn" onClick={handleDecrease}>−</button>
        <span className="qty-num">{item.quantity}</span>
        <button className="qty-btn" onClick={handleIncrease}>+</button>
        <button className="delete-btn" onClick={handleRemove}>Remove</button>
      </div>
      <div className="cart-item-total">₹{item.price * item.quantity}</div>
    </div>
  );
}

function CartPage({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <p style={{ marginTop: '0.4rem', opacity: 0.8 }}>
          {totalCount} {totalCount === 1 ? 'item' : 'items'}
        </p>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty 🌿</p>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="cart-summary">
              <div className="cart-total-row">
                <span>Total ({totalCount} plants)</span>
                <span>₹{total}</span>
              </div>
              <button className="checkout-btn">
                Checkout — Coming Soon
              </button>
              <button className="continue-btn" onClick={onContinueShopping}>
                ← Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
