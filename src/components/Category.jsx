const Category = ({ children }) => {
  return (
    <>
      <h1 className="capitalize text-2xl px-5 font-semibold">category</h1>
      {children}
    </>
  );
};

function Body({ nama, changeCategory }) {
  return (
    <>
      <div className="list px-5 capitalize font-semibold text-xl mt-5">
        <h5
          className="border border-black px-5 py-3 rounded-lg shadow-lg mb-6 cursor-pointer hover:bg-slate-100 active:bg-slate-200"
          onClick={changeCategory}
        >
          {nama}
        </h5>
      </div>
    </>
  );
}

Category.Body = Body;

export default Category;
