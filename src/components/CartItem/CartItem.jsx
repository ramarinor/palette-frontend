import './CartItem.css';
function CartItem({ cartItem, user, setUser }) {
  function addItemToCart(productId, productType) {
    const updatedUser = JSON.parse(JSON.stringify(user));
    const cartItemFound = updatedUser.cart.find(
      (cartItem) => cartItem.id === productId && cartItem.type === productType
    );
    cartItemFound.quantity++;
    setUser(updatedUser);
    fetch(`https://power-glossy-rocket.glitch.me/users/${user.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        cart: updatedUser.cart
      })
    });
  }
  function removeItemFromCart(productId, productType) {
    const updatedUser = JSON.parse(JSON.stringify(user));
    const cartItemFound = updatedUser.cart.find(
      (cartItem) => cartItem.id === productId && cartItem.type === productType
    );
    cartItemFound.quantity--;
    if (cartItemFound.quantity === 0) {
      updatedUser.cart = updatedUser.cart.filter(
        (cartItem) => cartItem !== cartItemFound
      );
    }
    setUser(updatedUser);
    fetch(`https://power-glossy-rocket.glitch.me/users/${user.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        cart: updatedUser.cart
      })
    });
  }
  const src =
    cartItem.type === 'paint'
      ? `../../../assets/paints/${cartItem.id}.png`
      : `../../../assets/samples/${cartItem.id}.jpeg`;
  return (
    <li className='cart-container__item'>
      <img src={src} alt={`${cartItem.id} ${cartItem.type}`} width='90' />
      <p>
        {`${cartItem.id} ${cartItem.type}`} ({cartItem.price}€)
      </p>
      <p className='quantity'>
        <button
          className='cta cart-button'
          onClick={() => removeItemFromCart(cartItem.id, cartItem.type)}
        >
          -
        </button>
        <span>{cartItem.quantity}</span>
        <button
          className='cta cart-button'
          onClick={() => addItemToCart(cartItem.id, cartItem.type)}
        >
          +
        </button>
      </p>
    </li>
  );
}

export default CartItem;
