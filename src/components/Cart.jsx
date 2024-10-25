const Cart = ({ children }) => {
  return (
    <>
      <h1 className="capitalize text-2xl px-5 font-semibold">cart</h1>
      <div className="cartBody flex gap-x-5 p-3 flex-wrap">{children}</div>
    </>
  );
};

function Body({ jumlah, name, price, totalPrice }) {
  return (
    <>
      <div className="jumlah">
        <p className="text-xl capitalize font-semibold">jumlah</p>
        <p className="text-center p-3 text-sm font-semibold">{jumlah}</p>
      </div>

      <div className="product-name">
        <p className="text-xl capitalize font-semibold pb-3">nama product</p>
        <p className="capitalize ps-3 font-semibold text-sm">{name}</p>
        <p className="px-3 py-2 text-sm font-semibold">{price}</p>
      </div>

      <div className="total-price">
        <p className="text-xl capitalize font-semibold">total harga</p>
        <p className="p-3 text-sm font-semibold">{totalPrice}</p>
      </div>
    </>
  );
}

Cart.Body = Body;

export default Cart;
