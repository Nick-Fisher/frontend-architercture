import faker from 'faker';

const mount = (el) => {
  let products = '';

  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  document.querySelector('#dev-cart').innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  // Assuming our container doesn't have an element with id 'dev-products'
  if (el) {
    mount(el);
  }
}

export { mount };
