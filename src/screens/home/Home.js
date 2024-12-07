import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Img1 from "../../assets/images/J23_P3B_PC_NTA_Hero_2x_V3._CB573693536_.jpg";
import Img2 from "../../assets/images/Deals-on-makeup-PCyu._CB573741808_.jpg";
import Img3 from "../../assets/images/Phase_3_Tallhero_3000x1200._CB573749545_.jpg";



function Home() {
  const [productGroups, setProductGroups] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        const products= await result.products
        const groups = [];
        let totalProcessed = 0;
        for (let i = 0; i < products.length; i += 4) {
          if (totalProcessed >= 16) break; 
          const group = products.slice(i, i + 4);
          groups.push(group);
          totalProcessed += group.length;
        }
  
        setProductGroups(groups);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const titles = [
    "Up to 70% off |",
    "Up to 80% off |",
    "Minimum 75% off |",
    "Minimum 50% off |",
  ];
  
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Img1} height={200} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Img2} height={200} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Img3} height={200} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


  <div className="container-fluid py-3" style={{backgroundColor: "brown"}}>
    <div className="row g-3 px-3">
      {productGroups.map((group, index) => (
        <div className="col-12 col-lg-3 p-3 bg-light shadow-lg"  key={index}>
          <h5>{titles[index] || "Products"}</h5>
          <div className="d-flex flex-wrap">
            {group.map((product) => (
              <div
                key={product.id}
                className="my-2 pe-1 w-50"
                style={{ height: "150px"}}
              >
                <NavLink
                  to={`/products/${product.id}`}
                  className="link-body-emphasis link-underline-opacity-0" style={{fontSize: '12px'}}
                >
                  <img src={product.thumbnail} style={{objectFit: "contain", backgroundColor: "beige"}} width='100%' height={100} alt={product.title} />
                  <p className="overflow-hidden" style={{ height: "40px" }}>
                    {product.title}
                  </p>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>


    </>
  );
}

export default Home;
