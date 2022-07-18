import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import { Nav } from "react-bootstrap";

const Products = () => {
  const [data, SetData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [lodding, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      // console.log(await response.clone().json())
      if(componentMounted){
        let result = await response.clone().json();

        SetData(result.data.product);
        setFilter(result.data.product);
        setLoading(false);
        console.log(filter);
      }

      return  () => {
        componentMounted = false;
      }
    }

    
    getProducts();
  }, []);

  console.log(data)
  const Loading =() =>{
    return(
        <>
          <div className="col-lg-3">
            <Skeleton height={350}/>
          </div>
          <div className="col-lg-3">
            <Skeleton height={350}/>
          </div>
          <div className="col-lg-3">
            <Skeleton height={350}/>
          </div>
          <div className="col-lg-3">
            <Skeleton height={350}/>
          </div>
        </>
    );
};

   const filterProduct = (cat) => {
    const updateList = data.filter((x)=>x.category === cat);
    setFilter(updateList)
   }
const ShowProducts = () =>{
    return(
        <>

<hr className="bg-black text-black"/>

          <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
        <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(data)}> All</button>
      
        <button className="btn btn-outline-dark me-2 " onClick={() =>filterProduct("laptop")}> Laptops</button>
       
        <button className="btn btn-outline-dark me-2"onClick={() =>filterProduct("mobiles")}> Mobiles</button>

        <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("watch")}> Watchs</button>

        <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("keyword")}> Keyboards</button>

        <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("headseat")}> Headseats</button>

        <button className="btn btn-outline-dark me-2"onClick={() =>filterProduct("electronic'laptop")}> Electronics</button>

     

    </div>
   
    {filter.map((product) => {
        return(
            <> 
            <div className="col-md-3 mb-4">
            <div className=" shadow-lg h-100 text-center p-4" key={product.id}>
           <img src={'https://electronic-ecommerce.herokuapp.com/'+product.image} className="card-img-top" alt={product.name} height="250px"/>
           <div className="card-body">
            
           <h5 className="card-title">{product.name}...</h5>
           <h6> Stock {product.stock}</h6>
           <p className="card-text mb-0 lead fw-bold">{product.price}</p>
            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark mt-4 mx-4">Buy Now</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark mt-4 mx-4">Add to cart</NavLink>
         </div>
         </div>
            </div>
            </>
        )
    })}
        </>
    );
  
};
  return (
   
    <div>
        <div className="Container my-5 py-5 ">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder
                    text-center">Latest Products</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                {lodding ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  );
};

export default Products;
