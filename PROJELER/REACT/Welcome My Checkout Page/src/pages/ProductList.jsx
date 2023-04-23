import data from "../data";

const ProductList = () => {
  
  console.log(data);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        <article id="product-panel" className="col-md-5">
          {data.map((item) => {
            const { name, image, price, dampingRate } = item
                return (
          <div className="card shadow-lg  mb-3 ">
            <div className="row g-0 ">
              <div className="col-md-10">
                <img src={image} className="w-100 h-100 rounded-start" alt={"name"} title={""}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title" role="button">
                    {name}
                  </h5>
                  <div className="product-price">
                    <p className="text-warning h2">
                      $
                      <span className="damping-price">
                        {(price * dampingRate).toFixed(2)}
                      </span>
                      <span className="h5 text-dark text-decoration-line-through">
                        {parseFloat(price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>)})}
                </article>
                </div>
                </div>

  )}


export default ProductList
