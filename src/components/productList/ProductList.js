import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

function ProductList(props) {
  const [productList, setProductList] = useState([])
  async function loadProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products")
      const result = await response.json()
        setProductList(result.products);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }
  useEffect(() => {
    loadProducts()
  }, []);

  var searchText = props.searchText;
  var filterProducts = productList.filter((p => {
    return p.title.toLowerCase().includes(searchText.toLowerCase())
  }))
  return (
    <>

      <div className="d-flex flex-wrap justify-content-evenly">
        {
          filterProducts.map((p) => {
            return <ProductCard product={p} />
          })
        }
      </div>

    </>
  );
}


  export default ProductList;