import { Link, NavLink } from "react-router-dom";

function ProductCard(props) {
  var prod = props.product;

  return (
    <>
      <div className="card text-center m-2" style={{ width: '13rem', height: '330px' }}>
        <NavLink className='link-body-emphasis link-underline-opacity-0' to={'/products/' + prod.id}>
          <div><img src={prod.thumbnail} className="object-fit-contain" style={{ backgroundColor: "beige" }} height={200} width='100%'></img></div>
          <div className="p-2 link-info fw-bold" style={{height: '15%'}} >{prod.title}</div>
          <div className="p-2 link-dark"><sup>₹</sup><span className="fw-medium fs-4">{prod.price}</span>
            <span> M.R.P:<s>₹{(prod.price / (1 - prod.discountPercentage / 100)).toFixed(2)}</s>
            </span>
            <span> ({prod.discountPercentage} % off)</span>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ProductCard;