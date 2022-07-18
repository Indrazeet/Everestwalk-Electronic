import React,{useEffect,useState} from 'react';
import { Nav } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';

const ProductTwo = () => {
     
    const {id} = useParams ();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct()
    },[])


    const Loading = () => {
        return(
            <>
         <div className='col-md-6' style={{lineHeight:2}}>
            <Skeleton height={50} width={300}/>
            <Skeleton height={75}/>
            <Skeleton height={25} width={150}/>
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100}/>
            <Skeleton height={50} width={100} style={{marginLeft:6}}/>

         </div>
            </>
        );
    };

    const ShowProduct = () => {
        return(
            <>
             <div className='col-md-6'>
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
             </div>
             <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Ratting{product.ratting&& product.ratting.rate}
                </p>
                    <h3 className='dispalay-6 fw-6 my-4'>
                     $   {product.price}
                    </h3>
                    <p className="lead">
                         {product.description}
                    </p>
                    <button className="btn btn-outline-dark"> 
                    Add to Cart
                    </button>

                    <Nav.Link  href='/cart'className="btn btn-outline-dark"> 
                    Go to Cart
                    </Nav.Link>
             </div>
            </>
        )
    };
  return (
   <>
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
   
   </>
  )
}

export default ProductTwo;