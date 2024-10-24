import Navbar from "../components/Navbar";
import "preline/preline";
import Product from "../components/Product";
import Category from "../components/Category";
import Cart from "../components/Cart";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Admin = () => {
  const url = "http://localhost:8000/";
  const [menus, setMenus] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [categorysChoose, setCategorysChoose] = useState("Makanan");
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios
      .get(url + "products?category.nama=" + categorysChoose)
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

  function changeCategory(value) {
    setCategorysChoose(value);
    setMenus([]);

    axios
      .get(url + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        setMenus(menus);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addToCart(value) {
    axios.get(url + "keranjangs?product.id=" + value.id).then((res) => {
      if (res.data.length === 0) {
        const tmpCart = {
          jumlah: 1,
          totalPrice: value.harga,
          product: value,
        };

        axios.post(url + "keranjangs", tmpCart).then((res) => {
          Swal.fire({
            title: "success",
            text: "item added to cart",
            icon: "success",
          });
        });
      } else {
        const tmpCart = {
          jumlah: res.data[0].jumlah + 1,
          totalPrice: res.data[0].totalPrice + value.harga,
          product: value,
        };

        axios.put(url + "keranjangs/" + res.data[0].id, tmpCart).then((res) => {
          Swal.fire({
            title: "success",
            text: tmpCart.product.nama + "has been added",
            icon: "success",
          });
        });
      }
    });
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full mt-10">
        <div className="category  w-full basis-[30%]">
          <Category>
            {categorys &&
              categorys.map((category) => (
                <Category.Body
                  key={category.id}
                  nama={category.nama}
                  changeCategory={() => changeCategory(category.nama)}
                />
              ))}
          </Category>
        </div>

        <div className="product  basis-1/2 w-full">
          <Product>
            <div className="body mt-5 rounded flex flex-wrap gap-x-3 ">
              {menus &&
                menus.map((menu) => (
                  <Product.body
                    title={menu.nama}
                    image={`public/images/${menu.category.nama}/${menu.gambar}`}
                    harga={menu.harga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                    key={menu.id}
                    addToCart={() => addToCart(menu)}
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
