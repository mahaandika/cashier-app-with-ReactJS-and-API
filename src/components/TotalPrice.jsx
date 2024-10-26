const TotalPrice = ({ carts }) => {
  const totalPrice = carts.reduce((result, item) => {
    return result + item.totalPrice;
  }, 0);
  return (
    <>
      <div className="total fixed bottom-0 mb-3">
        <p className="capitalize font-bold text-xl">
          total harga ={" "}
          {totalPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <button className="px-3 py-2 rounded bg-blue-200">checkout</button>
      </div>
    </>
  );
};

export default TotalPrice;
