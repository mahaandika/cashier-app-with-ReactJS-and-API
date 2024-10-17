import Navbar from "../components/Navbar";
import "preline/preline";
import Product from "../components/Product";
import Category from "../components/Category";
import Cart from "../components/Cart";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full mt-10">
        <div className="category  w-full basis-[30%]">
          <Category />
        </div>
        <div className="product  basis-1/2 w-full">
          <Product />
        </div>
        <div className="cart w-full basis-[20%]">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Admin;
