const Product = ({ product, buttonHandler }) => {

  return (
    <>
      <div className="card mt-3 " style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text text-danger">₹ {product.price}</p>
          <button className="btn btn-primary" value={product.title} onClick={buttonHandler}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
