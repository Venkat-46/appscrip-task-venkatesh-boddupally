import {useState,useEffect} from 'react';
import Header from './components/Header';
import Footer from "./components/Footer"
import api from './components/Services/api';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import './App.css';
import Filters from './components/Filters';
import ProductsCard from './components/ProductsCard';

function App() {
  const [showFilters, setShowFilters] =useState(true)
  const [productsList,setProductsList]=useState([]);

const fetchData=async()=>{
  try{
        const response=await api.getProducts();
        const data= response.data;
        setProductsList(data);
      }catch(error){
        console.error('Error fetching products:',error);
      }
    }

  useEffect(() =>{
    fetchData();
  },[])
    
  return (
    <div className="App">
      <Header/>
      <div className="main-content-container">
        <p className='home-text-ele'>Home |<span className='shop-ele'>  SHOP</span></p>
        <div className='content-container'>
          <div className='text-content-container'>
                <h1 className='heading-text'>DISCOVER OUR PRODUCTS</h1>
                <p className='para-text'>Lorem ipsum dolor sit amet consectetur. 
                    Amet est posuere rhoncus scelerisque. 
                    Dolor integer scelerisque nibh amet mi
                    ut elementum dolor.
                </p>
          </div>
          <hr />
          <div className='filters-container'>
              <p className='filter-text'>Filter</p>
              <p className='pipe-text'>|</p>
              <div className='filters-sub-container'>
                <p className='total-products-count'>3250 Items</p>
                <button className='show-filters-button' onClick={() => setShowFilters(!showFilters)}>
                  {showFilters ? (
                    <>
                      <IoIosArrowForward /> Show Filters
                    </>
                  ) : (
                    <>
                      <IoIosArrowBack /> Hide Filters
                    </>
                  )}
                </button>
              </div>
              <select className='select-container'>
                <option>RECOMENDED</option>
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE:HIGH TO LOW</option>
                <option>PRICE:LOW TO HIGH</option>
              </select>
          </div>
          <hr/>
          <div className='products-filters-container'>
            {showFilters && <Filters/>}
            <ul className='products-container'>
              {
                productsList.length===0 ? (
                  <li className='loader'>Loading products.....</li>
                ):(productsList.map(each => <ProductsCard product={each} key={each.id}/>))
              }
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
