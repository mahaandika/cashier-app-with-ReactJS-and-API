const Product = ({ children }) => {
  return (
    <>
      <h1 className="capitalize text-2xl px-5 font-semibold">product</h1>
      <div className="card">{children}</div>
    </>
  );
};

function Body({ title, image, harga, addToCart }) {
  return (
    <>
      <div className="w-[calc(33.33%-12px)]">
        <img src={image} alt="" className="w-full" />
        <h1 className="font-semibold capitalize text-2xl my-3">{title}</h1>
        <p className="mb-3 font-semibold">{harga}</p>
        <button
          className="px-3 py-1.5 bg-blue-400 rounded mb-10"
          onClick={addToCart}
        >
          tambah
        </button>
      </div>
    </>
  );
}

Product.body = Body;

export default Product;
