const Category = ({ children, changeCategory }) => {
  return (
    <>
      <h1 className="capitalize text-2xl px-5 font-semibold">category</h1>
      <div className="list px-5 capitalize font-semibold text-xl mt-5">
        <h5
          className="border border-black px-5 py-3 rounded-lg shadow-lg mb-6 cursor-pointer hover:bg-slate-100"
          onClick={changeCategory}
        >
          {children}
        </h5>
      </div>
    </>
  );
};

export default Category;
