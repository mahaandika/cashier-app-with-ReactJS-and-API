import Navbar from "../components/Navbar";
import "preline/preline";
import Product from "../components/Product";
import Category from "../components/Category";
import Cart from "../components/Cart";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Admin = () => {
  const url = "http://localhost:8000/";
  const [menus, setMenus] = useState([]);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    axios
      .get(url + "products")
      .then((res) => {
        const menus = res.data;
        setMenus(menus);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url + "categories")
      .then((res) => {
        const categorys = res.data;
        setCategorys(categorys);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full mt-10">
        <div className="category  w-full basis-[30%]">
          {categorys &&
            categorys.map((category) => <Category>{category.nama}</Category>)}
        </div>

        <div className="product  basis-1/2 w-full">
          <Product>
            <div className="body mt-5 rounded flex flex-wrap gap-x-3 ">
              {menus &&
                menus.map((menu) => (
                  <Product.title
                    title={menu.nama}
                    image={`public/images/${menu.category.nama}/${menu.gambar}`}
                    harga={menu.harga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                    key={menu.id}
                  />
                ))}
            </div>
          </Product>
        </div>

        <div className="cart w-full basis-[20%]">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Admin;
